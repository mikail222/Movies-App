import { Add } from "@mui/icons-material";
import React from "react";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";

const Sidebar_icon = () => {
  return (
    <div>
      <div className="bar ">
        <div>
          <MdHomeFilled className="icon" />
          <p className="text-center">Home</p>
        </div>
        <div>
          <img
            className="w-[16px] lg:w-[1.3rem]"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="">shorts</p>
        </div>
        <nav className="flex flex-col justify-center items-center w-[35px] h-[35px] lg:hidden p-[5px] border-[1px] border-[black] rounded-[100px]">
          <Add />
        </nav>
        <div>
          <MdOutlineSubscriptions className="icon" />
          <p className="">Subscription</p>
        </div>
        <div>
          <MdOutlineVideoLibrary className="icon" />
          <p>you</p>
        </div>
        <div>
          <nav className="w-[25px] h-[25px] lg:hidden p-[5px] bg-[green] flex flex-col justify-center items-center rounded-[100px] text-white">
            <h5>M</h5>
          </nav>
          <p className="lex lg:hidden">you</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_icon;
