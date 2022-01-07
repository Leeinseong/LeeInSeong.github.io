import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

const Contact = () =>  {
  const [emailModal, setEmailModal] = useState(false);
  // const onSubmit = data => {
  //   window.Email.send({
  //         SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
  //         To : data.email,
  //         From : "you@isp.com",
  //         Subject : "This is the subject",
  //         Body : "And this is the body" + data.firstname
  //     }).then(
  //         message => alert(message)
  //     )
  // }

  const onSubmit = (data: any, r: any) => {

    const serviceId = 'service_vfjt67k';
    const templateId = 'template_ttfqbad';
    const userId = 'user_giPKAOU4kOKaLeUKSBIMd';
    
    emailjs.send(
      serviceId,
      templateId, 
      {from_name: "test", reply_to:"TEST", message:"testgt"},
      userId
    ).then(res => {
        console.log('Email successfully sent!')
    })
      .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    r.target.reset();
}

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Container id="Contact">
      <InnerDiv>
        <MainTitle>CONTACT</MainTitle>
        <ContentDiv>
        <h1 style={{marginTop:"10px"}}>이인성(Lee InSeong)</h1>
        ✉️ <a target='_blank' rel="noopener noreferrer" style={{color: "-webkit-link", textDecorationLine:"underline", cursor:"pointer"}} onClick={() => setEmailModal(true)}>dlstjd0117@ajou.ac.kr</a><br/>
        📞 010-2369-5186<br/>
        🌍 <a target='_blank' href='https://github.com/Leeinseong' rel="noopener noreferrer" >https://github.com/Leeinseong</a>
        </ContentDiv>
      </InnerDiv>
      
      <Modal
      style={customStyles}
       isOpen={emailModal}
       onRequestClose={() => setEmailModal(false)}
      >
        <div style={{ paddingLeft: 40, paddingRight:40}}>
          <div style={{display:"table-cell", verticalAlign:'middle', paddingTop:10, paddingBottom:10, fontWeight:"bold", fontSize:20, justifyContent:'center', alignItems:'center' }}>
            문의하기
            <img
              className="add-delete-img"
              src= {"/img/icon_close.png"} 
              alt="delete"
              onClick={() => {
                setEmailModal(false)
              }}
            />
          </div>
          <EmailDiv>
              <EmailTitle>이름</EmailTitle>
              <EmailInput></EmailInput>
          </EmailDiv>
          <button onClick={() => onSubmit("A", "B")}>onSubmit</button>
        </div>
      </Modal>
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
  width: Auto;
  font-size:20px;
  margin-left:30px;
`
const EmailDiv = styled.div`
  display: flex;
  margin-top: 5px;
`

const EmailTitle = styled.label`
  font-size: 22px;
  width: 100px;
`
const EmailInput = styled.input`
  height: 20px;
  width: 150px;
`


export default Contact;