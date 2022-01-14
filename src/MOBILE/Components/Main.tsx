import {createContext, useState } from 'react';
import Portfolio   from './Portfolio';
import About   from './About';
import Career  from './Career';
import Project from './Project';
import Skill   from './Skill';
import Contact from './Contact';
import {projectList} from "../../const/project";

import './Css/Main.css';

export const ProjectContext = createContext({
  project: "",
  setProject: (index: any) => {}
});

const Main  = () => {
  const [project, setProject] = useState("");
  
  return (
    <ProjectContext.Provider value={{project, setProject}}>
      <Portfolio/>
      <About projectList={projectList}/>
      <Career projectList={projectList}/>
      <Project projectList={projectList}/>
      <Skill/>
      <Contact/>
    </ProjectContext.Provider>
  );
}

export default Main;