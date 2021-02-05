import React, { Component } from 'react';
import styled from 'styled-components';

class Skill extends Component {
    render() {
        return (
          <Container className="Skill">
            <h1 className="ContentTitle">Skill</h1>
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
          </Container>
        );
      }
    }
    
       
const Container = styled.div`
  height:Auto;
  padding: 20px 30px 30px 30px;
  margin-bottom:20px;
`

const LanguageImg = styled.img`
  height: 150px;
`
  export default Skill;