import React, { Component } from 'react';
import styled from 'styled-components';

class Skill extends Component {
    render() {
        return (
          <Container className="Skill">
            <h1 className="ContentTitle">Skill</h1>
            주스킬
            언어 사진들 나열<br/>
            부스킬
          </Container>
        );
      }
    }
    
       
const Container = styled.div`
  height:Auto;
  padding: 20px 30px 30px 30px;
`
  export default Skill;