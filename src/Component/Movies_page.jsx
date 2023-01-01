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
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=784606060685ad3309ab36d5adb48695&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((response) => setMovies(response.data));
  }, []);
  // console.log(movies);
  // const filterObj = Object.values(showMovies)
  //   .filter((u) => u[1])
  //   .map((x) => x);
  // console.log(filterObj);
  // console.log(Object.keys(filterObj).map((x) => x));
  return (
    <div className="moviesField ">
      <div className=" flex  flex-wrap gap-[1rem] justify-center w-[100%] h-[100%] mt-8">
        {/* {Array.isArray(showMovies) ? (
          showMovies.map((u) => <h1>{u.original_title}</h1>)
        ) : (
          <h1>check out for other data type</h1>
        )} */}
        {/* {showMovies.results.map((u, i) => (
          <ul className="flex flex-col w-[15rem] bg-[white] h-auto drop-shadow-md ">
            <li key={u}>{u.title}</li>
            <img src={u.poster_path} alt="poster" />
          </ul>
        ))} */}

        {JSON.stringify(movies, null, 2)}
        <p className="flex flex-col  justify-center  items-center">
          welcome to youtube cloned App
        </p>
      </div>
    </div>
  );
};

export default Movies_page;
