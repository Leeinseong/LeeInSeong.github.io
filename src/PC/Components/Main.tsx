import React, { Component } from 'react';
import Portfolio   from './Portfolio';
import About   from './About';
import Career  from './Career';
import Project from './Project';
import Skill   from './Skill';
import Contact   from './Contact';

const Main = () => {


    // //컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
    // componentDidMount() {
    //   document.title = "LeeInSeong Portfolio";
    // }
    
    return (
      <>
        <Portfolio/>
        <About/>
        <Career/>
        <Project/>
        <Skill/>
        <Contact/>
      </>
    );
  }
    
  export default Main;