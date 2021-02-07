import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TreeMenu from 'react-simple-tree-menu'
import { Link } from 'react-router-dom';

import './Css/Navigation.css';

class PC_Navigation extends Component {
  
  render() {
      return (
         <MenuDiv>
						<MainMeu><a href="#">ABOUT</a></MainMeu>
						<MainMeu><a href="#">CAREER</a></MainMeu>
						<MainMeu><a href="#">PROJECT</a></MainMeu>
						<MainMeu><a href="#">SKILL</a></MainMeu>
						<MainMeu><a href="#">CONTACT</a></MainMeu>
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
const MainMeu = styled.div`

display: block;
padding: 20px 0;
font-size: 17px;
color: #402d1a;
font-weight: bold;
padding-left: 30px;
text-decoration: none;
vertical-align: baseline;
color: #666;
`

export default PC_Navigation;
