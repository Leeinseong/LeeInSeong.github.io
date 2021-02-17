import React, { Component } from 'react';
import styled from 'styled-components';

class Skill extends Component {
    render() {
        return (
          <Container className="Skill">
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
padding-bottom: 100px;
height:Auto;

@media only screen and (max-width: 1280px) {
  width: 1280px;
}
`
const InnerDiv = styled.div`
height: Auto;
width: 1240px;
margin: 0 auto;

@media only screen and (max-width: 1280px) {
  padding-left: 20px;
  padding-right: 20px;
}
`
const MainTitle = styled.h1`
  margin: 30px 0px;
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
  font-family: 'Titillium Web', sans-serif;
`
const LanguageImg = styled.img`
  height: 150px;
`
  export default Skill;