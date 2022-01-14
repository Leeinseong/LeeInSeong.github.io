import { useContext } from 'react';
import styled from 'styled-components';
import { ProjectContext } from './Main';

const Project = (props: any) =>  {
  const {project, setProject} = useContext(ProjectContext)
  const projectList = props.projectList;
  
  return (
    <Container id="Project">
      <InnerDiv>
        <MainTitle>Project</MainTitle>
        {projectList?.map((item: any, idx: any) => {
          return (
            <div key={idx}>
              {item.projectList?.map((pItem: any, pIdx: any) => {
                return (
                  <SubContainer id={pItem.id} key={pIdx}>
                    <ButtonContainer id="IS-Telegram-Header" onClick={(e) => {
                      if(project === pItem.id){
                        setProject(null)
                      }else{
                        setProject(pItem.id)
                      }}}>
                      <b>[{pItem.projectType}] {pItem.title}</b>
                      <ButtonImg id="IS-Telegram-Button" src={project === pItem.id ? "/img/btn_up.png" : "/img/btn_down.png"} ></ButtonImg>
                    </ButtonContainer>
                    <DetailContainer style={{display: project === pItem.id ? "block" : "none"}}>
                      <TitleDiv>기간</TitleDiv>
                      <ContentDiv>{pItem.period}</ContentDiv>
                      <TitleDiv>개발환경</TitleDiv>
                      <ContentDiv>{pItem.language}</ContentDiv>
                      <TitleDiv>DB</TitleDiv>
                      <ContentDiv>{pItem.db}</ContentDiv>
                      <TitleDiv>형상관리</TitleDiv>
                      <ContentDiv>{pItem.management}</ContentDiv>
                      <TitleDiv>상세설명</TitleDiv>
                      <ContentDiv>
                        {pItem.description?.split('\n').map((line: any) => {
                          return <>{line}<br/></>;
                        })}
                      </ContentDiv>
                      {pItem.git? (
                        <>
                          <TitleDiv>Git 주소</TitleDiv>
                          <ContentDiv><a target="_blank" rel='noreferrer' href={pItem.git}>{pItem.git}</a></ContentDiv>
                        </>
                      ) : null}
                      <TitleDiv>역할</TitleDiv>
                      <ContentDiv>
                        {pItem.role?.split('\n').map((line: any) => {
                          return <>{line}<br/></>;
                        })}
                      </ContentDiv>
                      {pItem.href? (
                        <>
                          <TitleDiv>참고</TitleDiv>
                          <ContentDiv>
                            {pItem.href?.map((hrefItem: any) => { 
                              return(
                                <>
                                  {hrefItem.title} : <a target="_blank" rel='noreferrer' href={hrefItem.link}>{hrefItem.link}</a><br/>
                                </>
                              )
                            })}
                          </ContentDiv>
                        </>
                      ) : null}
                    </DetailContainer>
                  </SubContainer>
                )
              })}
            </div>
          )
        })}
      </InnerDiv>
    </Container>
  );
}
    
const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 80px;
  height:Auto;
  background: #F3F3F3;
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

  @media only screen and (max-width: 1280px) {
    padding-left: 20px;
  }
`
const SubContainer = styled.div`
  border : solid;
  margin-bottom: 15px;
  background: #FFFFFF;
`
const ButtonContainer = styled.div`
  padding: 10px;
`
const ButtonImg = styled.img`
  width: 30px;
  vertical-align: middle;
  float: right;
`

const DetailContainer = styled.div`
  display:grid;
  grid-template-columns: 150px auto;
  grid-gap : 0;
  display: none;
`
const TitleDiv = styled.div`
  font-weight: bold;
  padding: 10px 10px 10px 10px;
  border-top: solid grey 0.5px;
  /* &:nth-last-child(2){
    border-bottom: 0px;
  } */
`
const ContentDiv = styled.div`
  padding: 10px;
  border-top: solid grey 0.5px;
  /* &:nth-last-child(1){
    border-bottom: 0px;
  } */
`

export default Project;