import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TreeMenu from 'react-simple-tree-menu'
import { Link } from 'react-router-dom';

import './Css/Navigation.css';

class PC_Navigation extends Component {
  
  MoveScroll = (e) => {
    var projectDiv = document.getElementById(e);
    window.scrollTo(0, projectDiv.offsetTop);
  }

  render() {
      return (
         <MenuDiv>
						<MenuButton onClick={() => this.MoveScroll("About")}>ABOUT</MenuButton>
						<MenuButton onClick={() => this.MoveScroll("Career")}>CAREER</MenuButton>
						<MenuButton onClick={() => this.MoveScroll("Project")}>PROJECT</MenuButton>
						<MenuButton onClick={() => this.MoveScroll("Skill")}>SKILL</MenuButton>
						<MenuButton onClick={() => this.MoveScroll("Contact")}>CONTACT</MenuButton>
					</MenuDiv>
      );
    }
  }
  
const MenuDiv = styled.div`
  display: flex;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  position: absolute;
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

export default PC_Navigation;
