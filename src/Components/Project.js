import React, { Component } from 'react';
import styled from 'styled-components';

class Project extends Component {
    render() {
        return (
          <Container className="Project">
            <h1 className="ContentTitle" style={{marginBottom:"20px"}}>Project</h1>
            <SubContainer>
adasdasdasd
            </SubContainer>
          </Container>
        );
      }
    }
    
const Container = styled.div`
  height:50em;
  padding: 20px 0px 0px 30px;
  background: #F3F3F3;
`
const SubContainer = styled.div`
  background: #FFFFFF; 
`

const TitleDiv = styled.div`
  background: #FFFFFF; 
`

const ContentDiv = styled.div`
  background: #FFFFFF; 
`

export default Project;