//Header 파일
import styled from 'styled-components';
import MobileNavigation from './Navigation';

const MobileHeader = () => {

  const goTop = (e: any) =>{
    window.scrollTo(0, 0);
  }

  const meneuOpen = (e: any) =>{
    var menuDiv = document.getElementById("MenuDiv");
    menuDiv!.style.display = "block";
  }

  return (
    <Head id="Header">
      <ImgButton id="LogoButton" onClick={goTop} style={{left:10}}>
        <ImgProfile src= "/img/IN.png"/>
      </ImgButton>
      <ImgButton style={{right:10}}>
        <ImgProfile src= "/img/Menu_Mobile.png" onClick={meneuOpen}/>
      </ImgButton>
      <MobileNavigation/>
    </Head>
    );
  }

const Head = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background: #A4B9C6;
  z-index:10;
`
const ImgButton = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`
 const ImgProfile = styled.img`
  width: 20px;
  height: 20px;
 `

export default MobileHeader;

