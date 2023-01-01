import React from "react";

const Menu_bar = () => {
  const menu = [
    "News",
    "Technology",
    "Culture",
    "Religion",
    "Politics",
    "Music",
    "Nollywood",
    "Comedy",
    "Programming",
    "Talent",
    "Project",
    "Skill",
    "Html",
    "JavaScript",
    "React",
    "Python",
    "Weather",
  ];
  return (
    <div className="menu_bar  ">
      {" "}
      <p className="each_bar bg-[black] text-white  cursor-pointer">All</p>
      {menu.map((m, i) => (
        <p className="each_bar  cursor-pointer" key={i}>
          {m}
        </p>
      ))}
    </div>
  );
};

export default Menu_bar;
