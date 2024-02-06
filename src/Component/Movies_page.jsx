import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Component/MoviesSlice";
import axios from "axios";

const Movies_page = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const { showMovies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPost());
  }, []);
  console.log(showMovies);
  const pics = showMovies.results?.map(({ backdrop_path }) => backdrop_path);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="moviesField mb-[5rem] w-[100%]">
      <div className="div">
        {showMovies &&
          showMovies.results?.map(
            ({
              backdrop_path,
              title,
              release_date,
              vote_count,
              poster_path,
              id,
            }) => (
              <ul
                className="flex flex-col w-[100%] h-auto drop-shadow-md "
                key={id}
              >
                <img
                  src={
                    `${BASE_URL}${backdrop_path}` || `${BASE_URL}${poster_path}`
                  }
                  alt="poster"
                  className="w-[100%] lg:h-[50vh] object-cover  lg:rounded-[10px]"
                />
                <div className="w-[100%] my-[3%] flex flex-row items-center gap-[2%]">
                  <img
                    src={`${BASE_URL}${poster_path}`}
                    alt=""
                    className="w-[55px] h-[55px] object-cover rounded-[65px]"
                  />
                  <div className="gap-[6%]">
                    <h3>{title}</h3>
                    <p>
                      {vote_count}k views .{release_date}
                    </p>
                  </div>
                </div>
              </ul>
            )
          )}

        {/* {showMovies && (
          <p className="flex flex-col  justify-center  items-center">
            welcome to youtube cloned App
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Movies_page;
