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
                key: "IS-Telegram",
                label: "개인-텔레그램 챗봇"
              },
              {
                key: "CNS-Lotte",
                label: "LG-롯데 스마트/세미다크"
              },
              {
                key: "CNS-Coupang",
                label: "LG-쿠팡 물류센터"
              },
              {
                key: "ITM-Brandmall",
                label: "GS-LF몰 브랜드몰"
              },
              {
                key: "ITM-NBOS",
                label: "GS-NBOS 구조개선"
              },
              {
                key: "S&AT-Messenger",
                label: "S&AT-메신저 프로그램"
              },
              {
                key: "IS-NFC",
                label: "개인-NFC태그 주문결제"
              }
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
              if(props.level == "1") key =  key.split("/" )[1]
              document.getElementsByClassName(key)[0].scrollIntoView();
            }}
          />
        </div>
      );
    }
  }
  
export default Navigation;
