import styled from 'styled-components';

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
              {projectList?.map((item: any, idx: any) => {
                if(item.type !== "personal"){
                  return(
                    <div className='row' key={idx}>
                      <DetailAboutPeriod><b>{item.startMonth} ~ {item.endMonth} </b></DetailAboutPeriod>
                      <DetailAboutCompany>{item.name + " "}</DetailAboutCompany>
                      <DetailAboutDepartment>{item.department}</DetailAboutDepartment>
                    </div>
                  )
                }
                return <></>
              })}
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
const DetailAboutPeriod = styled.div`
  width: 200px;
`
const DetailAboutCompany = styled.div`
  width: 100px;
  font-size: 20px;
  color: red;
`
const DetailAboutDepartment = styled.span`
  font-size: 20px;
`
const ImgProfile = styled.img`
  margin: auto 0px;
  width: 400px;
  height:400px;
`

export default About;