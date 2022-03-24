import React, { useState } from 'react';
import Link from 'next/Link';
import styled from 'styled-components';

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const goTop = (e: any) =>{
    window.scrollTo(0, 0);
  }

  const MoveScroll = (e: any) => {
    var projectDiv = document.getElementById(e);
    window.scrollTo(0, projectDiv!.offsetTop);
  }

  return (
    <Head id="Header">
      <ImgButton id="LogoButton" onClick={goTop} style={{left:10}}>
        <ImgProfile src= "/img/IN.png"/>
      </ImgButton>
      <ImgButton style={{right:10}}>
        <ImgProfile src= "/img/Menu_Mobile.png" onClick={() => setMenuOpen(true)}/>
      </ImgButton>
      <Container style={{display: menuOpen ? "block" : "none"}}>
        <BackDiv onClick = {() => setMenuOpen(false)}/>
        <InnerDiv>
          <MenuHeader>MENU</MenuHeader>
          <CloseImgButton onClick={() => setMenuOpen(false)}>
            <ImgClose src= "/img/Close.png"/>
          </CloseImgButton>
          <MenuButton onClick={() => MoveScroll("About")}>ABOUT</MenuButton>
          <MenuButton onClick={() => MoveScroll("Career")}>CAREER</MenuButton>
          <MenuButton onClick={() => MoveScroll("Project")}>PROJECT</MenuButton>
          <MenuButton onClick={() => MoveScroll("Skill")}>SKILL</MenuButton>
          <MenuButton onClick={() => MoveScroll("Contact")}>CONTACT</MenuButton>
          <Link href='/blog'>
            <MenuButton className='text-shadow' style={{color:"#FFF37C"}}>
              BLOG
            </MenuButton>
          </Link> 
        </InnerDiv>
      </Container>
    </Head>
    );
  }

const Head = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background: #A4B9C6;
  z-index:10;
`
const ImgButton = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`
 const ImgProfile = styled.img`
  width: 20px;
  height: 20px;
 `
 const Container = styled.div`
 position: fixed;
 width: 100%;
 height: 100%;
 z-index: 20;
 display:none;
`
const BackDiv = styled.div`
 position: fixed;
 width: 100%;
 height: 100%;
 background: #575757;
 opacity: 80%;
`
const InnerDiv = styled.div`
 position: fixed;
 right: 0px;
 width: 70%;
 height: 100%;
 background: #ffffff;
`
const MenuHeader = styled.div`
 background: #A4B9C6;
 color: #fff;
 font-size: 34px;
 padding: 15px 33px !important;
`
const CloseImgButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
  top: 15px;
  right: 5px;
  background: transparent;
`
const ImgClose = styled.img`
 width: 40px;
 height: 40px;
`
const MenuButton = styled.div`
  display: block;
  padding: 20px 30px;
  font-size: 17px;
  font-weight: bold;
  vertical-align: baseline;
  color: #666;
  cursor: pointer;
`
export default HeaderMobile;

