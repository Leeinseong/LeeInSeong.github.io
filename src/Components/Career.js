import React, { Component } from 'react';
import styled from 'styled-components';

//import stylesheet from 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css';
import './Css/Career.css';

class Career extends Component {
    render() {
        return (
          <Container className="Career">
            <h1 className="ContentTitle">Career</h1>
            <ul className="cbp_tmtimeline">
                <li>
                    <div className="cbp_tmtime"><span className="hidden">2012/03</span> <span className="large">~2018/02</span></div>
                    <div className="cbp_tmicon bg-infgo"><i className="zmdi zmdi-city"></i></div>
                    <div className="cbp_tmlabel"> 
                      <TitleCareer>아주대학교 소프트웨어공학과</TitleCareer>
                      <DetailCareer>
                          <b>관련 프로젝트</b><br/>
                      <a href="#">NFC 태그 주문 및 결제 프로그램</a><br/>
                      </DetailCareer>
                    </div>
                </li>
                <li>
                    <div className="cbp_tmtime" ><span>03:45 AM</span> <span>Today</span></div>
                    <div className="cbp_tmicon bg-green"><i className="zmdi zmdi-case"></i></div>
                    <div className="cbp_tmlabel">
                        <TitleCareer>GSITM 커머스사업센터 LF팀</TitleCareer>
                        <DetailCareer>
                          <b>관련 프로젝트</b><br/>
                          <a href="#">NBOS 구조개선 프로젝트</a><br/>
                          <a href="#">브랜드몰 구축 프로젝트</a><br/>
                        </DetailCareer>
                    </div>
                </li>
                <li>
                    <div className="cbp_tmtime" ><span>01:22 PM</span> <span>Yesterday</span></div>
                    <div className="cbp_tmicon bg-green"> <i className="zmdi zmdi-case"></i></div>
                    <div className="cbp_tmlabel">
                        <TitleCareer>LG CNS 스마트F&C사업부 스마트물류담당 스마트물류솔루션팀</TitleCareer>
                        <DetailCareer>
                          <b>관련 프로젝트</b><br/>
                          <a href="#">쿠팡 물류센터 쿠팡배송 프로젝트</a><br/>
                          <a href="#">롯데마트 스마트스토어/다크스토어 구축 및 확산 프로젝트</a><br/>
                        </DetailCareer>
                    </div>
                </li>
                <li>
                    <div className="cbp_tmtime" ><span>12:13 PM</span> <span>Two weeks ago</span></div>
                    <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin"></i></div>
                    <div className="cbp_tmlabel">
                        <TitleCareer>개인 프로젝트</TitleCareer>
                        <DetailCareer>
                          <b>관련 프로젝트</b><br/>
                          <a href="#">가상화폐 이동 감시 텔레그램 챗봇</a><br/>
                          <a href="#">ReactJS 개발자 포토폴리오</a><br/>
                        </DetailCareer>
                    </div>
                </li>

            </ul>  
            </Container>
        );
      }
    }
    
const Container = styled.div`
  height:50em;
  padding: 20px 0px 0px 30px;
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