import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { RiYoutubeFill } from "react-icons/ri";

const Header = ({ setToggleSideBAr }) => {
  return (
    <div className="hidden lg:flex flex-row justify-around items-center w-[100%] my-[6px]">
      <div className="flex flex-row justify-around items-center w-[80%]">
        <div className="flex flex-row justify-around items-center">
          <div
            className="voice  w-[2.5rem] h-[38px]  rounded-[80%] flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setToggleSideBAr(true)}
          >
            <AiOutlineMenu className="w-[35px] h-[25px]" />
          </div>
          <div className="flex flex-row justify-center w-[15vw] cursor-pointer">
            <div className=" w-[60%] flex flex-row justify-start items-center">
              <RiYoutubeFill className="fill-[red]  w-[45px] h-[45px]" />
              <p className="font-[Oswald] text-[1.75rem]">YouTube</p>
            </div>
            <p className="text-[0.65rem] text-[gray]  font-semibold font-sans">
              NG
            </p>
          </div>
        </div>

        <form className="flex flex-row w-[65%]  ml-[5%] h-[8vh]">
          <input
            type="search"
            name="searchMovies"
            placeholder="Search"
            style={{
              border: "1px solid  lightgray",
            }}
            className="pl-[1rem] w-[90%]  outline-none"
          />
          <div className="search w-[13%] flex flex-col justify-center items-center">
            <TfiSearch className="w-[20px] h-[20px] " />
          </div>
        </form>

        <div className="voice  w-[50px] h-[50px] bg-[#e5e7eb] rounded-[80px] flex flex-col justify-center items-center cursor-pointer">
          <MdKeyboardVoice className="w-[25px] h-[25px]" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-[10%]">
        <BiVideoPlus className="w-[35px] h-[25px] cursor-pointer" />
        <IoIosNotificationsOutline className="w-[35px] h-[35px] cursor-pointer" />
        <div className="w-[2.5rem] h-[38px] bg-[green] flex flex-col justify-center items-center rounded-[100px] text-white cursor-pointer">
          <h3>M</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
