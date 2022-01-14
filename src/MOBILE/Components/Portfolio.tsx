import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Container className="Portfolio">
      <InnerDiv>
        <InImg src="/img/AboutIN_Mobile.png"></InImg>
        <TextDiv>
          <TextP1>LeeInSeong</TextP1>
          <TextP2>4th Year Junior Developer</TextP2>
          <TextP3>안녕하세요. 다양한 언어, 프로젝트를 경험하며 개발실력과<br/>커뮤니케이션 능력을 늘려가는 개발자입니다.<br/> 모든 프로젝트에 항상 책임감을 가지고 참여합니다.</TextP3>
          <TextP4>Good morning. A developer who experiences various languages ​​and projects<br/> to increase development and communication skills.<br/> Always participates in all projects with responsibility.</TextP4>
        </TextDiv>
      </InnerDiv>
    </Container>
  );
}

const Container = styled.div`
  height:auto;
  background: #FFF;
  padding-top: 50px;
`
const InnerDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  text-align:center;
`
const InImg = styled.img`
  width: 100%;
`
const TextDiv = styled.div`
  position: relative;
  padding: 0px 10px;
`
const TextP1 = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #3b310f;
  margin: 0;
  font-family: 'Titillium Web', sans-serif;
`
const TextP2 = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Titillium Web', sans-serif;
  margin: 0;
`
const TextP3 = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #54450e;
  font-family: 'Titillium Web', sans-serif;
  margin: 5px 0px;
`
const TextP4 = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #D5D5D5;
  font-family: 'Titillium Web', sans-serif;
  margin: 5px 0px;
`

export default Portfolio;