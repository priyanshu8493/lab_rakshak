import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="title">Welcome to <span>IIC Lab</span></h1>
          <p className="subtitle">
            Manage members, check-in/out, and monitor everything from the
            powerful admin dashboard.
          </p>

          <div className="glow-line"></div>

          <div className="circles">
            <div></div><div></div><div></div><div></div><div></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
