import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {
    render() {
        return (
          <Container className="About">
            <h1 className="ContentTitle">ABOUT, LEE IN SEONG</h1>
            <TitleAbout>경력사항</TitleAbout>
            <DetailAbout>
              <b>2012/03 ~ 2018/02</b> 아주대학교 소프트웨어공학과 졸업<br/>
              <b>2018/03 ~ 2019/12</b> GS ITM 커머스사업센터 LF팀 패널<br/>
              <b>2020/01 ~ Now &nbsp;&nbsp;&nbsp;&nbsp;</b> LG CNS 스마트F&C 스마트물류담당 스마트물류솔루션팀<br/>
            </DetailAbout>
            
            <TitleAbout>사용SKILL</TitleAbout>
            <DetailAbout>
              C, C#, MSSQL, IIS <br/>
              JAVA, SPRING, ORACLE, REACTJS
            </DetailAbout>

            <TitleAbout>취득자격</TitleAbout>
            <DetailAbout>
              정보처리기사
              SQLD
            </DetailAbout>

            <ImgAbout style={{marginRight:"50px"}}></ImgAbout>
            <ImgAbout></ImgAbout>
          </Container>
        );
    }
}

const Container = styled.div`
  height:Auto;
  padding: 20px 30px 30px 30px;
  background: #F3F3F3;
`

const TitleAbout = styled.h2`
  margin-bottom:0px;
`
const DetailAbout = styled.p`
  margin-top: 0px;
  line-height : 1.7;
`
const ImgAbout = styled.img`
  width: 400px;
  height:300px;
`

export default About;