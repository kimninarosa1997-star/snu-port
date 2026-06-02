# docs/content.md

> **파서 규칙:** `scripts/sync-content.ts`는 `<!-- @section:* -->`, `<!-- @id:* -->`, `<!-- @slug:* -->` HTML 주석을 힌트로 사용한다. 상세는 `docs/tech-stack.md` §5.2.

<!-- @section:meta -->
## 1. Basic Information / 기본 정보
<!-- fields: name, nameKr, position, positionKr, keywords, targetAudience, tone, oneLineKr, oneLineEn -->

| 항목 | 내용 |
|---|---|
| Name | Jinkyung Kim |
| 이름 | 김진경 |
| Position | Urban Environmental Design Researcher, Architectural & Urban Designer |
| 직무/포지션 | 도시환경설계 연구자, 건축·도시설계 디자이너 |
| Site Purpose | Personal Branding, Project Archive |
| 사이트 사용 목적 | 개인 브랜딩용, 프로젝트 아카이브용 |
| Keywords | Urban Environmental Design, Architecture, Masterplan, Urban Data, Public Space, Climate Resilience |
| 핵심 키워드 | 도시환경설계, 건축설계, 마스터플랜, 도시 데이터, 유휴부지 재생, 공공공간, 기후·도시 안전 |
| Target Audience | Urban and architectural design professionals, researchers, collaborators, portfolio visitors |
| 타깃 독자 | 도시·건축설계 실무자, 연구자, 협업 파트너, 개인 브랜딩 방문자 |
| Tone & Manner | Professional, Minimal, Engaging |
| 톤앤매너 | 전문적으로, 미니멀하게, 흥미롭게 |
| One-line Identity | 도시를 읽는 설계자 |
| One-line Identity EN | A Designer Who Reads Cities |

---

## 2. Content Inventory / 콘텐츠 인벤토리

### Required / 필수

| ID | Category | Item | Content |
|---|---|---|---|
| C-REQ-001 | Required | Photo | Portfolio profile image available |
| C-REQ-002 | Required | Contact | Email: kimninarosa97@naver.com / Phone: Private / GitHub: Private / LinkedIn: Private |
| C-REQ-003 | Required | Education | Dankook University, Architecture (Bachelor), 2016/03 ~ 2021/02 |
| C-REQ-004 | Required | Current Education | Seoul National University Graduate School of Environmental Studies — see C-EXP-004, 2025/03 ~ Present |

### Recommended / 권장

| ID | Category | Item | Content |
|---|---|---|---|
| C-REC-001 | Recommended | Introduction KR | 김진경은 건축설계 실무와 도시환경 연구를 연결하는 도시·건축설계 디자이너입니다. 대형 캠퍼스 마스터플랜, 사옥 설계, 도시 데이터 연구 경험을 바탕으로 도시와 공간이 사람의 삶에 미치는 영향을 탐구합니다. |
| C-REC-002 | Recommended | Introduction EN | Jinkyung Kim is an architectural and urban designer who connects professional design practice with urban environmental research. Her work explores how architecture, urban systems, and public environments shape everyday life. |
| C-REC-003 | Recommended | Work Experience | 간삼종합건축사사무소, 건축설계 및 마스터플랜, 2020/10 ~ 2024/02 |
| C-REC-004 | Recommended | Research Experience | 도시 및 건축 데이터 연구, 설계 평가 연구, 논문 작성, 국제학술대회 발표, 연구비 정산 업무 수행 |
| C-REC-005 | Recommended | Projects | 삼성전자 평택캠퍼스 마스터플랜, 삼성전자 수원 디지털시티 R&D Cluster / HeadQuarter R7, SD Biosensor 광교 사옥 현상설계, K-스포츠 아카데미 운영 방안 수립 용역 |

### Optional / 선택

| ID | Category | Item | Content |
|---|---|---|---|
| C-OPT-001 | Optional | SNS | Instagram: To be added later |
| C-OPT-002 | Optional | Languages | Korean, English |
| C-OPT-003 | Optional | Awards | 안양시 건축문화상 장려상, 제주시 건축문화상 특선, 전국 공중화장실 공모전 격려상, 경기건축문화상 계획부문 입선, 성적 최우등상 |
| C-OPT-004 | Optional | Courses | BIM 실무과정, 3D Printer 교육 및 실습, University of Victoria English Language Centre |
| C-OPT-005 | Optional | Skills | Rhino, Grasshopper, Revit, AutoCAD, V-Ray, QGIS, Photoshop, Illustrator, InDesign, Python, BIM |
| C-OPT-006 | Optional | Interests | 도시환경설계, 유휴부지 재생, 도시 빅데이터, 기후재난 예측, 공공공간, 도시 안전 가이드라인 |

---

## 3. Website Section Mapping / 웹 섹션 재매핑

| Section | Content IDs | Purpose | Display Content |
|---|---|---|---|
| Hero | §4 One-line·Supporting Copy, C-REQ-001 | 정체성·첫인상 | Oswald 스택 + 중앙 프로필 + Playfair tagline |
| Projects | C-REC-005, C-PROJ-001~007 | 대표 산출물 + 대학 프로젝트 | floating cards → `/projects/[slug]` |
| Skills | C-SKL-* | 역량 | band-light 4열 |
| About | C-REQ-001, C-REC-001~002, C-STR-*, C-INT-*, C-EDU-001 | 신뢰·배경 | band-muted editorial + KIRA 자격 |
| Experience | C-REC-003, C-REC-004, C-EXP-001~003, C-CERT-001~003 | 경력과 검증 이력 제시 | 실무·연구 타임라인, 교육 |
| Archive | §14 Introduction, C-ARC-001~007 | 사고의 확장·지속 학습 기록 | 아카이브 타임라인 7건 |
| Contact | C-REQ-002, C-CON-001~006, C-OPT-001 | 협업과 네트워킹 유도 | Contact Copy, 이메일(mailto), SNS(준비 중) |

---

<!-- @section:hero -->
## 4. Hero
<!-- @fields: oneLineKr, oneLineEn, supportingKr, supportingEn, ctaPrimary, ctaSecondary -->

### One-line Introduction / 한 줄 소개

도시를 읽는 설계자

### One-line Introduction EN

A Designer Who Reads Cities

### Supporting Copy / 보조 문구

Jinkyung Kim은 건축설계 실무와 도시환경 연구를 바탕으로, 도시가 사람의 삶에 미치는 영향을 탐구하는 디자이너입니다. 대형 캠퍼스 마스터플랜부터 유휴부지 재생, 도시 데이터 기반 연구까지 건축과 도시의 경계를 넓혀가고 있습니다.

### Supporting Copy EN

Jinkyung Kim explores how cities, architecture, and environmental systems shape the way people live. Her work spans campus masterplans, workplace design, urban data research, and public space strategies.

### CTA Button Candidates / CTA 버튼 후보

| No. | Button Text |
|---|---|
| 1 | Projects |
| 2 | Archive |
| 3 | Contact |

> **CTA 채택 (v1):** 후보 #1 `Projects` → `#projects` (Primary), #3 `Contact` → `#contact` (Secondary). 후보 #2 Archive는 Nav·스크롤로 접근 — Hero CTA 미사용 (`ia-wireframe.md` §5.2, `prd.md` FR-10).

---

<!-- @section:about -->
## 5. About

### About KR

김진경은 건축설계 실무와 도시환경 연구를 연결하는 도시·건축설계 디자이너입니다.  
간삼종합건축사사무소에서 삼성전자 캠퍼스 마스터플랜과 사옥 프로젝트를 수행하며, 건축이 도시, 교통, 조경, 동선, 공공환경과 분리될 수 없다는 점을 경험했습니다.  
현재는 유휴부지 재생, 기후재난 대응, 도시 안전, 공공공간 개선을 주제로 도시를 더 넓은 시선에서 읽고 기록하고 있습니다.

### About EN

Jinkyung Kim is an architectural and urban designer working between design practice and urban environmental research.  
Through large-scale campus masterplans and headquarters projects, she experienced how architecture is deeply connected to mobility, landscape, circulation, and public environments.  
Her current interests focus on urban regeneration, climate resilience, urban safety, and public space strategies.

### Minimal Version KR

건축을 기반으로 도시를 연구합니다.  
사람의 삶을 바꾸는 환경과 공간의 가능성을 기록합니다.

### Minimal Version EN

I study cities through architecture.  
This archive records the possibilities of space, environment, and everyday life.

---

<!-- @section:brand -->
## 6. Brand Statement / 브랜드 문장

> **Hero v1:** Core Message KR/EN은 Hero 본문에 **표시하지 않음** (§4 Supporting Copy와 의미 중복). Footer(§19)·PRD §1.3·OG description 인용용.

| Category | Content |
|---|---|
| Core Message KR | 건축을 통해 도시를 보고, 도시를 통해 삶의 환경을 다시 생각합니다. |
| Core Message EN | Reading cities through architecture, rethinking environments through urban life. |
| Brand Keywords | Urban, Architecture, Research, Data, Environment, Archive |
| Site Mood | Minimal, Clear, Professional, Curious |
| Visitor Impression | 전문성은 분명하지만 무겁지 않고, 프로젝트를 따라가며 사고의 흐름이 보이는 사이트 |

---

## 7. Strengths / 핵심 강점

| ID | Strength | Description KR | Description EN |
|---|---|---|---|
| C-STR-001 | Urban Perspective | 대형 캠퍼스 마스터플랜 경험을 통해 건축물뿐 아니라 교통, 조경, 동선, 휴게공간, 도시계획의 중요성을 이해하고 있습니다. | Understands architecture as part of a wider urban system, including mobility, landscape, circulation, and public space. |
| C-STR-002 | Design & Visualization | Rhino, Revit, BIM, 렌더링, 3D 모델링, 그래픽 툴을 활용해 복잡한 설계 아이디어를 명확한 시각 자료로 구현할 수 있습니다. | Translates complex design ideas into clear visual materials through modeling, BIM, rendering, and graphic communication. |
| C-STR-003 | Research-based Practice | 도시 데이터, 머신러닝, 설계 평가, 국제학술대회 발표 경험을 바탕으로 감각적 설계와 분석적 사고를 함께 발전시키고 있습니다. | Connects design intuition with analytical research through urban data, design evaluation, and academic presentation experience. |

---

## 8. Credentials / 자격

| ID | Institution | Major | Degree | Period | Note |
|---|---|---|---|---|---|
| C-EDU-001 | 대한건축사협회 (KIRA) | 건축사 / Registered Architect | 자격 / License | — | 대한민국 건축사 등록 · Professional architect registration, Republic of Korea |

---

<!-- @section:projects -->
## 9. Projects / 프로젝트

## Project 01. Samsung Electronics Pyeongtaek Campus Masterplan
<!-- @id: C-PROJ-001 -->
<!-- @slug: samsung-pyeongtaek-campus-masterplan -->

| Item | Content |
|---|---|
| ID | C-PROJ-001 |
| Project KR | 삼성전자 평택캠퍼스 마스터플랜 |
| Project EN | Samsung Electronics Pyeongtaek Campus Masterplan |
| Period | 2020/10 ~ 2022/01 |
| Organization | Gansam Architects & Partners |
| Role | 기획설계, 계획설계, 마스터플랜 지원 |
| Keywords | Campus Masterplan, Industrial Complex, Landscape, Circulation, Workplace |
| Tools | CAD, 3D Modeling, BIM, Diagram, Presentation |
| Cover Image | /images/projects/c-proj-001.png |
| Summary KR | 대규모 산업단지를 하나의 도시처럼 바라보고, 업무환경과 보행·조경·커뮤니티 공간을 통합적으로 계획한 프로젝트입니다. |
| Summary EN | A campus masterplan project that approached a large industrial complex as an urban environment, integrating workplace, circulation, landscape, and community spaces. |
| Result | 약 1년 3개월 수행, 포트폴리오 기준 5개 이상 세부 존 계획 정리 |

### Problem → Solution → Result

- Problem KR: 대규모 산업단지 안에서 업무시설, 생산시설, 공원, 보행동선, 차량동선이 복합적으로 얽혀 있었습니다. 건물 단위의 설계만으로는 임직원에게 좋은 환경을 제공하기 어려웠습니다.
- Solution KR: 캠퍼스 전체를 하나의 도시로 보고, 주요 보행축과 조경, 업무지원시설, 커뮤니티 공간, 주차 체계를 함께 검토했습니다.
- Result KR: 캠퍼스의 연결성과 업무환경을 높이는 마스터플랜 방향을 제안했으며, 건축과 도시계획의 관계를 실무적으로 이해하는 계기가 되었습니다.
- Problem EN: The campus required more than individual building design, as workplace, production, landscape, pedestrian flow, and vehicle circulation were closely intertwined.
- Solution EN: The project examined the campus as an urban system, integrating pedestrian axes, landscape, support facilities, community areas, and parking strategies.
- Result EN: The project strengthened the campus’s spatial connectivity and provided practical experience in the relationship between architecture and urban planning.

---

## Project 02. Samsung Electronics Suwon Digital City R&D Cluster / HeadQuarter R7
<!-- @id: C-PROJ-002 -->
<!-- @slug: samsung-suwon-digital-city-rd-cluster-headquarter-r7 -->

| Item | Content |
|---|---|
| ID | C-PROJ-002 |
| Project KR | 삼성전자 수원 디지털시티 R&D Cluster / HeadQuarter R7 |
| Project EN | Samsung Electronics Suwon Digital City R&D Cluster / HeadQuarter R7 |
| Period | 2022/01 ~ 2023/09 |
| Organization | Gansam Architects & Partners |
| Role | 기획설계, 계획설계 |
| Keywords | R&D Campus, Headquarters, Workplace, Masterplan, Future Office |
| Tools | CAD, 3D Modeling, Diagram, Rendering, Presentation |
| Cover Image | /images/projects/c-proj-002.png |
| Summary KR | 기존 캠퍼스 맥락 안에서 연구, 협업, 휴식, 이동이 자연스럽게 연결되는 미래형 업무환경을 계획한 프로젝트입니다. |
| Summary EN | A future workplace project that connected research, collaboration, rest, and movement within an existing campus context. |
| Result | 약 1년 8개월 수행, R&D Cluster 및 HeadQuarter R7 등 복수 프로젝트 참여 |

### Problem → Solution → Result

- Problem KR: 기존 캠퍼스 안에 새로운 R&D 업무환경과 본사 기능을 담아야 했습니다. 단순한 사무공간이 아니라 연구와 협업, 휴식이 이어지는 공간 체계가 필요했습니다.
- Solution KR: Garden, Square, Park 개념을 바탕으로 R&D 유닛과 블록, 클러스터를 구성하고 업무공간과 외부공간의 관계를 검토했습니다.
- Result KR: 대규모 업무시설에서 공간 경험과 도시적 연결성을 함께 고려하는 설계 경험을 축적했습니다.
- Problem EN: The project needed to integrate new R&D and headquarters functions into an existing campus.
- Solution EN: The design explored R&D units, blocks, and clusters through the concepts of Garden, Square, and Park.
- Result EN: The project built experience in planning large-scale workplace environments with both spatial quality and urban connectivity.

---

## Project 03. SD Biosensor Gwanggyo Headquarters Competition
<!-- @id: C-PROJ-003 -->
<!-- @slug: sd-biosensor-gwanggyo-headquarters-competition -->

| Item | Content |
|---|---|
| ID | C-PROJ-003 |
| Project KR | SD Biosensor 광교 사옥 현상설계 |
| Project EN | SD Biosensor Gwanggyo Headquarters Competition |
| Period | 2022/03 ~ 2022/04 |
| Organization | Gansam Architects & Partners |
| Role | 현상설계 참여 |
| Keywords | Headquarters, R&D, Creative Office, Community, Green |
| Tools | Mass Study, Diagram, 3D Modeling, Rendering, Presentation |
| Cover Image | /images/projects/c-proj-003.png |
| Summary KR | 기업의 정체성과 창의적인 업무문화를 공간으로 구현하기 위한 사옥 현상설계 프로젝트입니다. |
| Summary EN | A headquarters competition project exploring how corporate identity and creative work culture can be translated into space. |
| Result | 약 2개월 현상설계 수행 |

### Problem → Solution → Result

- Problem KR: 기업의 성장성과 연구 중심의 정체성을 담으면서도 구성원이 머물고 소통할 수 있는 사옥 공간이 필요했습니다.
- Solution KR: Think, Play, Talk, Green이라는 개념을 중심으로 업무, 커뮤니티, 휴식, 녹지 프로그램을 입체적으로 구성했습니다.
- Result KR: 짧은 기간 안에 개념, 조닝, 다이어그램, 공간 이미지를 압축적으로 정리하며 현상설계 대응 역량을 강화했습니다.
- Problem EN: The headquarters needed to express the company’s research-driven identity while supporting communication and everyday work culture.
- Solution EN: The design organized office, community, rest, and green programs around the concepts of Think, Play, Talk, and Green.
- Result EN: The project strengthened the ability to quickly structure concepts, zoning, diagrams, and spatial images for a design competition.

---

## Project 04. K-Sports Academy Operation Strategy
<!-- @id: C-PROJ-004 -->
<!-- @slug: k-sports-academy-operation-strategy -->

| Item | Content |
|---|---|
| ID | C-PROJ-004 |
| Project KR | K-스포츠 아카데미 운영 방안 수립 용역 |
| Project EN | K-Sports Academy Operation Strategy |
| Period | 2025/11 ~ 2026/08 |
| Institution | Seoul National University |
| Role | Research Assistant |
| Keywords | Sports Academy, Operation Strategy, Education Program, Public Project, Research Support |
| Tools | 자료조사, 사례 검토, 운영계획 정리, 문서 작성, 보고서 작성 지원 |
| Cover Image | /images/projects/c-proj-004.png |
| Summary KR | K-스포츠 아카데미의 운영 체계와 실행 방안을 수립하기 위한 연구·운영 지원 프로젝트입니다. |
| Summary EN | A research and operation support project for establishing the operation strategy of the K-Sports Academy. |
| Result | 총 10개월 예정 |

### Problem → Solution → Result

- Problem KR: K-스포츠 아카데미가 안정적으로 운영되기 위해서는 교육 프로그램뿐 아니라 운영 구조, 참여 대상, 실행 일정, 관리 방식에 대한 구체적인 계획이 필요했습니다.
- Solution KR: 서울대학교가 수행하는 운영 방안 수립 용역에 보조원으로 참여해 자료 조사, 사례 검토, 문서 정리, 보고서 작성 지원 업무를 수행합니다.
- Result KR: 2025/11부터 2026/08까지 진행 예정인 최근 프로젝트로, 운영 체계 수립을 위한 기초 자료와 실행 방안 정리에 기여할 예정입니다.
- Problem EN: The academy required a clear operation strategy beyond curriculum planning, including structure, target users, schedule, and management system.
- Solution EN: As a research assistant, the work supports case studies, document organization, and report preparation.
- Result EN: The project contributes to building foundational materials and practical strategies for the academy’s operation.

---

## Project 05. Ttobagi Healing Center
<!-- @id: C-PROJ-005 -->
<!-- @slug: downtown-vacant-lot-regeneration-studio -->

| Item | Content |
|---|---|
| ID | C-PROJ-005 |
| Scale | student |
| Project KR | 또바기 치유소 |
| Project EN | Ttobagi Healing Center |
| Period | 2019/03 ~ 2019/06 |
| Organization | Dankook University · Architecture Studio |
| Role | 설계 스튜디오 |
| Keywords | Urban Regeneration, Vacant Lot, Public Space, Studio |
| Tools | Rhino, AutoCAD, Photoshop, Physical Model |
| Cover Image | /images/projects/c-proj-stu-001.png |
| Summary KR | 도심 속 방치된 부지를 공공성과 일상성을 회복하는 공간으로 재해석한 학부 스튜디오 프로젝트입니다. |
| Summary EN | An undergraduate studio project reimagining an abandoned downtown parcel as everyday public space. |
| Result | 학부 설계 스튜디오 우수작 선정 |

### Problem → Solution → Result

- Problem KR: 도심 유휴 부지가 주변 거리와 단절되어 보행과 커뮤니티 활동이 약화되어 있었습니다.
- Solution KR: 보행축, 소규모 공원, 커뮤니티 프로그램을 연결하는 재생 전략을 제안했습니다.
- Result KR: 부지의 공공성과 주변 맥락을 연결하는 설계 대안을 정리했습니다.
- Problem EN: The vacant lot was disconnected from surrounding streets and daily activity.
- Solution EN: The proposal linked pedestrian routes, small parks, and community programs.
- Result EN: The studio deliverable articulated a regeneration strategy grounded in local context.

---

## Project 06. Rooftop Hanuibaram House
<!-- @id: C-PROJ-006 -->
<!-- @slug: hillside-housing-community-studio -->

| Item | Content |
|---|---|
| ID | C-PROJ-006 |
| Scale | student |
| Project KR | 옥탑방 하늬바람집 |
| Project EN | Rooftop Hanuibaram House |
| Period | 2018/09 ~ 2018/12 |
| Organization | Dankook University · Architecture Studio |
| Role | 설계 스튜디오 |
| Keywords | Housing, Community, Topography, Courtyard |
| Tools | Rhino, Revit, V-Ray, Diagram |
| Cover Image | /images/projects/c-proj-stu-002.png |
| Summary KR | 경사지를 활용해 공동주택과 마당·보행체계를 결합한 주거 공동체를 설계한 프로젝트입니다. |
| Summary EN | A studio project combining hillside housing with courtyards and pedestrian circulation. |
| Result | 주거·공용·조경을 통합한 공동체형 주거안 제안 |

### Problem → Solution → Result

- Problem KR: 경사지 입지에서 주거 밀도와 공용 공간, 보행 접근성을 동시에 확보하기 어려웠습니다.
- Solution KR: 단계형 동선과 중정, 공용 마당을 중심으로 주거 블록을 배치했습니다.
- Result KR: 지형을 활용한 공동체형 주거 구조를 제안했습니다.
- Problem EN: The hillside site made it difficult to balance density, shared space, and walkability.
- Solution EN: Stepped circulation, courtyards, and shared yards organized the housing blocks.
- Result EN: The project proposed a community-oriented housing structure adapted to topography.

---

## Project 07. Living in a Monument
<!-- @id: C-PROJ-007 -->
<!-- @slug: riverside-cultural-pavilion-studio -->

| Item | Content |
|---|---|
| ID | C-PROJ-007 |
| Scale | student |
| Project KR | Living in a Monument |
| Project EN | Living in a Monument |
| Period | 2020/03 ~ 2020/06 |
| Organization | Dankook University · Architecture Studio |
| Role | 설계 스튜디오 |
| Keywords | Pavilion, Riverside, Culture, Landscape |
| Tools | Rhino, Grasshopper, Illustrator, Model |
| Cover Image | /images/projects/c-proj-stu-003.png |
| Summary KR | 하천과 도시의 경계에 문화·휴게 프로그램을 담은 소규모 파빌리온을 설계한 프로젝트입니다. |
| Summary EN | A studio project designing a small pavilion for culture and rest along an urban riverfront. |
| Result | 하천 경관과 도시 프로그램을 연결하는 파빌리온 제안 |

### Problem → Solution → Result

- Problem KR: 하천변 공간이 경관 자원은 풍부하지만, 시민이 머무를 수 있는 프로그램이 부족했습니다.
- Solution KR: 경관을 따라 이어지는 파빌리온과 개방형 플랫폼을 제안했습니다.
- Result KR: 하천과 도시 생활을 잇는 소규모 문화·휴게 거점을 설계했습니다.
- Problem EN: The riverfront had strong landscape value but lacked programs for staying and gathering.
- Solution EN: A pavilion and open platforms were proposed along the river edge.
- Result EN: The design offered a small cultural and resting node connecting river and city life.

---

<!-- @section:experience -->
## 10. Experience / 경력

| ID | Organization | Role | Period | Problem | Solution | Result |
|---|---|---|---|---|---|---|
| C-EXP-004 | Seoul National University Graduate School of Environmental Studies / 서울대학교 환경대학원 | Environmental Design · Master's (in progress) / 환경디자인 석사 재학 | 2025/03 ~ Present | 도시·건축·환경을 연결하는 학술적 기반이 필요했습니다. | 환경디자인 석사 과정에서 도시 재생, 공공공간, 환경 설계를 탐구합니다. | 현재 재학 중 · Currently pursuing a master's degree in environmental design |
| C-EXP-001 | Gansam Architects & Partners / 간삼종합건축사사무소 | Architectural Design, Masterplan, Headquarters Design | 2020/10 ~ 2024/02 | 대규모 캠퍼스와 사옥 프로젝트에서 건축, 도시, 조경, 교통, 업무환경을 통합적으로 검토해야 했습니다. | 삼성전자 평택캠퍼스, 수원 디지털시티, 광교 사옥 등 복수 프로젝트에서 기획·계획·실시설계 업무를 수행했습니다. | 약 3년 4개월 동안 대형 업무시설과 캠퍼스 프로젝트를 경험하며 실무 설계 역량을 축적했습니다. |
| C-EXP-002 | Academic Research Experience / 학부 연구생 | Research, Analysis, Paper Writing, Administration | 2018/12 ~ 2020/01 | 건축설계 평가와 도시·건축 데이터를 연구하기 위해 설계와 데이터 분석을 연결하는 접근이 필요했습니다. | Machine Learning Based Urban Data Model and Visualization Platform 등 연구개발, 논문 작성, 국제학술대회 발표, 연구비 정산을 수행했습니다. | 프랑스 INTE 2018 국제학술대회에서 Crowdsourced Design Evaluation Methodology 관련 발표를 진행했습니다. |
| C-EXP-003 | CASE Architects / CASE 건축사무소 | Internship, Model Making, 3D Printer Support | 2017/08 ~ 2017/09, 2019 | 건축설계 과정에서 클라이언트와 팀이 공간을 직관적으로 이해할 수 있는 모형과 시각자료가 필요했습니다. | 3D Printer를 활용한 모형 제작과 3D 모델링, 도면 작성 업무를 수행했습니다. | 설계안을 물리적·시각적으로 전달하는 제작 역량을 강화했습니다. |

---

<!-- @section:skills -->
## 11. Skills / 보유기술

### Design & Modeling

| ID | Skill | Description KR | Description EN |
|---|---|---|---|
| C-SKL-001 | Rhino | 복잡한 형태와 도시·건축 매스를 빠르게 모델링하고 설계안을 검토합니다. | Used for architectural massing, urban modeling, and design studies. |
| C-SKL-002 | Grasshopper | 파라메트릭 모델링과 설계 대안 검토에 활용합니다. | Used for parametric modeling and iterative design exploration. |
| C-SKL-003 | Revit | BIM 기반 설계와 도면화 과정에 활용합니다. | Used for BIM-based design development and documentation. |
| C-SKL-004 | AutoCAD | 건축 도면 작성과 설계 실무 문서화에 활용합니다. | Used for architectural drawings and design documentation. |
| C-SKL-005 | V-Ray | 공간 분위기와 재료감을 전달하는 렌더링 작업에 활용합니다. | Used for rendering atmosphere, materiality, and spatial experience. |

### Visualization & Presentation

| ID | Skill | Description KR | Description EN |
|---|---|---|---|
| C-SKL-006 | Photoshop | 설계 이미지 보정, 패널 구성, 다이어그램 표현에 활용합니다. | Used for image editing, visual composition, and presentation graphics. |
| C-SKL-007 | Illustrator | 개념도, 분석도, 인포그래픽을 명확하게 정리합니다. | Used for diagrams, analysis graphics, and infographics. |
| C-SKL-008 | InDesign | 포트폴리오와 발표 자료를 체계적으로 편집합니다. | Used for portfolio layout and presentation editorial design. |

### Research & Data

| ID | Skill | Description KR | Description EN |
|---|---|---|---|
| C-SKL-009 | QGIS | 도시 공간 데이터 분석과 시각화에 활용합니다. | Used for spatial data analysis and urban mapping. |
| C-SKL-010 | Python | 도시 데이터 분석과 연구 확장을 위한 도구로 학습·활용합니다. | Used as a tool for urban data analysis and research expansion. |
| C-SKL-011 | Machine Learning | 설계 평가와 도시 데이터 연구의 확장 가능성을 탐구합니다. | Explored as a method for design evaluation and urban data research. |

### BIM & Making

| ID | Skill | Description KR | Description EN |
|---|---|---|---|
| C-SKL-012 | Navisworks | BIM 기반 협업과 검토 과정에 대한 이해를 보유하고 있습니다. | Understood as a BIM coordination and review tool. |
| C-SKL-013 | Tekla | BIM 실무 교육을 통해 구조 및 시공 연계 도구를 학습했습니다. | Studied as part of BIM-related structural and construction workflows. |
| C-SKL-014 | T5D | BIM 기반 프로젝트 관리 및 현장 활용 흐름을 학습했습니다. | Studied for BIM-based project management and construction integration. |
| C-SKL-015 | 3D Printer | 디지털 모델을 물리적 모형으로 구현하고 공간 이해를 돕습니다. | Used to translate digital models into physical models. |

---

## 12. Awards / 수상

| ID | Year | Award KR | Award EN | Organization | Description |
|---|---|---|---|---|---|

---

## 13. Courses / 수료 및 교육

| ID | Year | Course KR | Course EN | Institution | Description |
|---|---|---|---|---|---|
| C-CERT-001 | 2019 | BIM 4차산업 혁신선도 대학 특강 | BIM Practical Course | Related institution | Revit, Navisworks, Tekla, T5D 등 BIM 프로그램 및 현장 활용 교육 |
| C-CERT-002 | 2019 | 3D Printer 교육 및 실습 | 3D Printer Training | Related institution | 3D Printer 산업, 제작 과정, 전용 3D 툴 실습 |
| C-CERT-003 | 2020 | English Language Centre | English Language Centre | University of Victoria | 캐나다 어학연수 과정, 코로나로 인한 조기 귀국 |

---

<!-- @section:archive -->
## 14. Archive / 아카이브

### Archive Introduction KR

Archive는 완성된 결과물만이 아니라, 도시와 건축을 이해하기 위해 지나온 경험을 기록하는 공간입니다.  
공모전, 워크숍, 학회, 교환학생, 연구 경험을 통해 공간을 바라보는 관점이 어떻게 확장되었는지 정리합니다.

### Archive Introduction EN

This archive records not only completed projects, but also the experiences that shaped my way of reading cities and architecture.  
It traces how competitions, workshops, conferences, exchange programs, and research expanded my perspective on space and environment.

| ID | Type | Title | Period | Description KR | Description EN |
|---|---|---|---|---|---|
| C-ARC-001 | Academic Research | 도시·건축 데이터 연구 | 2018/12 ~ 2020/01 | 도시 및 건축 데이터를 기반으로 설계 평가와 시각화 방법론을 탐구했습니다. | Explored design evaluation and visualization methods based on urban and architectural data. |
| C-ARC-002 | Conference | INTE 2018 International Conference | 2018 | 프랑스 파리에서 Crowdsourced Design Evaluation Methodology 관련 주제로 발표했습니다. | Presented research on crowdsourced design evaluation methodology in Paris, France. |
| C-ARC-003 | Workshop | DIAS International Winter Workshop | 2020 | 이탈리아 제노아에서 How we will live together를 주제로 국제 워크숍에 참여했습니다. | Participated in an international workshop in Genoa, Italy, under the theme “How we will live together.” |
| C-ARC-004 | Exchange | Chu Hai College, Hong Kong | 2017 ~ 2018 | 홍콩에서 건축학과 교환학생으로 생활하며 고밀도 도시와 생활환경의 관계를 경험했습니다. | Studied architecture in Hong Kong and experienced the relationship between high-density urban form and everyday life. |
| C-ARC-005 | Exchange | University of Victoria | 2020 | 캐나다 어학연수 과정에 참여했으나 코로나로 인해 조기 귀국했습니다. | Participated in an English language program in Canada, which ended early due to COVID-19. |
| C-ARC-006 | Volunteer | Habitat 활동 | 2016 ~ 2021 | 해비타트 동아리 활동과 정기 후원을 통해 건축의 사회적 역할을 고민했습니다. | Reflected on the social role of architecture through Habitat volunteer activities and regular support. |
| C-ARC-007 | Mentoring | Archi-Tree 고등학생 멘토링 | 2019 | 건축학과 생활과 설계 과정을 멘티에게 소개하고 조언했습니다. | Mentored high school students by introducing architectural education and design studio processes. |

---

## 15. Research Interests / 관심분야

| ID | Interest KR | Interest EN | Description KR | Description EN |
|---|---|---|---|---|
| C-INT-001 | 유휴부지 재생 | Urban Regeneration of Idle Sites | 방치된 하수종말처리장, 공공시설, 개발 유보지, 폐교 등 도시 속 유휴공간을 지역사회에 다시 연결하는 방법을 연구합니다. | Researching how abandoned or underused urban sites can be reconnected to local communities. |
| C-INT-002 | 도시 빅데이터 기반 환경설계 | Urban Data-based Environmental Design | 정성적 조사와 정량적 도시 데이터를 함께 활용해 지역에 필요한 공간과 기반시설을 제안합니다. | Using qualitative research and quantitative urban data to propose spatial and infrastructural strategies. |
| C-INT-003 | 기후재난과 도시 안전 | Climate Resilience and Urban Safety | 폭우, 침수, 폭염, 전기차 화재 등 변화하는 도시 위험에 대응하는 안전 기준과 설계 방법론에 관심이 있습니다. | Interested in design methods and safety guidelines responding to urban risks such as flooding, heat waves, and fire. |
| C-INT-004 | 공공공간과 도시 회복력 | Public Space and Urban Resilience | 도시의 단절된 장소를 회복하고, 시민들이 일상에서 체감할 수 있는 공공환경을 만드는 데 관심이 있습니다. | Exploring public environments that restore fragmented urban spaces and improve everyday life. |

---

<!-- @section:contact -->
## 16. Contact / 연락처

### Contact Copy KR

도시, 건축, 환경, 데이터, 공간 아카이브에 관한 협업과 대화를 환영합니다.  
프로젝트 문의나 네트워킹은 아래 이메일로 연락해 주세요.

### Contact Copy EN

I welcome conversations and collaborations around cities, architecture, environment, data, and spatial archives.  
For project inquiries or networking, please contact me by email.

| ID | Item | Content |
|---|---|---|
| C-CON-001 | Name | Jinkyung Kim |
| C-CON-002 | Email | kimninarosa97@naver.com |
| C-CON-003 | Phone | Private |
| C-CON-004 | GitHub | Private |
| C-CON-005 | LinkedIn | Private |
| C-CON-006 | Instagram | To be added later |

---

<!-- @section:navigation -->
## 17. Navigation / 내비게이션

| Order | Label |
|---|---|
| 1 | Home |
| 2 | About |
| 3 | Projects |
| 4 | Skills |
| 5 | Experience |
| 6 | Archive |
| 7 | Contact |

---

<!-- @section:sections -->
## 18. Section Titles / 섹션 제목

| Section | Title KR | Title EN | Description KR | Description EN |
|---|---|---|---|---|
| Hero | 도시를 읽는 설계자 | A Designer Who Reads Cities | 건축설계 실무와 도시환경 연구를 연결해 더 나은 삶의 환경을 제안합니다. | Connecting architectural practice and urban environmental research to imagine better living environments. |
| About | About Jinkyung Kim | About Jinkyung Kim | 건축에서 도시로, 실무에서 연구로 확장해 온 여정을 소개합니다. | A journey from architecture to cities, and from practice to research. |
| Projects | Selected Projects | Selected Projects | 대형 캠퍼스, 사옥, 운영 연구 프로젝트를 문제 해결 흐름으로 정리했습니다. | A curated archive of campus, headquarters, and research projects. |
| Skills | Skills | Skills | 설계, BIM, 시각화, 도시 데이터 분석 역량을 소개합니다. | Design, BIM, visualization, and urban data research skills. |
| Experience | Experience & Proof | Experience & Proof | 실무 경력, 연구 경험, 수상 및 교육 이력을 정리했습니다. | Professional, research, award, and education records. |
| Archive | Archive | Archive | 공모전, 학회, 워크숍, 교환학생 경험을 기록합니다. | Records of competitions, conferences, workshops, and exchange experiences. |
| Contact | Contact | Contact | 협업과 네트워킹을 위한 연락 창구입니다. | A contact point for collaboration and networking. |

---

## 19. Website Copy Set / 사이트 카피 세트

### Main Copy Candidates

| No. | Copy KR | Copy EN |
|---|---|---|
| 1 | 건축에서 도시로, 도시에서 삶의 환경으로 | From architecture to cities, from cities to living environments |
| 2 | 공간을 설계하고, 도시를 기록합니다 | Designing spaces, archiving cities |
| 3 | 도시를 읽고 환경을 제안하는 아카이브 | An archive for reading cities and imagining environments |

### Sub Copy Candidates

| No. | Copy KR | Copy EN |
|---|---|---|
| 1 | 대형 캠퍼스 마스터플랜부터 도시환경 연구까지, 건축과 도시 사이의 경험을 기록합니다. | From large-scale campus masterplans to urban environmental research, this archive records experiences between architecture and cities. |
| 2 | 실무 프로젝트와 연구 경험을 바탕으로 도시가 사람의 삶에 미치는 영향을 탐구합니다. | Based on professional projects and research experience, this site explores how cities shape everyday life. |
| 3 | 설계, 데이터, 환경의 접점에서 더 나은 도시의 가능성을 찾습니다. | Searching for better urban possibilities at the intersection of design, data, and environment. |

### Footer

© Jinkyung Kim. Urban, Architecture, Research Archive.