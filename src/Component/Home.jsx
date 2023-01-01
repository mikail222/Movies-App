import React from "react";
import DashBoard from "./DashBoard";
import Header from "./Header";
import Menu_bar from "./Menu_bar";
import Movies_page from "./Movies_page";

const Home = () => {
  return (
    <div className="parentDiv">
      <div className="App">
        <Header />
        <header className="head"></header>
        <div className="row">
          <aside className="dashboard">
            <DashBoard />
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
