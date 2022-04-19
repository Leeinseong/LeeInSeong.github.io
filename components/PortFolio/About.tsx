import React from "react";
import styled from "styled-components";

const About = (props: any) => {
  const projectList = props.projectList;

  return (
    <Container id="About">
      <InnerDiv>
        <MainTitle>ABOUT</MainTitle>
        <ContentDiv>
          <ImgProfile src="/img/AboutProfile.jpg"></ImgProfile>
          <TextDiv>
            <TitleAbout>경력사항</TitleAbout>
            <DetailAbout>
              {projectList?.map((item: any, idx: string) => {
                return (
                  <DetailAboutContainer key={idx}>
                    <DetailAboutPeriod>
                      <b>
                        {item.startMonth} ~ {item.endMonth}{" "}
                      </b>
                    </DetailAboutPeriod>
                    <DetailAboutCompanyContainer>
                      <DetailAboutCompany>{item.name + " "}</DetailAboutCompany>
                      <DetailAboutDepartment>
                        {item.department}
                      </DetailAboutDepartment>
                    </DetailAboutCompanyContainer>
                  </DetailAboutContainer>
                );
              })}
            </DetailAbout>

            <TitleAbout>스킬</TitleAbout>
            <DetailAbout>
              React, React Native, TypeORM, C#, Java, Spring, JavaScript
              <br />
              ORACLE, GraphQL MSSQL, PostgreSQL, IIS
            </DetailAbout>

            <TitleAbout>취득자격</TitleAbout>
            <DetailAbout>정보처리기사, SQLD</DetailAbout>
          </TextDiv>
        </ContentDiv>
      </InnerDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 100px;
  background: #f8f8f8;

  @media only screen and (max-width: 767px) {
    padding: 20px 0px;
  }
`;
const InnerDiv = styled.div`
  width: 1280px;
  margin: 0px auto;

  @media only screen and (max-width: 767px) {
    width: 90%;
  }
`;
const MainTitle = styled.h1`
  margin: 30px 0px;
  padding: 0 10px;
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
  color: #3b310f;

  @media only screen and (max-width: 767px) {
    font-size: 80px;
  }
`;
const ContentDiv = styled.div`
  display: flex;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
const ImgProfile = styled.img`
  width: 400px;
  height: 400px;
  margin-right: 50px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-right: 0px;
  }
`;

const TextDiv = styled.div`
  /* margin: 0px 0px 0px 50px; */
  padding: 0px 10px;

  @media only screen and (max-width: 767px) {
    padding-top: 10px;
  }
`;
const TitleAbout = styled.h2`
  margin: 0px;
  color: #301500;
  font-size: 30px;
  margin-bottom: 5px;
`;
const DetailAbout = styled.span`
  margin-top: 0px;
  line-height: 1.7;
  font-size: 20px;
`;
const DetailAboutContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
const DetailAboutPeriod = styled.div`
  width: 200px;
`;
const DetailAboutCompanyContainer = styled.div`
  display: flex;
`;
const DetailAboutCompany = styled.div`
  width: 100px;
  font-size: 20px;
  color: red;
`;
const DetailAboutDepartment = styled.span`
  font-size: 20px;
`;

export default About;
