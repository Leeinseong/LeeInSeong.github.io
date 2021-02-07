import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {
    render() {
        return (
          <Container className="About">
            <InnerDiv>
              <MainTitle>ABOUT</MainTitle>
              <ContentDiv>
              <ImgProfile src="/img/AboutProfile.jpg"></ImgProfile>
              <TextDiv>
                <TitleAbout>경력사항</TitleAbout>
                <DetailAbout>
                  <b>2012/03 ~ 2018/02</b> 아주대학교 소프트웨어공학과 졸업<br/>
                  <b>2018/03 ~ 2019/12</b> GS ITM 커머스사업센터 LF팀 패널<br/>
                  <b>2020/01 ~ Now &nbsp;&nbsp;&nbsp;&nbsp;</b> LG CNS 스마트F&C 스마트물류담당 스마트물류솔루션팀<br/>
                </DetailAbout>
                
                <TitleAbout>사용스킬</TitleAbout>
                <DetailAbout>
                  C, C#, JAVA, SPRING, ORACLE <br/>
                  REACTJS, IIS, MSSQL
                </DetailAbout>

                <TitleAbout>취득자격</TitleAbout>
                <DetailAbout>
                  정보처리기사, SQLD
                </DetailAbout>
              </TextDiv>
              </ContentDiv>
            </InnerDiv>
          </Container>
        );
    }
}

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 80px;
  height:Auto;
  background: #f8f8f8;
`
const InnerDiv = styled.div`
  height: Auto;
  width: 1280px;
  margin: 0 auto;
`
const MainTitle = styled.h1`
  margin: 30px 0px;
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
  font-family: 'Titillium Web', sans-serif;
  color: #3b310f;
  `
const ContentDiv = styled.div`
  display:flex;
  width: 1280px;
`

const TextDiv = styled.div`
  margin: 0px 0px 0px 30px;
`

const TitleAbout = styled.h2`
  margin:0px;
  color: #301500;
  font-size: 30px;
`
const DetailAbout = styled.p`
  margin-top: 0px;
  line-height : 1.7;
  font-size: 20px;
`
const ImgProfile = styled.img`
  margin: auto 0px;
  width: 400px;
  height:350px;
`

export default About;