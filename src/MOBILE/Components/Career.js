import React, { Component } from 'react';
import styled from 'styled-components';

import './Css/Career.css';

class Career extends Component {
    render() {
        return (
          <Container className="Career">
            <h1 className="ContentTitle">Career</h1>
            <ul className="cbp_tmtimeline" style={{marginTop:"20px"}}>
                <li>
                    <div className="cbp_tmtime"><span>2012/03</span> <span className="large">~2018/02</span></div>
                    <div className="cbp_tmicon bg-infgo"><i className="zmdi zmdi-city"></i></div>
                    <div className="cbp_tmlabel"> 
                      <TitleCareer>아주대학교 소프트웨어공학과</TitleCareer>
                      <DetailCareer>
                          <b>관련 프로젝트</b><br/>
                          <a href="#IS-NFC">NFC 태그 주문 및 결제 프로그램</a><br/>
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
                          <a href="#ITM-NBOS">NBOS 구조개선 프로젝트</a><br/>
                          <a href="#ITM-Brandmall">브랜드몰 구축 프로젝트</a><br/>
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
                          <a href="#CNS-Coupang">쿠팡 물류센터 쿠팡배송 프로젝트</a><br/>
                          <a href="#CNS-Lotte">롯데마트 스마트스토어/다크스토어 구축 및 확산 프로젝트</a><br/>
                        </DetailCareer>
                    </div>
                </li>
                <li>
                    <div className="cbp_tmtime" ><span>개인</span><span>프로젝트</span></div>
                    <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin"></i></div>
                    <div className="cbp_tmlabel">
                        <TitleCareer>개인 프로젝트</TitleCareer>
                        <DetailCareer>
                          <b>관련 프로젝트</b><br/>
                          <a href="#IS-Telegram">가상화폐 이동 감시 텔레그램 챗봇</a><br/>
                          <a href="#IS-Portfolio">ReactJS 개발자 포토폴리오</a><br/>
                        </DetailCareer>
                    </div>
                </li>

            </ul>  
            </Container>
        );
      }
    }
    
const Container = styled.div`
  height:Auto;
  padding: 20px 30px 30px 30px;
`
const TitleCareer = styled.h2` 
  font-size: 20px;
`
const DetailCareer = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  line-height : 1.7;
  color: #444;
`
  export default Career;