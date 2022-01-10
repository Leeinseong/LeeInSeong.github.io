import React, { Component } from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container id="About">
      <InnerDiv>
        <MainTitle>ABOUT</MainTitle>
        <ContentDiv>
          <ImgProfile src="/img/AboutProfile.jpg"></ImgProfile>
          <TextDiv>
            <TitleAbout>경력사항</TitleAbout>
            <DetailAbout>
              <b>2012/03 ~ 2018/02</b> 아주대학교 소프트웨어공학과 졸업<br/>
              <b>2018/03 ~ 2019/12&nbsp;</b> <DetailAboutCompany>GS ITM</DetailAboutCompany> 커머스사업센터 LF팀 패널<br/>
              <b>2020/01 ~ 2021/06 </b> <DetailAboutCompany>LG CNS</DetailAboutCompany> 스마트F&C 스마트물류담당 스마트물류솔루션팀<br/>
              <b>2021/07 ~ Now &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <DetailAboutCompany>Tier.J</DetailAboutCompany> 정기 구독 플랫폼(다독) 개발팀<br/>
            </DetailAbout>
            
            <TitleAbout>스킬</TitleAbout>
            <DetailAbout>
              React, React Native, TypeORM, C#, JAVA, SPRING, JavaScript<br/>
              IIS, ORACLE, MSSQL, PostgreSQL
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

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 100px;
  height:Auto;
  background: #f8f8f8;

  @media only screen and (max-width: 1280px) {
    width: 1280px;
  }
`
const InnerDiv = styled.div`
  height: Auto;
  width: 1240px;
  margin: 0 auto;

  @media only screen and (max-width: 1280px) {
    padding-left: 20px;
    padding-right: 20px;
  }
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
  width: Auto;
`

const TextDiv = styled.div`
  margin: 0px 0px 0px 50px;
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
const DetailAboutCompany = styled.span`
  font-size: 20px;
  color: red;
`
const ImgProfile = styled.img`
  margin: auto 0px;
  width: 400px;
  height:400px;
`

export default About;