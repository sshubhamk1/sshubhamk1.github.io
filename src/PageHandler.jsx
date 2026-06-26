import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Experience from "./components/Experience/Experience";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PageHandler() {
  const query = useQuery();
  const page = query.get("page");

  switch (page) {
    case "project":
      return <Projects />;
    case "about":
      return <About />;
    case "resume":
      return <Resume />;
    case "experience":
      return <Experience />;
    case "skill":
      return <Skill />;
    case "education":
      return <Education />;
    default:
      return <Home />;
  }
}

export default PageHandler;
