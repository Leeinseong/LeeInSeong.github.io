//Header 파일
import React, {Component} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

class MobileHeader extends Component {
    render() {
      return (
        <Head>
          <ImgProfile src= "/img/MainProfile.jpg"/>
          <h2 style={{textAlign:'center', marginTop:"10px"}}>이인성(Lee InSeong)</h2>
          <TextProfile>
          ✉️ dlstjd0117@ajou.ac.kr<br/>
          📞 010-2369-5186<br/>
          🌍 <a target='_blank' href='https://github.com/Leeinseong' rel="noopener noreferrer" >https://github.com/Leeinseong</a>
          </TextProfile>
          <Navigation/>
        </Head>
      );
    }
  }

const Head = styled.div`
  top: 0px;
  width: 100%;
  background: #FFF2CF url(/img/HeaderBackGround.png) repeat;
  text-align:center;
  padding: 40px 0px;
`
 const ImgProfile = styled.img`
  width: 15em;
  height: 15em;
 `
const TextProfile = styled.div`
  margin-top: -10px;
`

export default MobileHeader;

