import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {
    render() {
        return (
          <Container id="About">
            <InnerDiv>
              <MainTitle>ABOUT</MainTitle>
              <ContentDiv>
                <ImgProfile src="/img/AboutProfile.jpg"></ImgProfile>
                <TextDiv>
                  <TitleAbout>경력사항</TitleAbout>
                  <DetailAbout>
                    <b>2012/03 ~ 2018/02</b><br/> 아주대학교 소프트웨어공학과 졸업<br/>
                    <b>2018/03 ~ 2019/12</b><br/> GS ITM 커머스사업센터 LF팀 패널<br/>
                    <b>2020/01 ~ Now &nbsp;&nbsp;&nbsp;&nbsp;</b><br/> LG CNS 스마트F&C 스마트물류담당 스마트물류솔루션팀<br/>
                  </DetailAbout>
                  
                  <TitleAbout>스킬</TitleAbout>
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
  padding-bottom: 20px;
  height:Auto;
  background: #f8f8f8;
`
const InnerDiv = styled.div`
  height: Auto;
  width: 100%;
  margin: 0 auto;
`
const MainTitle = styled.h1`
  margin: 20px 0px;
  font-size: 80px;
  font-weight: bold;
  font-style: italic;
  font-family: 'Titillium Web', sans-serif;
  color: #3b310f;
  padding: 0 10px;
`
const ContentDiv = styled.div`
  width: 100%;
`
const ImgProfile = styled.img`
  margin: auto 0px;
  width: 100%;
`
const TextDiv = styled.div`
  padding: 0 10px;
  margin-top: 10px;
`
const TitleAbout = styled.h2`
  margin:0px;
  color: #301500;
  font-size: 25px;
`
const DetailAbout = styled.p`
  margin-top: 0px;
  line-height : 1.7;
  font-size: 20px;
`

export default About;