import styled from 'styled-components';
import './Css/Navigation.css';

const MobileNavigation = () => {
  const MoveScroll = (e: any) => {
    var projectDiv = document.getElementById(e);
    var menuDiv = document.getElementById("MenuDiv");
    menuDiv!.style.display = "none";
    window.scrollTo(0, projectDiv!.offsetTop);
  }

  const Close = (e: any) =>{
    var menuDiv = document.getElementById("MenuDiv");
    menuDiv!.style.display = "none";
  }

  return (
    <Container id="MenuDiv">
      <BackDiv onClick = {Close}/>
      <InnerDiv>
        <MenuHeader>MENU</MenuHeader>
        <ImgButton onClick={Close}>
          <ImgClose src= "/img/Close.png"/>
        </ImgButton>
        <MenuButton onClick={() => MoveScroll("About")}>ABOUT</MenuButton>
        <MenuButton onClick={() => MoveScroll("Career")}>CAREER</MenuButton>
        <MenuButton onClick={() => MoveScroll("Project")}>PROJECT</MenuButton>
        <MenuButton onClick={() => MoveScroll("Skill")}>SKILL</MenuButton>
        <MenuButton onClick={() => MoveScroll("Contact")}>CONTACT</MenuButton>
      </InnerDiv>
    </Container>
  );
}

 const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 20;
  display:none;
 `
 const BackDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #575757;
  opacity: 80%;
 `
 const InnerDiv = styled.div`
  position: fixed;
  right: 0px;
  width: 70%;
  height: 100%;
  background: #ffffff;
 `
 const MenuHeader = styled.div`
  background: #A4B9C6;
  color: #fff;
  font-size: 34px;
  padding: 15px 33px !important;
 `
 const ImgButton = styled.div`
   position: absolute;
   width: 40px;
   height: 40px;
   cursor: pointer;
   top: 15px;
   right: 5px;
   background: transparent;
 `
 const ImgClose = styled.img`
  width: 40px;
  height: 40px;
 `
 const MenuButton = styled.div`
   display: block;
   padding: 20px 30px;
   font-size: 17px;
   font-weight: bold;
   vertical-align: baseline;
   color: #666;
   cursor: pointer;
 `
  
export default MobileNavigation;
