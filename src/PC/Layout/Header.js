//Header 파일
import React, {Component} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

class PC_Header extends Component {
    render() {
      return (
        <Head>
          <ImgProfile src= "/img/MainProfile.jpg"/>
          <h2 style={{textAlign:'center'}}>이인성(Lee InSeong)</h2>
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
  position:relative;
  top: 0px;
  width: 20em;
  background: #FFF2CF url(/img/HeaderBackGround.png) repeat;
`
 const ImgProfile = styled.img`
  width: 15em;
  height: 15em;
  margin: 2em 2.5em 0em 2.5em;
 `
const TextProfile = styled.div`
  margin: -15px 0px 30px 50px;
`

export default PC_Header;

