import React from "react";
import BackgroundHome from "../../components/BackgroundHome/BackgroundHome.jsx";
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import "./Home.scss";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome.jsx";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";

export function Home() {
  const history = useHistory();

  function onClick() {
    history.push("/");
  }

  return (
    <div className="home-content">
      <Router>
          <div className="home-container">
            <BackgroundHome>
              <LayoutHome onClick={onClick} />
            </BackgroundHome>
          </div>
      </Router>
      <NavBar statusSearch={false} statusHome={true} statusChat={false}/>
    </div>
      
  );
}
