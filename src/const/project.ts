
export const projectList = [
  //Tier.J
  {
    type: "co",
    name: "Tier.J",
    department: "정기 구독 플랫폼(다독) 개발팀",
    startMonth: "2021/07",
    endMonth: "2022/01",
    projectList: [
      {
        id:"TierJ-Daadok-App",
        projectType:"신규",
        title:"정기 구독 플랫폼(다독) 앱 개발 및 개선 프로젝트",
        contribution: "FE & BE : 3명(본인), 디자이너: 1명\n" +
                      "기여도: 40%",
        period: "2021년 7월 ~ 2022년 1월",
        language: "ReactNative, Redux, JavaScript, HTML5, TypeScript, GraphQL",
        db: "PostgreSQL",
        management: "Git, Notion, Docker, Jenkins",
        description: "정기구독 플랫폼 (다독) – 앱, 서버, 배치, DB 기획 및 개발",
        role: "- App 기획 및 개발, API 개발\n"+
              "- CodePush를 통한 실시간 피드백 적용 및 트러블 슈팅\n"+
              "- KAKAO, NAVER SDK 연동을 통한 SNS 로그인 및 공유 기능 개발\n"+
              "- AWS EC2 Linux 인스턴스에 NginX, Jenkins, Docker, 이중화를 통한 배포 자동화 시스템 구축\n"+
              "- 서버 Node의 점유 메모리 분석 및 수정\n"+
              "- Node Inspect와 Chrome dev-tools를 통한 메모리 사용량 분석 및 개선\n"+
              "- Figma툴을 이용한 디자이너와 협업 및 퍼블리싱\n"+
              "- 정기결제(이니시스), 배송조회(스마트택배), 구매확정, 리뷰요청 배치 개발 및 SQL 코드 작성\n"+
              "- DB 구조 개선을 위한 분석 및 설계 (Relation 재정의)",
        result: "IOS 및 AOS 다독 App 배포 및 운영",
        href: [
          {
            title: "블로그글",
            link : "https://blog.naver.com/aquazy/222607093466"
          },
        ]
      },
      {
        id:"TierJ-Daadok-Admin",
        projectType:"신규",
        title:"정기 구독 플랫폼(다독) 판매자, 관리자 렌더링 웹 페이지 개발 프로젝트",
        contribution: "FE & BE : 2명(본인)\n" +
                      "기여도: 50%",
        period: "2021년 7월 ~ 2021년 8월",
        language: "React, Redux, JavaScript, HTML5, TypeScript, GraphQL",
        db: "PostgreSQL",
        management: "Git, Notion, Docker, Jenkins",
        description: "정기구독 플랫폼 (다독) - 렌더링, 판매자, 관리자 웹 페이지 기획 및 개발",
        role: "- 판매자 페이지 ( 상품, 구독, 주문, 결제, 리뷰) 개발\n" +
              "- 관리자 페이지 ( 유저, 판매자, 상품, 쿠폰, 이벤트, 푸쉬 알림, 문의) 개발\n" +
              "- 렌더링 페이지 개발",
        result: "판매자, 관리자, 렌더링 페이지 배포 및 운영",
      },
      {
        id:"TierJ-NewOpen",
        projectType:"신규",
        title:"가오픈 매장 이벤트 쿠폰 발급 서비스 (뉴오픈) 개발",
        contribution: "FE & BE : 2명, 디자이너: 1명\n" +
                      "기여도 : 60%",
        period: "2021년 10월 ~ 2021년 11월",
        language: "React, Redux, JavaScript, HTML5, TypeScript, GraphQL",
        db: "PostgreSQL",
        management: "Git, Notion, Docker, Jenkins",
        description: "가오픈 매장들을 모아 관리해주고 방문 혜택 쿠폰을 발행하여 홍보를 해주는 서비스 개발",
        role: "- App 기획 및 개발, API 개발\n" +
              "- 가게 카테고리 및 지역별 분류 개발\n" +
              "- 가오픈 매장별 쿠폰 다운로드 및 사용\n" +
              "- 매장까지 네이버 지도를 통한 길찾기\n" +
              "- 판매자 페이지(가게정보, 기간별 쿠폰등록, 쿠폰발급내역) 개발",
        result: "가오픈 매장 및 사용자를 모으지 못해 피벗"
      }
    ],
  },
  //LG CNS
  {
    type: "co",
    name: "LG CNS",
    department: "스마트F&C사업부 스마트물류담당 스마트물류솔루션팀",
    startMonth: "2020/01",
    endMonth: "2021/06",
    projectList: [
      {
        id:"CNS-Lotte",
        projectType:"신규",
        title:"롯데마트 스마트/세미다크 스토어 (예약배송, 바로배송) 개발",
        contribution: "PM: 1명, PL: 2명(본인), PE:2명\n" +
                      "기여도: 30%",
        period: "2020년 8월 ~ 2021년 6월",
        language: "C#, Factova, IIS",
        db: "Oracle, MS-SQL",
        management: "Git",
        description: "롯데마트의 스마트스토어(바로배송 + 예약배송 + 픽업)과 세미다크(예약배송 + 픽업)에서 피킹완료부터 출하장까지 분류를 자동화 시스템",
        role: "- 관리자 화면 및 패킹 및 검수 프로그램 개발(WCS)\n"+
              "- 피킹바구니별 매핑 된 상품 리스트 수신\n"+
              "- 주문번호 별 가용 셀에 할당\n"+
              "- 주문번호 별 냉동, 장척, 중량물 배정 및 검수 처리\n"+
              "- 주문 상품별 스캔 후 해당 셀 할당\n"+
              "- 주문 상품별 일괄 등록\n"+
              "- 주문 상품 패킹 Confirm 처리\n"+
              "- 주문셀 별 Full Box 처리 (배송 박스가 가득 차 다음 박스로 셋팅)\n"+
              "- 주문셀 별 Confirm 처리 (물건이 전부 완료됨)\n"+
              "- Interface 통신을 위한 IIS Server 구축 및 인터페이스 생성\n"+
              "- 패킹완료 및 검수 데이터를 상위 시스템(롯데마트)으로 전송을 위한 Batch 프로그램 개발\n"+
              "- WCS 프로그램 배포를 위한 Setup 프로그램 및 업데이트 버전 관리\n"+
              "- DB 셋팅 및 패키지 생성",
        result: "스마트스토어: 광교, 중계, 수원, 강변, 광주 수완점 운영\n" +
                "세미다크 스토어: 잠실, 구리, 판교, 전주, 광주월드컵경기장점 운영\n" +
                "관련기사: https://www.etoday.co.kr/news/view/2039075",
        href: [
          {
            title: "스마트스토어",
            link : "http://biz.newdaily.co.kr/site/data/html/2020/12/18/2020121800058.html"
          },
          {
            title: "세미다크스토어",
            link : "https://www.ekn.kr/web/view.php?key=20210206010001421"
          },
        ]
      },
      {
        id:"CNS-Coupang",
        projectType:"신규/개선",
        title:"쿠팡 신선 및 일반 배송/물류 시스템 자동 분류 소터 시스템 개발",
        period: "2020년 2월 ~ 2020년 8월",
        language: "C#, Factova",
        db: "Oracle, MS-SQL",
        management: "Git",
        description: "쿠팡 물류창고의 컨베이어 소터, 휠소터를 통한 자동 분류 소터 시스템 구축",
        role: "- 관리자 화면 및 물류 분류 관리 프로그램 개발(WCS)\n"+
              "- 바코드 권역 별 분류 소트 지정 및 변경\n"+
              "- 물류 별 분류 현황 및 미분류 현황 관리 개발\n"+
              "- 설비(PLC)와 소켓통신 하는 ECS 서버 개발\n"+
              "- 설비 장비들(인덕션, 컨베이어, 휠, 슈트, 라벨프린터)의 상태와 정보 실시간 모니터링 SCADA 프로그램 개발\n"+
              "- DB 셋팅 및 패키지 생성",
        result: "쿠팡 물류센터 (부천1, 부천2, 고양)의 자동 분류 소터 적용"
      }],
  },
  //GS ITM
  {
    type: "co",
    name: "GS ITM",
    startMonth: "2018/03",
    endMonth: "2019/12",
    department: " 커머스사업센터 LF팀",
    projectList: [
      {
        id:"ITM-Brandmall",
        projectType:"신규",
        title:"LF Mall 브랜드몰 구축(마에스트로, 헤지스, 블루라운지, 라푸마) 프로젝트",
        period: "2019년 5월 ~ 2019년 12월",
        contritubtion: "PM: 1명, PL: 2명, PE: 2명(본인), 퍼블리셔: 1명\n"+
                        "기여도: 30%",
        language: "Spring boot(1.3.5.RELEASE), JAVA, JavaScript, HTML5",
        db: "ORACLE(MyBatis)",
        management: "Git, Jenkins, Jira",
        description: "각 브랜드의 사이트들을 분석하여 결제 및 주문 페이지와 같은 공통 부분과 각 브랜드 사이트의 전시 및 상품 페이지를 분리하여 하나의 프로젝트로 통합 및 구축",
        role: "- LFMall 상품상세, 결제, 장바구니 페이지 병합\n" +
              "- API별 브랜드 이름 파라미터 추가\n" +
              "- 브랜드별 메인 페이지, Magazine\n" +
              "- 브랜드몰용 공용 DB 설계(Magazine, Content, Product, Menu)",
        result: "MAEMAESTRO, BLUEROUNGE, HAZZYS, LAFUMA 브랜드의 ADMIN, PWEB, MWEB 사이트 배포 및 운영"
      },
      {
        id:"ITM-NBOS",
        projectType:"구조개선",
        title:"LFMall SBOS 어드민 구조개선",
        period: "2018년 07월 ~ 2019년 05월",
        contribution: "PM: 1명, PL: 7명, PE: 2명(본인), 퍼블리셔: 1명\n"+
                      "기여도: 20%",
        language: "Spring boot(1.3.5.RELEASE), JAVA, JavaScript, Nexacro17",
        db: "Oracle(mybatis)",
        management: "Git, Jenkins, Jira",
        description: "기존 struts, wise-grid, Oracle(ibatis)의 구조에서 Spring boot, Nexacro, Oracle(mybatis)의 구조로 개선 및 추가 관리자 페이지 구축, 기존 DB의 내부 Query와 프로시저 개선",
        role: "- 상품관리(품절관리, ep문구 관리, 벤더별 판매 비율, 촬영관리 )\n" +
              "- 주문배송(입점사 미발주 목록, 배송지연목록, 물류비고관리)\n" +
              "- 회원 프로모션(판매예약관리, 오늘만 특가관리, 선 포인트제한, 무이자할부카드, 외부제공링크)\n" +
              "- 영업(입점업체신청관리, 입점업체관리, 입점업체출고처관리)\n" +
              "- 정산(직속매장수수료관리, 제휴사 정산관리, 상품대금비교)\n" +
              "- 게시판(내부공지, 외부공지)\n" +
              "- 고객추천지수 (고객상담센터, 고객만족도, AS)\n" +
              "- 기존 LF MALL의 운영 업무의 수행과 조건을 이해하고 구축\n" +
              "- 기존 DB Query의 내부 Query 및 속도 개선\n" +
              "- 기존 DB의 프로시저를 정리하여 가능한 부분을 JAVA로 전환",
        result: "LFMall 관리자 페이지 NBOS 배포 및 운영"
      },],
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
        contribution: "PM:1명\n"+
                      "기여도100%",
        language: "QT, C++, QML, Rabbit MQ",
        db: "Oracle",
        management: "Git",
        description: "사내 SMART CITY 프로그램에 사용자와 관리자의 통신을 위한 메신저 프로그램",
        role: "- RABBIT MQ 서버를 통한 메시지 QUEUE 설계, 개발\n" +
              "- RABBIT MQ 서버의 ROUTE KEY를 통한 Publish, Subscribe 구축\n" +
              "- C++과 QML을 이용한 메신저 프로그램 개발\n" +
              "- 사용자 메시지와 ROUTE KEY, 친구목록을 저장할 DATABASE 설계",
        result: "사내 SMART CITY 내 메신저 프로그램 연동"
      }
    ],
  },
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
        contribution: "팀원:4명\n"+
                      "기여도: 35%",
        period: "2017년 09월 ~ 2017년 12월",
        language: "Android Studio, PHP",
        db: "Oracle, FireBase DB",
        management: "Git",
        description: "각 점포 별로 배부된 NFC 태그를 테이블마다 두어 핸드폰 어플로 테이블의 NFC 태그를 접촉하여 주문 및 다른 테이블로 메시지를 보낼 수 있는 시스템",
        role: "- POS 애플리케이션 개발(주문 확인, 메뉴 수정, 테이블별 정보)\n" +
              "- POS기와 주문 APP의 FIREBASE DB 연동\n" +
              "- POS기와 주문 APP 사이의 실시간 주문 및 데이터 통신을 위한 FIREBASE DB 구축\n" +
              "- Oracle과 Firebase db의 동시 사용을 위한 쓰레드와 플래그를 통한 순서별 처리\n" +
              "- 사용자 정보와 주문 정보를 ORACLE에 저장하여 솔루션을 위한 데이터 축척"
      }
    ],
  },
  {
    type: "personal",
    name: "개인",
    department: "프로젝트",
    projectList: [
      {
        id:"IS-Telegram",
        projectType:"개인",
        title:"가상화폐 거래(지갑/토큰) 분석 텔레그램 챗봇",
        contribution: "기여도: 100%",
        period: "2020년 5월 ~ 2020년 7월",
        language: "C#, Telegram Chatbot",
        db: "Oracle",
        management: "Git",
        git: "https://github.com/Leeinseong/telegramAPI",
        description: "Etherscan API를 통해 지정한 특정 지갑 또는 코인의 이동을 분석하고 설정한 조건에 맞는 Transaction 정보를 Telegram ChatBot을 통해 실시간으로 알려주는 프로그램",
        role: "EtherScan API 분석\n" +
              "지갑주소 생성/수정/삭제 기능 개발\n"+
              "원하는 조건의 지갑이동 확인 메시지 개발"
      },
      {
        id:"IS-Portfolio",
        projectType:"개인",
        title:"개발자 포토폴리와 깃허브 페이지",
        period: "2021년 1월 ~ 2021년 2월",
        contribution: "기여도: 100%",
        language: "React, JavaScript, HTML5",
        db: "Oracle",
        management: "Git",
        git: "https://github.com/Leeinseong/LeeInSeong.github.io",
        description: "React를 이용하여 구현한 개발자 Portfolio 반응형 웹페이지",
        role: "React 페이지 개발"
      }
    ],
  },
];
