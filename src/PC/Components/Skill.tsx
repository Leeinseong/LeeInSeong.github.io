import React, { Component } from 'react';
import styled from 'styled-components';

const Skill = () => {
  return (
    <Container id="Skill">
      <InnerDiv>
        <MainTitle>Skill</MainTitle>
        <h2>주스킬</h2>
        <LanguageImg alt="React" src= "/img/image_React.png"></LanguageImg>
        <LanguageImg alt="ReactNative" src= "/img/image_ReactNative.png"></LanguageImg>
        <LanguageImg alt='CSharp' src= "/img/image_CSharp.png"></LanguageImg>
        <LanguageImg src= "/img/JAVA.jpg"></LanguageImg>
        <LanguageImg src= "/img/Spring.png"></LanguageImg>
        <LanguageImg src= "/img/Oracle.jpg"></LanguageImg>
        <br/>
        <h2 style={{marginTop:"40px"}}>부스킬</h2>
        <LanguageImg src= "/img/IIS.png"></LanguageImg>
        <LanguageImg src= "/img/JavaScript.png"></LanguageImg>
        <LanguageImg src= "/img/Android.png"></LanguageImg>
      </InnerDiv>
    </Container>
  );
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
`
  export default Skill;