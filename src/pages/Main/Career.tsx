import { useContext } from 'react';
import styled from 'styled-components';
import {ProjectContext} from './Main';

const Career = (props: any) => {
  const {setProject} = useContext(ProjectContext)
  const projectList = props.projectList;

  const MoveScroll = (e: any) => {
    var projectDiv = document.getElementById(e);
    window.scrollTo(0, projectDiv!.offsetTop - 80);
    setProject(e);
  }

    return (
      <Container id="Career">
        <InnerDiv>
          <MainTitle>Career</MainTitle>
          <ul className="cbp_tmtimeline">
            {projectList?.map((item: any, idx: any) => {
              return (
                <li key={idx}>
                  <div className="cbp_tmtime" ><span>{item.startMonth}</span> <span className="large">{item.endMonth}</span></div>
                  <div className={"cbp_tmicon " + (item.type === 'sch' ? 'bg-infgo' : item.type === 'personal' ? 'bg-blush' : 'bg-green')}><i className={"zmdi " + (item.type === 'sch' ? 'zmdi-city' : item.type === 'personal' ? 'zmdi-pin' : 'zmdi-case')}></i></div>
                  <div className="cbp_tmlabel"> 
                    <TitleCareer>{item.name + " " + item.department}</TitleCareer>
                    <DetailCareer>
                        <b>관련 프로젝트</b><br/>
                        {item?.projectList?.map((projectItem: any, projectIndex: any) => {
                          return (
                            <div key={projectIndex}>
                              <ProjectButton
                                onClick={() => MoveScroll(projectItem.id)}>
                                {projectItem.title}
                              </ProjectButton>
                            </div>
                          )
                        })}
                    </DetailCareer>
                  </div>
                </li>
              )
            })}
            </ul>  
          </InnerDiv>
        </Container>
    );
}
    
const Container = styled.div`
width: 100%;
padding-top: 10px;
padding-bottom: 100px;

@media only screen and (max-width: 767px) {
  padding: 10px 0px;
}
`
const InnerDiv = styled.div`
width: 1280px;
margin: 0px auto;

@media only screen and (max-width: 767px) {
  width: 90%;
}
`
const MainTitle = styled.h1`
  margin: 30px 0px;
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
  
  @media only screen and (max-width: 767px) {
    font-size: 80px;
  }
`
const TitleCareer = styled.h2` 
  font-size: 20px;
`
const DetailCareer = styled.span`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height : 1.7;
  color: #444;
`
const ProjectButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  margin-top: 5px;
  text-align: left;
`

 export default Career;