//Header 파일
import React, {Component} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

class MobileHeader extends Component {
  goTop = (e) =>{
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Head id="Header">
        <ImgButton id="LogoButton" onClick={this.goTop}>
          <ImgProfile src= "/img/IN.png"/>
        </ImgButton>
        <ImgButton id="LogoButton" onClick={this.goTop} style={{right:"15px"}}>
          <ImgProfile src= "/img/IN.png"/>
        </ImgButton>
        <Navigation/>
      </Head>
      );
    }
  }

const Head = styled.div`
  position: fixed;
  width: 100%;
  height: 30px;
  background: #A4B9C6;
  z-index:10;
`
const ImgButton = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
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
  width: 20px;
  height: 20px;
 `
const TextProfile = styled.div`
  margin-top: -10px;
`

export default MobileHeader;

