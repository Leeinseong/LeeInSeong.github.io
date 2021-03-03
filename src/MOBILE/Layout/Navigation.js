import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TreeMenu from 'react-simple-tree-menu'
import { Link } from 'react-router-dom';

import './Css/Navigation.css';

class MobileNavigation extends Component {
  MoveScroll = (e) => {
    var projectDiv = document.getElementById(e);
    var menuDiv = document.getElementById("MenuDiv");
    menuDiv.style.display = "none";
    window.scrollTo(0, projectDiv.offsetTop);
  }

  Close = (e) =>{
    var menuDiv = document.getElementById("MenuDiv");
    menuDiv.style.display = "none";
  }

    render() {
      return (
        <Container id="MenuDiv">
          <BackDiv onClick = {this.Close}/>
          <InnerDiv>
            <MenuHeader>MENU</MenuHeader>
            <ImgButton onClick={this.Close}>
              <ImgClose src= "/img/Close.png"/>
            </ImgButton>
            <MenuButton onClick={() => this.MoveScroll("About")}>ABOUT</MenuButton>
            <MenuButton onClick={() => this.MoveScroll("Career")}>CAREER</MenuButton>
            <MenuButton onClick={() => this.MoveScroll("Project")}>PROJECT</MenuButton>
            <MenuButton onClick={() => this.MoveScroll("Skill")}>SKILL</MenuButton>
            <MenuButton onClick={() => this.MoveScroll("Contact")}>CONTACT</MenuButton>
          </InnerDiv>
        </Container>
      );
    }
  }

 const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
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
  opacity: 100%;
 `
 const MenuHeader = styled.div`
  width: 100%;
  background: #A4B9C6;
  color: #fff;
  font-size: 34px;
  padding: 15px 33px !important;
 `
 const ImgButton = styled.button`
   position: absolute;
   width: 50px;
   height: 50px;
   cursor: pointer;
   border: none;
   top: 0px;
   right: 5px;
   background: transparent;

   &:focus{
     outline:none;
   }
 `
 const ImgClose = styled.img`
  width: 40px;
  height: 40px;
 `
 const MenuButton = styled.button`
   display: block;
   padding: 20px 0;
   font-size: 17px;
   color: #402D1A;
   font-weight: bold;
   padding-left: 30px;
   text-decoration: none;
   vertical-align: baseline;
   color: #666;
   background: transparent;
   border: none;
   cursor: pointer;
 
   &:focus{
     outline:none;
   }
 
 `
  
export default MobileNavigation;
