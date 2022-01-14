import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

const Contact = () =>  {
  const [emailModal, setEmailModal] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {

    const serviceId = 'service_vfjt67k';
    const templateId = 'template_ttfqbad';
    const userId = 'user_giPKAOU4kOKaLeUKSBIMd';
    
    emailjs.send(
      serviceId,
      templateId, 
      {from_name: name, phone_number:phoneNumber, reply_to: email, message: message},
      userId
    ).then(res => {
      alert("문의를 성공하였습니다.");
      setEmailModal(false);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    })
    .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
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
              style={{position:'absolute', width:40, height:40, right:10, top: 10, cursor:'pointer'}}
              onClick={() => {
                setEmailModal(false)
              }}
            />
          </div>
          <EmailContainer>
            <EmailDiv>
              <EmailTitle>이름</EmailTitle>
              <EmailInput value={name} onChange={(e) => setName(e.target.value)}/>
            </EmailDiv>
            <EmailDiv>
              <EmailTitle>전화번호</EmailTitle>
              <EmailInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </EmailDiv>
            <EmailDiv>
              <EmailTitle>이메일</EmailTitle>
              <EmailInput value={email} onChange={(e) => setEmail(e.target.value)}/>
            </EmailDiv>
            <EmailDiv>
              <EmailTitle>문의내용</EmailTitle>
              <EmailTextArea value={message} onChange={(e) => setMessage(e.target.value)}/>
            </EmailDiv>
            <EmailDiv style={{justifyContent:"flex-end"}}>
              <button onClick={() => sendEmail()}>전송</button>
            </EmailDiv>
          </EmailContainer>
        </div>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 50px;
  height:Auto;
  background: #f8f8f8;
`
const InnerDiv = styled.div`
  height: Auto;
  width: 100%;
  margin: 0 auto;
`
const MainTitle = styled.h1`
  margin: 30px 0px;
  font-size: 70px;
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
const EmailContainer = styled.div`
  margin-top: 5px;
`

const EmailDiv = styled.div`
  display: flex;
  margin-top: 5px;
`

const EmailTitle = styled.label`
  font-size: 20px;
  width: 120px;
`
const EmailInput = styled.input`
  height: 20px;
  width: 250px;
`
const EmailTextArea = styled.textarea`
  height: 20px;
  width: 250px;
`

export default Contact;