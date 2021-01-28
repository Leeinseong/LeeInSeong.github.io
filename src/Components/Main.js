import React, { Component } from 'react';
import About   from './About';
import Career  from './Career';
import Project from './Project';
import Skill   from './Skill';

import './Css/Main.css';

//openweathermap 에서 현재 날씨 정보를 받아올 API키
const API_KEY = '5ad02c2c30d88798b28e377aca3f9bfd';

class Main extends Component {
  
    //컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
    componentDidMount() {
      document.title = "LeeInSeong Portfolio";
    }
  
    render() {
        return (
          <>
          <About/>
          <Career/>
          <Project/>
          <Skill/>
          </>
        );
      }
    }
    
  export default Main;