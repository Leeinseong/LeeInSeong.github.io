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
                      if(item.type != "personal"){
                        return(
                          <div key={idx}>
                            <DetailAboutPeriod><b>{item.startMonth} ~ {item.endMonth} </b></DetailAboutPeriod>
                            <div className='row'>
                              <DetailAboutCompany>{item.name}</DetailAboutCompany>
                              <DetailAboutDepartment>&nbsp;{item.department}</DetailAboutDepartment>
                            </div>
                          </div>
                        )
                      }
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
  padding: 10px 10px;
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

const DetailAboutPeriod = styled.div`
`
const DetailAboutCompany = styled.div`
  font-size: 20px;
  color: red;
`
const DetailAboutDepartment = styled.span`
  font-size: 20px;
`
export default About;