import React, { useState } from "react";
import { MdExplore, MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Menu_bar = () => {
  const menu = [
    { name: "News" },
    { name: "Technology" },
    { name: "Culture" },
    { name: "Religion" },
    { name: "Politics" },
    { name: "Music" },
    { name: "Nollywood" },
    { name: "Comedy" },
    { name: "Programming" },
    { name: "Talent" },
    { name: "Project" },
    { name: "Skill" },
    { name: "Html" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Python" },
    { name: "Weather" },
  ];
  const [slide, setSlide] = useState(0);
  const pre = () => {
    const isSlide = slide === 0;
    const newSlide = isSlide ? menu.length - 1 : slide - 1;
    setSlide(newSlide);
  };
  const next = () => {
    const isLastSlide = slide === menu.length - 1;
    const newSlide = isLastSlide ? 0 : slide + 1;
    setSlide(newSlide);
  };

  return (
    <div className="flex flex-row justify-center items-center my-[2%] gap-[.5rem]">
      <MdKeyboardArrowLeft onClick={(e) => pre(e)} className="arrow" />
      <div className="menu_bar lg:w-[80vw] w-[100vw]  px-[3%]">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xF0P3WZlwtzDKR4LR6RkwTggR4BUETG1Cg&usqp=CAU"
          alt=""
          className="lg:hidden flex w-[52px] h-[35px] object-cover each_bar"
        /> */}
        <MdExplore className="lg:hidden w-[52px] h-[35px] each_bar" />
        <p className="each_bar bg-[black] text-white ">All</p>
        {menu.map(({ name }, i) => (
          <p className="each_bar cursor-pointer" key={i}>
            {name}
          </p>
        ))}
      </div>
      <MdKeyboardArrowRight onClick={(e) => next(e)} className="arrow" />
    </div>
  );
};

export default Menu_bar;
