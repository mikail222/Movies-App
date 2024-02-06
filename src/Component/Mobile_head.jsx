import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiSearch } from "react-icons/tfi";
import CastSharpIcon from "@mui/icons-material/CastSharp";
import { RiYoutubeFill } from "react-icons/ri";

const Mobile_head = () => {
  return (
    <div className="w-[100%] p-[3%] lg:hidden flex flex-row justify-between items-center">
      <div className=" w-[55%] flex flex-row justify-start items-center">
        <RiYoutubeFill className="fill-[red]  w-[35px] h-[33px]" />
        <p className="font-extrabold font-[Oswald] text-[1.2rem]">YouTube</p>
      </div>
      <div className=" w-[35%] flex flex-row justify-around items-center">
        <CastSharpIcon />
        <IoIosNotificationsOutline className="w-[35px] h-[30px]" />
        <TfiSearch className="w-[20px] h-[20px] " />
      </div>
    </div>
  );
};

export default Mobile_head;
