//Header 파일
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Header = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const getCurrentScroll = () =>{
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', getCurrentScroll);
    return () => { // cleanup 
      window.removeEventListener('scroll', getCurrentScroll);
    }
  }, []);

  const MoveScroll = (e: any) => {
    var projectDiv = document.getElementById(e);
    window.scrollTo(0, projectDiv!.offsetTop);
  }

  return (
    <Head id="Header" style={{backgroundColor: scrollY >= 80 ? "#FFFFFF" : "transparent"}}>
      <InnerDiv>
        <ImgButton id="LogoButton">
          <ImgProfile src= "/img/IN.png"/>
        </ImgButton>
        <MenuDiv>
          <MenuButton onClick={() => MoveScroll("About")}>ABOUT</MenuButton>
          <MenuButton onClick={() => MoveScroll("Career")}>CAREER</MenuButton>
          <MenuButton onClick={() => MoveScroll("Project")}>PROJECT</MenuButton>
          <MenuButton onClick={() => MoveScroll("Skill")}>SKILL</MenuButton>
          <MenuButton onClick={() => MoveScroll("Contact")}>CONTACT</MenuButton>
          <Link to='/blog'>
            <MenuButton className='text-shadow' style={{color:"#FFF37C"}}>
              BLOG
            </MenuButton>
          </Link> 
        </MenuDiv>
      </InnerDiv>
    </Head>
  );
}

const Head = styled.div`
  position: fixed;
  top:0;
  width: 100%;
  z-index: 1;
`
const InnerDiv = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  height: 70px;
  
  @media only screen and (max-width: 1280px) {
    width: auto;
    padding: 0 10px;
  }
`
const ImgButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  &:focus{
    outline:none;
  }
`

 const ImgProfile = styled.img`
  width: 50px;
  height: 50px;
 `
 
const MenuDiv = styled.div`
display: flex;
top: 50%;
right: 15px;
transform: translateY(-50%);
position: absolute;
`
const MenuButton = styled.div`
display: block;
padding: 20px 0;
font-size: 17px;
color: #402D1A;
font-weight: bold;
padding-left: 30px;
text-decoration: none;
vertical-align: baseline;
color: #666;
background: transparent;
border: none;
cursor: pointer;

&:focus{
  outline:none;
}
`

export default Header;

