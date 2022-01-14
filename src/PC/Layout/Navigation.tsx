import styled from 'styled-components';

import './Css/Navigation.css';

const PC_Navigation = () => {
  
  const MoveScroll = (e: any) => {
    var projectDiv = document.getElementById(e);
    window.scrollTo(0, projectDiv!.offsetTop);
  }

    return (
        <MenuDiv>
          <MenuButton onClick={() => MoveScroll("About")}>ABOUT</MenuButton>
          <MenuButton onClick={() => MoveScroll("Career")}>CAREER</MenuButton>
          <MenuButton onClick={() => MoveScroll("Project")}>PROJECT</MenuButton>
          <MenuButton onClick={() => MoveScroll("Skill")}>SKILL</MenuButton>
          <MenuButton onClick={() => MoveScroll("Contact")}>CONTACT</MenuButton>
        </MenuDiv>
    );
  }
  
const MenuDiv = styled.div`
  display: flex;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  position: absolute;
`
const MenuButton = styled.button`
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

export default PC_Navigation;
