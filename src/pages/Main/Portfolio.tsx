import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Container className="Portfolio">
      <InnerDiv>
        <InImg src="/img/AboutIN_Mobile.png"></InImg>
        <TextDiv>
          <TextP1>LeeInSeong</TextP1>
          <TextP2>4th Year Junior Developer</TextP2>
          <TextP3>안녕하세요. 다양한 언어, 프로젝트를 경험하며 개발실력과 커뮤니케이션 능력을 늘려가는 개발자입니다.<br/> 모든 프로젝트에 항상 책임감을 가지고 참여합니다.</TextP3>
          <TextP4>Good morning. A developer who experiences various languages ​​and projects to increase development and communication skills.<br/> Always participates in all projects with responsibility.</TextP4>
        </TextDiv>
      </InnerDiv>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  @media only screen and (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 20px;
  }
`
const InnerDiv = styled.div`
  width: 1280px;
  height: 700px;
  padding-bottom: 200px;
  margin: 0 auto;
  background: url(../img/AboutIN.png) left Top no-repeat;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    text-align:center;
    background: none;
  }
`
const InImg = styled.img`
  display: none;
  width: 100%;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`
const TextDiv = styled.div`
  position: relative;
  padding-left: 760px;
  padding-top: 250px;
  padding-right: 30px;

  @media only screen and (max-width: 767px) {
    padding: 0px 10px;
  }
`
const TextP1 = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #3b310f;
  margin: 0;
`
const TextP2 = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`

const TextP3 = styled.p`
font-size: 15px;
line-height: 1.5;
color: #54450e;
`
const TextP4 = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #D5D5D5;
`

export default Portfolio;