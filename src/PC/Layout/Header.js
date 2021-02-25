//Header 파일
import React, {Component} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import App from '../../App'

const getCurrentScroll = () =>{
  if( window.scrollY >= 80){
    document.getElementById("Header").style.background="#FFFFFF";
    document.getElementById("Header").style.borderBottom="1px solid rgb(235, 235, 235)";
    document.getElementById("LogoButton").style.display="block";  
  }
  else{
    document.getElementById("Header").style.background="none";
    document.getElementById("Header").style.borderBottom="none";
    document.getElementById("LogoButton").style.display="none";
  }
}

class PC_Header extends Component {
  constructor(props) {
    super(props);
    window.addEventListener('scroll', getCurrentScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', getCurrentScroll);
  }

  goTop = (e) =>{
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Head id="Header" >
        <InnerDiv>
          <ImgButton id="LogoButton" onClick={this.goTop}>
            <ImgProfile src= "/img/IN.png"/>
          </ImgButton>
          <Navigation/>
        </InnerDiv>
      </Head>
    );
  }
}

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

