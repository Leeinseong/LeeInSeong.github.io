//Header 파일
import React, {Component} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

class MobileHeader extends Component {
    render() {
//      window.removeEventListener('scroll', getCurrentScroll, );
      return (
        <Head id="Header">
          <Navigation/>
        </Head>
      );
    }
  }

const Head = styled.div`
  top: 0px;
  width: 100%;
  text-align:center;
`
 const ImgProfile = styled.img`
  width: 15em;
  height: 15em;
 `
const TextProfile = styled.div`
  margin-top: -10px;
`

export default MobileHeader;

