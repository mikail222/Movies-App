import React, { useState } from "react";
import DashBoard from "./DashBoard";
import Header from "./Header";
import Menu_bar from "./Menu_bar";
import Movies_page from "./Movies_page";
import Sidebar_icon from "./Sidebar_icon";
import Mobile_head from "./Mobile_head";

const Home = () => {
  const [toggleSideBar, setToggleSideBAr] = useState(false);

  return (
    <div className="">
      {toggleSideBar === true && (
        <aside className="dashboard">
          <div className="overlay w-[100vw] h-[100vh] z-[1]">
            {toggleSideBar === true && <DashBoard />}
          </div>
        </aside>
      )}
      <div className="App">
        <Header setToggleSideBAr={setToggleSideBAr} />
        <Mobile_head />
        <header className="head"></header>
        <div className="row">
          <aside className="iconBar">
            <Sidebar_icon />
          </aside>
          <main className="main">
            <Menu_bar />
            <Movies_page />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
