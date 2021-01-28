import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TreeMenu from 'react-simple-tree-menu'
import { Link } from 'react-router-dom';

import './Css/Navigation.css';

class Navigation extends Component {
  
    constructor(props) {
      super(props);

      this.state = {
        properties: [
          {
            key: "About",
            label: "About",
          },
          {
            key: "Career",
            label: "Career",
          },
          {
            key: "Project",
            label: "Projects",
            nodes: [
              {
                key: "A",
                label: "A"
              },
              {
                key: "B",
                label: "B"
              },
              {
                key: "C",
                label: "C"
              },
              {
                key: "D",
                label: "D"
              },
              {
                key: "E",
                label: "E"
              },
              {
                key: "F",
                label: "F"
              },
              {
                key: "G",
                label: "G"
              },
              {
                key: "H",
                label: "H"
              },
            ]
          },
          {
            key: "Skill",
            label: "Skill",
          }
        ],
        initiallyOpenProperties: []
      };
    }

    render() {
      return (
        <div>
          <TreeMenu
            data={this.state.properties}
            initialOpenNodes={this.state.initiallyOpenProperties}
            hasSearch={false}
            onClickItem={({ key, label, ...props }) => {
              document.getElementsByClassName(key)[0].scrollIntoView();
            }}
          />
        </div>
      );
    }
  }
  
export default Navigation;

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 100%;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: 60px;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`