import React, { Component } from 'react';
import styled from 'styled-components';

class Career extends Component {
  MoveScroll = (e) => {
    var projectDiv = document.getElementById(e);
    window.scrollTo(0, projectDiv.offsetTop - 80);

    var head = document.getElementById( e +"-Header");
    var detail = document.getElementById( e +"-Detail");

    if(detail.style.display !== 'grid'){
      head.click();
    }
  }

  render() {
    return (
      <Container className="Career">
        <InnerDiv>
          <MainTitle>Career</MainTitle>
          <ul className="cbp_tmtimeline">
              <li>
                  <div className="cbp_tmtime"><span>2012/03</span> <span className="large">~2018/02</span></div>
                  <div className="cbp_tmicon bg-infgo"><i className="zmdi zmdi-city"></i></div>
                  <div className="cbp_tmlabel"> 
                    <TitleCareer>아주대학교 소프트웨어공학과</TitleCareer>
                    <DetailCareer>
                        <b>관련 프로젝트</b><br/>
                        <ProjectButton onClick={() => this.MoveScroll("IS-NFC")}>NFC 태그 주문 및 결제 프로그램</ProjectButton><br/>
                    </DetailCareer>
                  </div>
              </li>
              <li>
                  <div className="cbp_tmtime" ><span>2018/03</span> <span>~2019/12</span></div>
                  <div className="cbp_tmicon bg-green"><i className="zmdi zmdi-case"></i></div>
                  <div className="cbp_tmlabel">
                      <TitleCareer>GSITM 커머스사업센터 LF팀</TitleCareer>
                      <DetailCareer>
                        <b>관련 프로젝트</b><br/>
                        <ProjectButton onClick={() => this.MoveScroll("ITM-NBOS")}>NBOS 구조개선 프로젝트</ProjectButton><br/>
                        <ProjectButton onClick={() => this.MoveScroll("ITM-Brandmall")}>브랜드몰 구축 프로젝트</ProjectButton><br/>
                      </DetailCareer>
                  </div>
              </li>
              <li>
                  <div className="cbp_tmtime" ><span>2020/01</span> <span>~Now</span></div>
                  <div className="cbp_tmicon bg-green"> <i className="zmdi zmdi-case"></i></div>
                  <div className="cbp_tmlabel">
                      <TitleCareer>LG CNS 스마트F&C사업부 스마트물류담당 스마트물류솔루션팀</TitleCareer>
                      <DetailCareer>
                        <b>관련 프로젝트</b><br/>
                        <ProjectButton onClick={() => this.MoveScroll("CNS-Lotter")}>롯데마트 스마트스토어/다크스토어 구축 및 확산 프로젝트</ProjectButton><br/>
                        <ProjectButton onClick={() => this.MoveScroll("CNS-Coupang")}>쿠팡 물류센터 쿠팡배송 프로젝트</ProjectButton><br/>
                      </DetailCareer>
                  </div>
              </li>
              <li>
                  <div className="cbp_tmtime" ></div>
                  <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin"></i></div>
                  <div className="cbp_tmlabel">
                      <TitleCareer>개인 프로젝트</TitleCareer>
                      <DetailCareer>
                        <b>관련 프로젝트</b><br/>
                        <ProjectButton onClick={() => this.MoveScroll("IS-Telegram")}>공지/공시 확인 및 자동 매매 프로그램</ProjectButton><br/>
                        <ProjectButton onClick={() => this.MoveScroll("IS-Portfolio")}>ReactJS 개발자 포토폴리오</ProjectButton><br/>
                        <ProjectButton onClick={() => this.MoveScroll("IS-Telegram")}>가상화폐 이동 감시 텔레그램 챗봇</ProjectButton><br/>
                      </DetailCareer>
                  </div>
              </li>
            </ul>  
          </InnerDiv>
        </Container>
    );
  }
}
    
const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 50px;
  height:Auto;

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
`
const TitleCareer = styled.h2` 
  font-size: 20px;
`
const DetailCareer = styled.p`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height : 1.7;
  color: #444;
`
const ProjectButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  margin-top: 5px;
`

 export default Career;