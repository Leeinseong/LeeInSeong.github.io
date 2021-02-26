import React, { Component } from 'react';
import styled from 'styled-components';

const onSubmit = data => {
  window.Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : data.email,
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body" + data.firstname
    }).then(
        message => alert(message)
    )
}

class Contact extends Component {
    render() {
        return (
          <Container id="Contact">
            <InnerDiv>
              <MainTitle>CONTACT</MainTitle>
              <ContentDiv>
              <h1 style={{marginTop:"10px"}}>이인성(Lee InSeong)</h1>
              ✉️ dlstjd0117@ajou.ac.kr<br/>
              📞 010-2369-5186<br/>
              🌍 <a target='_blank' href='https://github.com/Leeinseong' rel="noopener noreferrer" >https://github.com/Leeinseong</a>
              </ContentDiv>
            </InnerDiv>
          </Container>
        );
    }
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
  width: Auto;
  font-size:20px;
  margin-left:30px;
`

export default Contact;