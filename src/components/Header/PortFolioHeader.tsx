import React, { useEffect, useState } from "react";
import Link from "next/Link";
import styled from "styled-components";

const HeadContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: #fff;

  @media only screen and (max-width: 767px) {
    height: 40px;
    background: #a4b9c6;
  }
`;

const InnerDiv = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  height: 70px;

  @media only screen and (max-width: 1280px) {
    width: auto;
    padding: 0 10px;
  }
`;

const ImgButton = styled.button`
  width: 60px;
  height: 70px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const ImgProfile = styled.img`
  width: 50px;
  height: 50px;
`;

const MenuDiv = styled.div`
  display: flex;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  position: absolute;
`;

const MenuButton = styled.div`
  display: block;
  padding: 20px 0;
  font-size: 17px;
  color: #402d1a;
  font-weight: bold;
  padding-left: 30px;
  text-decoration: none;
  color: #666;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const PortfolioHeader = () => {
  // const [width, setWidth] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    // setWidth(window.innerWidth);
    // const onResize = () => {
    //   setWidth(window.innerWidth);
    // };
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    // window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    return () => {
      // window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const goTop = (e: any) => {
    window.scrollTo(0, 0);
  };

  const MoveScroll = (e: any) => {
    var projectDiv = document.getElementById(e);
    window.scrollTo(0, projectDiv!.offsetTop);
  };

  return (
    <HeadContainer
      style={{
        boxShadow: scrollY > 80 ? "0 0 15px LightGrey" : "none",
      }}
    >
      <InnerDiv>
        <ImgButton id="LogoButton" onClick={goTop}>
          <ImgProfile src="/img/IN.png" />
        </ImgButton>
        <MenuDiv>
          <MenuButton onClick={goTop}>HOME</MenuButton>
          <MenuButton onClick={() => MoveScroll("About")}>ABOUT</MenuButton>
          <MenuButton onClick={() => MoveScroll("Career")}>CAREER</MenuButton>
          <MenuButton onClick={() => MoveScroll("Project")}>PROJECT</MenuButton>
          <MenuButton onClick={() => MoveScroll("Skill")}>SKILL</MenuButton>
          <MenuButton onClick={() => MoveScroll("Contact")}>CONTACT</MenuButton>
          <Link href="/blog">
            <MenuButton className="text-shadow" style={{ color: "#FF4001" }}>
              BLOG
            </MenuButton>
          </Link>
        </MenuDiv>
      </InnerDiv>
    </HeadContainer>
  );
};

export default PortfolioHeader;
