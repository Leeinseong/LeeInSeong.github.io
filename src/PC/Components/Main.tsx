import { createContext, useState } from 'react';
import Portfolio   from './Portfolio';
import About   from './About';
import Career  from './Career';
import Project from './Project';
import Skill   from './Skill';
import Contact   from './Contact';

export const ProjectContext = createContext({
  project: "",
  setProject: (index: any) => {}
});

const projectList = [
  {
    type: "sch",
    name: "아주대학교",
    startMonth: "2012/03",
    endMonth: "2018/02",
    department: "소프트웨어공학과",
    projectList: [
      {
        id:"AJOU-NFC",
        projectType:"개인",
        title:"NFC 태그 주문 및 결제 프로그램",
        period: "2017년 09월 ~ 2017년 12월",
        language: "Android Studio, PHP",
        db: "Oracle, FireBase DB",
        management: "Git",
        description: "각 점포 별로 배부된 NFC 태그를 테이블마다 두어 핸드폰 어플로 테이블의 NFC 태그를 접촉하여 주문 및 다른 테이블로 메시지를 보낼 수 있는 시스템",
        role: "POS 애플리케이션 개발(주문 확인, 메뉴 수정, 테이블별 정보)\n" +
              "POS기와 주문 APP의 FIREBASE DB 연동\n" +
              "POS기와 주문 APP 사이의 실시간 주문 및 데이터 통신을 위한 FIREBASE DB 구축\n" +
              "Oracle과 Firebase db의 동시 사용을 위한 쓰레드와 플래그를 통한 순서별 처리\n" +
              "사용자 정보와 주문 정보를 ORACLE에 저장하여 솔루션을 위한 데이터 축척"
      }
    ],
  },
  {
    type: "co",
    name: "S&AT",
    startMonth: "2016/12",
    endMonth: "2017/02",
    department: "SMART CITY 메신저 개발팀",
    projectList: [
      {
        id:"S&AT-Messenger",
        projectType:"신규",
        title:"SMART CITY 프로젝트의 메신저 프로그램 개발",
        period: "2016년 12월 ~ 2017년 02월",
        language: "QT, C++, QML, Rabbit MQ",
        db: "Oracle",
        management: "Git",
        description: "사내 SMART CITY 프로그램에 사용자와 관리자의 통신을 위한 메신저 프로그램",
        role: "RABBIT MQ 서버를 통한 메시지 QUEUE 설계, 개발\n" +
              "RABBIT MQ 서버의 ROUTE KEY를 통한 PUBLISH, SUBSTRIBE 구축\n" +
              "C++과 QML을 이용한 메신저 프로그램 개발\n" +
              "사용자 메시지와 ROUTE KEY, 친구목록을 저장할 DATABASE 설계",
      }
    ],
  },
  {
    type: "co",
    name: "GS ITM",
    startMonth: "2018/03",
    endMonth: "2019/12",
    department: " 커머스사업센터 LF팀",
    projectList: [
      {
        id:"ITM-NBOS",
        projectType:"구조개선",
        title:"LFMall SBOS 어드민 구조개선",
        period: "2018년 07월 ~ 2019년 05월",
        language: "Spring boot(1.3.5.RELEASE), JAVA, Nexacro17",
        db: "Oracle(mybatis)",
        management: "Git, Jenkins, Jira",
        description: "기존 struts, wise-grid, Oracle(ibatis)의 구조에서 Spring boot, Nexacro, Oracle(mybatis)의 구조로 개선 및 추가 관리자 페이지 구축, 기존 DB의 내부 Query와 프로시저 개선",
        role: "상품관리(품절관리, ep문구 관리, 벤더별 판매 비율, 촬영관리 )\n" +
              "주문배송(입점사 미발주 목록, 배송지연목록, 물류비고관리)\n" +
              "회원 프로모션(판매예약관리, 오늘만 특가관리, 선 포인트제한, 무이자할부카드, 외부제공링크)\n" +
              "영업(입점업체신청관리, 입점업체관리, 입점업체출고처관리)\n" +
              "정산(직속매장수수료관리, 제휴사 정산관리, 상품대금비교)\n" +
              "게시판(내부공지, 외부공지)\n" +
              "고객추천지수 (고객상담센터, 고객만족도, AS)\n" +
              "기존 LF MALL의 운영 업무의 수행과 조건을 이해하고 구축\n" +
              "기존 DB Query의 내부 Query 및 속도 개선\n" +
              "기존 DB의 프로시저를 정리하여 가능한 부분을 JAVA로 전환",
      },
      {
        id:"ITM-Brandmall",
        projectType:"신규",
        title:"브랜드몰 구축(마에스트로, 헤지스, 블루라운지, 라푸마)",
        period: "2019년 5월 ~ 2019년 12월",
        language: "Spring boot(1.3.5.RELEASE), JAVA",
        db: "ORACLE(mybatis)",
        management: "Git, Jenkins, Jira",
        description: "각 브랜드의 사이트들을 분석하여 결제 및 주문 페이지와 같은 공통 부분과 각 브랜드 사이트의 전시 및 상품 페이지를 분리하여 하나의 프로젝트로 통합 및 구축",
        role: "모든 브랜드몰이 같이 사용할 DB 설계(MAGAZINE, CONTENT, PRODUCT, MENU)\n" +
              "상품목록 및 관련정보 조회 API 구축\n" +
              "MAESTRO, BLUEROUNGE : ADMIN, PWEB 사이트 구축\n" +
              "HAZZYS, LAFUMA : ADMIN, MWEB 사이트 구축"
      }],
  },
  {
    type: "co",
    name: "LG CNS",
    department: "스마트F&C사업부 스마트물류담당 스마트물류솔루션팀",
    startMonth: "2020/01",
    endMonth: "2021/06",
    projectList: [
      {
        id:"CNS-Coupang",
        projectType:"신규/개선",
        title:"쿠팡 신선 및 일반 배송/물류 배송 시스템(부천1, 부천2, 고양)",
        period: "2020년 2월 ~ 2020년 8월",
        language: "C#, Factova, IIS",
        db: "Oracle, MSSQL",
        management: "Git",
        description: "쿠팡 물류창고의 컨베이어 소터, 휠소터를 통한 자동 분류 소터 구축",
        role: "설비(PLC)와 소켓통신을 통해 바코드 정보와 슈트, 상품종류등을 통신하는 ECS 서버 개발\n" +
              "설비장비들(인덕션, 컨베이어, 휠, 슈트, 라벨프린터등...)의 상태와 정보들을 받아 사용자에게 실시간으로 보여주는 SCADA 프로그램 개발",
      },
      {
        id:"CNS-Lotte",
        projectType:"신규",
        title:"롯데마트 스마트/세미다크 스토어 (예약배송, 바로배송)",
        period: "2020년 8월 ~ 2021년 6월",
        language: "C#, Factova, IIS",
        db: "Oracle, MSSQL",
        management: "Git",
        description: "롯데마트의 스마트스토어(바로배송 + 예약배송 + 픽업)과 세미다크(예약배송 + 픽업)에서 피킹완료부터 출하장까지 분류를 자동화 시스템",
        role: "관리자 화면 및 패킹 및 검수 프로그램 개발(WCS)\n" +
              "Interface 통신을 위한 IIS Server 구축 및 인터페이스 생성\n" +
              "패킹완료 및 검수 데이터를 상위 시스템으로 전송을 위한 Batch 프로그램 개발\n" +
              "WCS 프로그램 배포를 위한 Setup 프로그램 및 업데이트 버전 관리",
        href: [
          {
            title: "스마트스토어",
            link : "http://biz.newdaily.co.kr/site/data/html/2020/12/18/2020121800058.html"
          },
          {
            title: "세미다크스토어",
            link : "https://www.mk.co.kr/news/business/view/2020/10/1108816"
          },
        ]
      }],
  },
  {
    type: "co",
    name: "Tier.J",
    department: "정기 구독 플랫폼(다독) 개발팀",
    startMonth: "2021/07",
    endMonth: "2022/01",
    projectList: [
      {
        id:"TierJ-Daadok",
        projectType:"신규",
        title:"정기 구독 플랫폼 (다독) 개발",
        period: "2021년 7월 ~ 2022년 1월",
        language: "React, React Native, TypeORM, JavaScript,",
        db: "PostgreSQL",
        management: "Git, Notion, Docker, Jenkins",
        description: "정기구독 플랫폼 (다독) - 앱, 렌더링 페이지, 판매자 페이지, 관리자 페이지, 서버, 배치, DB 기획 및 개발",
        role: "App - 기획 및 개발, CodePush를 통한 앱 배포\n" +
               "서버 - 자동 무중단 배포(Nginx, Jenkins, Docker, BlueGreen 이중화), KakaoBiz 메시지, 푸쉬알람, API 개발\n" +
               "배치 - 정기결제(이니시스), 배송조회(스마트택배 API), 구매확정, 리뷰요청 개발 \n" +
               "DB - 설계 및 개발\n" +
               "판매자 페이지, 관리자 페이지, 렌더링 페이지 개발",
        href: [
          {
            title: "블로그글",
            link : "https://blog.naver.com/aquazy/222607093466"
          },
        ]
      }],
    },
]

const Main = () => {
  const [project, setProject] = useState("");

    // //컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
    // componentDidMount() {
    //   document.title = "LeeInSeong Portfolio";
    // }
    
    return (
      <>
        <ProjectContext.Provider value={{project, setProject}}>
          <Portfolio/>
          <About projectList={projectList}/>
          <Career projectList={projectList}/>
          <Project projectList={projectList}/>
          <Skill/>
          <Contact/>
        </ProjectContext.Provider>
      </>
    );
  }
    
  export default Main;