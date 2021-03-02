import React, { Component } from 'react';
import styled from 'styled-components';
import Portfolio   from './Portfolio';
import About   from './About';
import Career  from './Career';
import Project from './Project';
import Skill   from './Skill';
import Contact from './Contact';

import './Css/Main.css';

class Main extends Component {
  
    //컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
    componentDidMount() {
      document.title = "LeeInSeong Portfolio";
    }
  
    render() {
        return (
          <Container id="Content">
            <Portfolio/>
            <About/>
            <Career/>
            <Project/>
            <Skill/>
            <Contact/>
          </Container>
        );
      }
    }
  const Container = styled.div`
    padding-top: 30px;
  `
  export default Main;