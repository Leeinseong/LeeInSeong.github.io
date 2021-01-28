import React, { Component } from 'react';
import styled from 'styled-components';

class Skill extends Component {
    render() {
        return (
          <Container className="Skill">
            <h1 className="ContentTitle">Skill</h1>
          </Container>
        );
      }
    }
    
       
const Container = styled.div`
height:50em;
padding: 20px 0px 0px 30px;
`
  export default Skill;