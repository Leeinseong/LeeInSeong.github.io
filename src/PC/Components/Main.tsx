import { createContext, useState } from 'react';
import Portfolio   from './Portfolio';
import About   from './About';
import Career  from './Career';
import Project from './Project';
import Skill   from './Skill';
import Contact   from './Contact';
import {projectList} from "../../const/project";

export const ProjectContext = createContext({
  project: "",
  setProject: (index: any) => {}
});

const Main = () => {
  const [project, setProject] = useState("");
  
    // //컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
    // componentDidMount() {
    //   document.title = "LeeInSeong Portfolio";
    // }
    
    return (
      <>
        <ProjectContext.Provider value={{project, setProject}}>
          <Portfolio/>
          <About projectList={projectList}/>
          <Career projectList={projectList}/>
          <Project projectList={projectList}/>
          <Skill/>
          <Contact/>
        </ProjectContext.Provider>
      </>
    );
  }
    
  export default Main;