import React, { Component } from 'react';
import styled from 'styled-components';

class Skill extends Component {
    render() {
      return (
        <Container id="Skill">
          <InnerDiv>
            <MainTitle>Skill</MainTitle>
            <h2>주스킬</h2>
            <LanguageImg src= "/img/C.jpg"></LanguageImg>
            <LanguageImg src= "/img/C-SHARP.png"></LanguageImg>
            <LanguageImg src= "/img/JAVA.jpg"></LanguageImg>
            <LanguageImg src= "/img/SPRING.png"></LanguageImg>
            <LanguageImg src= "/img/ORACLE.jpg"></LanguageImg>
            <br/>
            <h2 style={{marginTop:"40px"}}>부스킬</h2>
            <LanguageImg src= "/img/REACT.png"></LanguageImg>
            <LanguageImg src= "/img/IIS.png"></LanguageImg>
            <LanguageImg src= "/img/JAVASCRIPT.png"></LanguageImg>
            <LanguageImg src= "/img/ANDROID.png"></LanguageImg>
          </InnerDiv>
        </Container>
      );
    }
  }
    
       
const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  height:Auto;
`
const InnerDiv = styled.div`
  height: Auto;
  width: 100%;
  margin: 0 auto;
`
const MainTitle = styled.h1`
  margin: 30px 0px;
  font-size: 80px;
  font-weight: bold;
  font-style: italic;
  font-family: 'Titillium Web', sans-serif;
`
const LanguageImg = styled.img`
  height: 70px;
`
  export default Skill;