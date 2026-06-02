export const portfolio = {
  name: "김진경",
  nameEn: "JINKYUNG KIM",
  title: "REAL ESTATE & SPACE VALUE STRATEGIST",
  subtitle: "WHO UNDERSTANDS ARCHITECTURE AND CITIES",
  contact: {
    phone: "010-1234-1234",
    email: "jinkyung.kim@example.com",
    website: "www.jinkyung-space.com",
    location: "Seoul, South Korea",
  },
  intro:
    "안녕하세요, 김진경입니다. 건축과 도시의 맥락을 바탕으로 부동산과 공간의 잠재 가치를 분석하고 전략화하는 공간 가치전략가입니다. 물리적 공간, 입지, 사용자 경험, 시장 흐름을 통합적으로 해석하여 지속 가능한 자산 가치와 브랜드 경험을 설계합니다.",
  philosophy:
    "데이터와 현장 관찰을 균형 있게 활용하며, 공간이 가진 사회적 의미와 경제적 가능성을 함께 바라봅니다. 다양한 이해관계자와의 협업을 통해 복잡한 도시·부동산 문제를 구조화하고 실행 가능한 전략으로 전환합니다.",
  work: [
    {
      company: "Urban Value Lab",
      period: "2023/03 - 2026/05",
      role: "Senior Space Value Strategist",
      description:
        "도시 구조, 입지 경쟁력, 상권 변화, 건축적 특성을 종합적으로 분석하여 부동산 개발 및 리브랜딩 전략을 수립했습니다. 복합문화공간, 리테일 자산, 주거 프로젝트의 시장성을 검토하고, 공간 콘셉트와 수익 모델을 연결하는 전략 보고서를 작성했습니다.",
      tags: ["부동산 전략", "리브랜딩", "입지 분석"],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      company: "Space Insight Partners",
      period: "2020/07 - 2023/02",
      role: "Real Estate Strategy Consultant",
      description:
        "상업용 부동산과 도시 재생 프로젝트를 중심으로 입지 분석, 타깃 고객 정의, 공간 프로그램 기획 업무를 수행했습니다. 건축 도면과 도시계획 자료를 해석하여 자산의 강점과 리스크를 도출했습니다.",
      tags: ["도시 재생", "입지 분석", "공간 프로그램"],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    },
    {
      company: "Cityform Research Studio",
      period: "2018/01 - 2020/06",
      role: "Urban Research Associate",
      description:
        "도시 공간 변화와 부동산 트렌드를 조사하며 지역별 개발 가능성과 공간 사용 패턴을 분석했습니다. 현장 리서치, 사용자 인터뷰, 공공 데이터 분석을 통해 도시의 흐름을 읽었습니다.",
      tags: ["도시 리서치", "공공 데이터", "현장 조사"],
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    },
  ],
  skills: [
    {
      title: "Real Estate Market Analysis",
      description:
        "Interpreting market trends, supply and demand, and pricing through data and field observation to inform investment and development decisions.",
      items: [
        "Market trend analysis",
        "Feasibility review",
        "Competitive site comparison",
        "Risk assessment",
      ],
    },
    {
      title: "Spatial Value Strategy",
      description:
        "Connecting architectural and urban context with brand experience to shape spatial potential into actionable strategies.",
      items: [
        "Spatial concept planning",
        "Rebranding strategy",
        "Revenue model alignment",
        "Stakeholder collaboration",
      ],
    },
    {
      title: "Site & Retail Analysis",
      description:
        "Evaluating location competitiveness and commercial potential through retail dynamics, accessibility, and surrounding development.",
      items: [
        "Retail district research",
        "Accessibility analysis",
        "Target customer definition",
        "Program planning",
      ],
    },
    {
      title: "Architecture & Urban Design",
      description:
        "Translating spatial strategy into design language through drafting, 3D visualization, and urban planning documentation.",
      items: [
        "Architectural drafting",
        "3D modeling",
        "Urban plan interpretation",
        "Visualization",
      ],
    },
  ],
  skillLevels: [
    { name: "Real Estate Market Analysis", level: 5 },
    { name: "Spatial Value Strategy", level: 5 },
    { name: "Site & Retail Analysis", level: 4 },
    { name: "Architectural Drafting", level: 4 },
    { name: "3D Modeling & Visualization", level: 4 },
    { name: "Urban Planning & Design", level: 4 },
  ],
  education: [
    {
      degree: "Master of Urban Planning and Real Estate",
      university: "서울대학교",
      major: "도시계획 및 부동산학",
      period: "2018/03 - 2020/02",
    },
    {
      degree: "Bachelor of Architecture",
      university: "서울대학교",
      major: "건축학",
      period: "2013/03 - 2018/02",
    },
  ],
  languages: [
    { name: "Korean", level: 5 },
    { name: "English", level: 4 },
  ],
  aboutHighlight:
    "건축을 공부하고 도시를 연구하며, 공간이 사람과 도시에 남기는 가치를 전략으로 풀어내는 일을 하고 있습니다.",
  aboutStatement:
    "매일 조금 더 아름답고 지속 가능한 도시와 공간을 만들기 위해 노력합니다.",
} as const;
