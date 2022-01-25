import styled from 'styled-components';

const Skill = () => {
  return (
    <Container id="Skill">
      <InnerDiv>
        <MainTitle>Skill</MainTitle>
        <h2>주스킬</h2>
        <LanguageImg alt="React" src= "/img/image_React.png"></LanguageImg>
        <LanguageImg alt="ReactNative" src= "/img/image_ReactNative.png"></LanguageImg>
        <LanguageImg alt='CSharp' src= "/img/image_CSharp.png"></LanguageImg>
        <LanguageImg alt='Java' src= "/img/image_Java.png"></LanguageImg>
        <LanguageImg alt='JavaScript' src= "/img/image_JavaScript.png"></LanguageImg>
        <LanguageImg alt='TypeScript' src= "/img/image_TypeScript.png"></LanguageImg>
        <LanguageImg alt='Spring' src= "/img/image_Spring.png"></LanguageImg>
        <br/>
        <h2 style={{marginTop:"40px"}}>부스킬</h2>
        <LanguageImg alt='Oracle' src= "/img/image_Oracle.jpg"></LanguageImg>
        <LanguageImg alt='PostgreSQL' src= "/img/image_PostgreSQL.png"></LanguageImg>
        <LanguageImg alt='GrphQL' src= "/img/image_GraphQL.png"></LanguageImg>
        <LanguageImg alt='MySQL' src= "/img/image_MySQL.png"></LanguageImg>
        <LanguageImg alt='Android' src= "/img/image_Android.png"></LanguageImg>
        <LanguageImg alt='IIS'  src= "/img/image_IIS.png"></LanguageImg>
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

const LanguageImg = styled.img`
  height: 150px;
  margin-bottom:20px;
`
  export default Skill;