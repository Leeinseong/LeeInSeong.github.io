//Header 파일
import React, {Component} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const getCurrentScroll = () =>{
  if( window.scrollY >= 80){
    document.getElementById("Header").style.background="#FFFFFF";
    document.getElementById("Header").style.borderBottom="1px solid rgb(235, 235, 235)";
    document.getElementById("LogoImg").style.display="block";
  }
  else{
    document.getElementById("Header").style.background="none";
    document.getElementById("Header").style.borderBottom="none";
    document.getElementById("LogoImg").style.display="none";
  }
}
window.addEventListener('scroll', getCurrentScroll);

class PC_Header extends Component {
    render() {
      return (
        <Head id="Header">
          <InnerDiv>
            <ImgProfile id="LogoImg" src= "/img/IN.png"/>
            <Navigation/>
          </InnerDiv>
        </Head>
      );
    }
  }
/*
          <TextProfile>
          ✉️ dlstjd0117@ajou.ac.kr<br/>
          📞 010-2369-5186<br/>
          🌍 <a target='_blank' href='https://github.com/Leeinseong' rel="noopener noreferrer" >https://github.com/Leeinseong</a>
          </TextProfile>

*/
const Head = styled.div`
  position: fixed;
  width: 100%;
  z-index:10;
`
const InnerDiv = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  height: 70px;
`
 const ImgProfile = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  display: none;
 `

export default PC_Header;

