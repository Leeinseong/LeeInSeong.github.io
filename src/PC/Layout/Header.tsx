//Header 파일
import React, {Component, useEffect, useState} from 'react'
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Navigation from './Navigation';

// const getCurrentScroll = () =>{
//   if( window.scrollY >= 80){
//     document.getElementById("Header").style.background="#FFFFFF";
//     document.getElementById("Header").style.borderBottom="1px solid rgb(235, 235, 235)";
//     document.getElementById("LogoButton").style.display="block";  
//   }
//   else{
//     document.getElementById("Header").style.background="none";
//     document.getElementById("Header").style.borderBottom="none";
//     document.getElementById("LogoButton").style.display="none";
//   }
// }

const PC_Header = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const getCurrentScroll = () =>{
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', getCurrentScroll);
    return () => { // cleanup 
      window.removeEventListener('scroll', getCurrentScroll);
    }
  }, []);

  return (
    <Head id="Header" style={{backgroundColor: scrollY >= 80 ? "#FFFFFF" : "transparent"}}>
      <InnerDiv>
        <ImgButton id="LogoButton">
          <ImgProfile src= "/img/IN.png"/>
        </ImgButton>
        <Navigation/>
      </InnerDiv>
    </Head>
  );
}

const Head = styled.div`
  position: fixed;
  top:0;
  width: 100%;
`
const InnerDiv = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  height: 70px;
  
  @media only screen and (max-width: 1280px) {
    width: auto;
    padding: 0 10px;
  }
`
const ImgButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  &:focus{
    outline:none;
  }
`

 const ImgProfile = styled.img`
  width: 50px;
  height: 50px;
 `

export default PC_Header;

