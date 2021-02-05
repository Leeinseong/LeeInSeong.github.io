import React, { Component } from 'react';
import styled from 'styled-components';

class Project extends Component {
    render() {
        return (
          <Container className="Project">
            <h1 className="ContentTitle" style={{marginBottom:"20px"}}>Project</h1>
            <ButtonContainer>[개인] 개발자 포토폴리와 깃허브 페이지</ButtonContainer>
            <SubContainer className="IS-Portfolio">
              <TitleDiv>프로젝트명</TitleDiv>
              <ContentDiv>[개인] 개발자 포토폴리와 깃허브 페이지</ContentDiv>
              <TitleDiv>기간</TitleDiv>
              <ContentDiv>2021년 1월 ~ 2021년 2월</ContentDiv>
              <TitleDiv>개발환경</TitleDiv>
              <ContentDiv>ReactJS, JavaScript</ContentDiv>
              <TitleDiv>상세설명</TitleDiv>
              <ContentDiv>
                ReactJS를 이용하여 구연한 개발자 Portfolio 반응형 웹페이지
              </ContentDiv>
              <TitleDiv>Git</TitleDiv>
              <ContentDiv></ContentDiv>
            </SubContainer>

            <SubContainer className="IS-Telegram">
              <TitleDiv>프로젝트명</TitleDiv>
              <ContentDiv>[개인]가상화폐 거래(지갑/토큰) 분석 텔레그램 챗봇</ContentDiv>
              <TitleDiv>기간</TitleDiv>
              <ContentDiv>2020년 5월 ~ NOW</ContentDiv>
              <TitleDiv>개발환경</TitleDiv>
              <ContentDiv>C#, Telegram Chatbot</ContentDiv>
              <TitleDiv>DB</TitleDiv>
              <ContentDiv>Oracle</ContentDiv>
              <TitleDiv>상세설명</TitleDiv>
              <ContentDiv>
                Etherscan API를 통해 지정한 특정 지갑 또는 코인의 이동을 분석하고 설정한 조건에 맞는 Transaction 정보를 Telegram ChatBot을 통해 실시간으로 알려주는 프로그램
              </ContentDiv>
              <TitleDiv>Git</TitleDiv>
              <ContentDiv></ContentDiv>
            </SubContainer>

            <SubContainer className="CNS-Lotte">
              <TitleDiv>프로젝트명</TitleDiv>
              <ContentDiv>[신규/확산](LG CNS - 롯데마트)롯데마트 스마트/세미다크 스토어 (예약배송, 바로배송)</ContentDiv>
              <TitleDiv>기간</TitleDiv>
              <ContentDiv>2020년 8월 ~ NOW</ContentDiv>
              <TitleDiv>개발환경</TitleDiv>
              <ContentDiv>C#, Factova, IIS Server</ContentDiv>
              <TitleDiv>DB</TitleDiv>
              <ContentDiv>Oracle, MSSQL</ContentDiv>
              <TitleDiv>상세설명</TitleDiv>
              <ContentDiv>
                롯데마트의 스마트스토어(바로배송 + 예약배송 + 픽업)과 세미다크(예약배송 + 픽업)에서 피킹완료부터 출하장까지 분류를 자동화 시스템<br/><br/>
                *참조 <br/>
                스마트스토어 : <a href="http://biz.newdaily.co.kr/site/data/html/2020/12/18/2020121800058.html">http://biz.newdaily.co.kr/site/data/html/2020/12/18/2020121800058.html</a><br/>
                세미다크스토어 : <a href="https://www.mk.co.kr/news/business/view/2020/10/1108816">https://www.mk.co.kr/news/business/view/2020/10/1108816</a>
              </ContentDiv>
              <TitleDiv>역할</TitleDiv>
              <ContentDiv>
                관리자 화면 및 패킹 및 검수 프로그램 개발(WCS)    <br/>
                Interface 통신을 위한 IIS Server 구축 및 인터페이스 생성 <br/>
                패킹완료 및 검수 데이터를 상위 시스템으로 전송을 위한 Batch 프로그램 개발 <br/>
                WCS 프로그램 배포를 위한 Setup 프로그램 및 업데이트 버전 관리
                </ContentDiv>
            </SubContainer>
            
            <SubContainer className="CNS-Coupang">
              <TitleDiv>프로젝트명</TitleDiv>
              <ContentDiv>[신규/개선](LG CNS - 쿠팡) 쿠팡 신선 및 일반 배송/물류 배송 시스템(부천1, 부천2, 고양)</ContentDiv>
              <TitleDiv>기간</TitleDiv>
              <ContentDiv>2020년 2월 ~ 2020년 8월</ContentDiv>
              <TitleDiv>개발환경</TitleDiv>
              <ContentDiv>C#, Factova, IIS</ContentDiv>
              <TitleDiv>DB</TitleDiv>
              <ContentDiv>Oracle, MSSQL</ContentDiv>
              <TitleDiv>상세설명</TitleDiv>
              <ContentDiv>쿠팡 물류창고의 컨베이어 소터, 휠소터를 통한 자동 분류 소터 구축</ContentDiv>
              <TitleDiv>역할</TitleDiv>
              <ContentDiv>
                설비(PLC)와 소켓통신을 통해 바코드 정보와 슈트, 상품종류등을 통신하는 ECS 서버 개발 <br/> 
                설비장비들(인덕션, 컨베이어, 휠, 슈트, 라벨프린터등...)의 상태와 정보들을 받아 사용자에게 실시간으로 보여주는 SCADA 프로그램 개발 <br/>
              </ContentDiv>
            </SubContainer>
            
            <SubContainer className="ITM-Brandmall">
              <TitleDiv>프로젝트명</TitleDiv>
              <ContentDiv>[신규](GS ITM - LFMALL) 브랜드몰 구축(마에스트로, 헤지스, 블루라운지, 라푸마)</ContentDiv>
              <TitleDiv>기간</TitleDiv>
              <ContentDiv>2019년 5월 ~ 2019년 12월</ContentDiv>
              <TitleDiv>개발환경</TitleDiv>
              <ContentDiv>Spring boot(1.3.5.RELEASE), JAVA</ContentDiv>
              <TitleDiv>DB</TitleDiv>
              <ContentDiv>ORACLE(mybatis)</ContentDiv>
              <TitleDiv>형상관리</TitleDiv>
              <ContentDiv>Git, Jenkins, Jira</ContentDiv>
              <TitleDiv>상세설명</TitleDiv>
              <ContentDiv>각 브랜드의 사이트들을 분석하여 결제 및 주문 페이지와 같은 공통 부분과 각 브랜드 사이트의 전시 및 상품 페이지를 분리하여 하나의 프로젝트로 통합 및 구축</ContentDiv>
              <TitleDiv>역할</TitleDiv>
              <ContentDiv> 
                모든 브랜드몰이 같이 사용할 DB 설계(MAGAZINE, CONTENT, PRODUCT, MENU)       <br/>
                상품목록 및 관련정보 조회 API 구축                                          <br/>
                MAESTRO, BLUEROUNGE : ADMIN, PWEB 사이트 구축                                          <br/>
                HAZZYS, LAFUMA : ADMIN, MWEB 사이트 구축                                           <br/>
              </ContentDiv>
            </SubContainer>
            
            <SubContainer className="ITM-NBOS">
              <TitleDiv>프로젝트명</TitleDiv>
              <ContentDiv>[구조개선](GS ITM - LFMALL) SBOS LFMall 어드민 구조개선</ContentDiv>
              <TitleDiv>기간</TitleDiv>
              <ContentDiv>2018년 07월 ~ 2019년 05월</ContentDiv>
              <TitleDiv>개발환경</TitleDiv>
              <ContentDiv>Spring boot(1.3.5.RELEASE), JAVA, Nexacro17</ContentDiv>
              <TitleDiv>DB</TitleDiv>
              <ContentDiv>Oracle(mybatis)</ContentDiv>
              <TitleDiv>형상관리</TitleDiv>
              <ContentDiv>Git, Jenkins, Jira</ContentDiv>
              <TitleDiv>상세설명</TitleDiv>
              <ContentDiv>기존 struts, wise-grid, Oracle(ibatis)의 구조에서 Spring boot, Nexacro, Oracle(mybatis)의 구조로 개선 및 추가 관리자 페이지 구축, 기존 DB의 내부 Query와 프로시저 개선</ContentDiv>
              <TitleDiv>역할</TitleDiv>
              <ContentDiv> 
                상품관리(품절관리, ep문구 관리, 벤더별 판매 비율, 촬영관리 )                            <br/>
                주문배송(입점사 미발주 목록, 배송지연목록, 물류비고관리)                                <br/>
                회원 프로모션(판매예약관리, 오늘만 특가관리, 선 포인트제한, 무이자할부카드, 외부제공링크)  <br/>
                영업(입점업체신청관리, 입점업체관리, 입점업체출고처관리)                                 <br/>
                정산(직속매장수수료관리, 제휴사 정산관리, 상품대금비교)                                  <br/>
                게시판(내부공지, 외부공지)                                                            <br/>
                고객추천지수 (고객상담센터, 고객만족도, AS)                                            <br/>
                기존 LF MALL의 운영 업무의 수행과 조건을 이해하고 구축                                  <br/>
                기존 DB Query의 내부 Query 및 속도 개선                                               <br/>
                기존 DB의 프로시저를 정리하여 가능한 부분을 JAVA로 전환                                 <br/>
              </ContentDiv>
            </SubContainer>

            <SubContainer className="S&AT-Messenger">
              <TitleDiv>프로젝트명</TitleDiv>
              <ContentDiv>[신규](S&AT) SMART CITY 프로젝트의 메신저 프로그램 개발</ContentDiv>
              <TitleDiv>기간</TitleDiv>
              <ContentDiv>2017년 12월 ~ 2018년 02월</ContentDiv>
              <TitleDiv>개발환경</TitleDiv>
              <ContentDiv>QT, C++, QML, RABBIT MQ</ContentDiv>
              <TitleDiv>DB</TitleDiv>
              <ContentDiv>Oracle</ContentDiv>
              <TitleDiv>상세설명</TitleDiv>
              <ContentDiv>회사 SMART CITY 프로그램에 사용자와 관리자의 통신을 위한 메신저 프로그램</ContentDiv>
              <TitleDiv>역할</TitleDiv>
              <ContentDiv> 
                RABBIT MQ 서버를 통한 메시지 QUEUE 설계, 개발<br/>
                RABBIT MQ 서버의 ROUTE KEY를 통한 PUBLISH, SUBSTRIBE 구축<br/>
                C++과 QML을 이용한 메신저 프로그램 개발<br/>
                사용자 메시지와 ROUTE KEY, 친구목록을 저장할 DATABASE 설계<br/>
              </ContentDiv>
            </SubContainer>

            <SubContainer className="IS-NFC">
              <TitleDiv>프로젝트명</TitleDiv>
              <ContentDiv>[개인] NFC 태그를 통한 셀프 주문 시스템</ContentDiv>
              <TitleDiv>기간</TitleDiv>
              <ContentDiv>2017년 09월 ~ 2017년 12월</ContentDiv>
              <TitleDiv>개발환경</TitleDiv>
              <ContentDiv>Android Studio, PHP</ContentDiv>
              <TitleDiv>DB</TitleDiv>
              <ContentDiv>Oracle, FireBase DB</ContentDiv>
              <TitleDiv>상세설명</TitleDiv>
              <ContentDiv>각 점포 별로 배부된 NFC 태그를 테이블마다 두어 핸드폰 어플로 테이블의 NFC 태그를 접촉하여 주문 및 다른 테이블로 메시지를 보낼 수 있는 시스템</ContentDiv>
              <TitleDiv>역할</TitleDiv>
              <ContentDiv>
                POS 애플리케이션 개발(주문 확인, 메뉴 수정, 테이블별 정보)<br/>
                POS기와 주문 APP의 FIREBASE DB 연동<br/>
                POS기와 주문 APP 사이의 실시간 주문 및 데이터 통신을 위한 FIREBASE DB 구축<br/>
                Oracle과 Firebase db의 동시 사용을 위한 쓰레드와 플래그를 통한 순서별 처리<br/>
                사용자 정보와 주문 정보를 ORACLE에 저장하여 솔루션을 위한 데이터 축척<br/>
              </ContentDiv>
            </SubContainer>
          </Container>
        );
      }
    }
    
const Container = styled.div`
  height:Auto;
  padding: 20px 30px 30px 30px;
  background: #F3F3F3;
`
const ButtonContainer = styled.div`
  padding: 10px;
  background: #FFFFFF;
`

const SubContainer = styled.div`
  display:grid;
  grid-template-columns: 150px auto;
  grid-gap : 0;
  border : solid;
  background: #FFFFFF;
  margin-bottom: 15px;
  display:none; 
`

const TitleDiv = styled.div`
  padding: 10px 10px 10px 10px;
  border-right: solid grey 0.5px;
  border-bottom: solid grey 0.5px;
  &:nth-last-child(2){
    border-bottom: 0px;
  }
`

const ContentDiv = styled.div`
  padding: 10px;
  border-bottom: solid grey 0.5px;
  &:nth-last-child(1){
    border-bottom: 0px;
  }
`

export default Project;