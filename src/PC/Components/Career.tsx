import { useContext } from 'react';
import styled from 'styled-components';
import {ProjectContext} from './Main';
import "../Layout/Css/Timeline.css";

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
                  <div className="cbp_tmtime"><span>{item.startMonth}</span> <span className="large">{item.endMonth}</span></div>
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
  padding-top: 10px;
  padding-bottom: 50px;
  height:Auto;

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
`
const TitleCareer = styled.h2` 
  font-size: 20px;
`
const DetailCareer = styled.p`
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
`

 export default Career;