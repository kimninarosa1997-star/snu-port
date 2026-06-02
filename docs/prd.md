# PRD — Jinkyung Kim Portfolio

| 항목 | 내용 |
|---|---|
| **문서명** | Jinkyung Kim 개인 포트폴리오 사이트 PRD |
| **버전** | v1.1.2 |
| **작성일** | 2026-06-02 |
| **작성 관점** | Product Manager |
| **입력 소스** | `docs/content.md`, `docs/ia-wireframe.md`, `docs/design-system.md`, `docs/tech-stack.md` |
| **상태** | Draft → 구현 핸드오프 가능 |

---

## 1. 개요·목표

### 1.1 제품 개요

**Jinkyung Kim Portfolio**는 도시·건축설계 연구자이자 디자이너 김진경의 **개인 브랜딩**과 **프로젝트 아카이브**를 위한 싱글 페이지 웹사이트다. 방문자가 5초 안에 정체성을 파악하고, 스크롤을 통해 실무·연구 역량을 검증한 뒤, 이메일 한 번으로 협업 문의에 도달하도록 설계한다.

| 항목 | 내용 |
|---|---|
| **One-line Identity** | 도시를 읽는 설계자 / A Designer Who Reads Cities |
| **사이트 목적** | 개인 브랜딩, 프로젝트 아카이브, 협업·네트워킹 전환 |
| **사이트 유형** | 싱글 페이지 + 앵커 내비 (7섹션) |
| **톤앤매너** | Professional · Minimal · Engaging |
| **디자인 시스템** | NOIR/288 — 시네마틱 모노크롬, 다크 우선 |
| **기술 스택** | Next.js 15 (SSG) + TypeScript + Tailwind CSS 4 + Vercel |

### 1.2 비즈니스·제품 목표

| # | 목표 | 성공 기준 (정성) |
|---|---|---|
| G-01 | **정체성 전달** | 방문자가 "도시·건축·연구를 연결하는 디자이너"임을 Hero에서 즉시 이해 | 
| G-02 | **신뢰 축적** | 대표 프로젝트 4건, 경력·수상·아카이브로 실무·연구 역량 입증 |
| G-03 | **전환 유도** | Contact 섹션까지 도달한 방문자가 이메일 문의 경로를 1클릭으로 확보 |
| G-04 | **유지보수 가능** | `docs/content.md` 단일 원본 수정 → 재배포로 분기 1회 업데이트 가능 |
| G-05 | **검색·공유 대비** | 이름·직무·프로젝트명 검색 시 노출 가능한 SEO 기반 마련 (v2에서 프로젝트 URL 강화) |

### 1.3 사용자 가치 제안

> **건축을 통해 도시를 보고, 도시를 통해 삶의 환경을 다시 생각합니다.**  
> Reading cities through architecture, rethinking environments through urban life.

방문자는 무겁지 않으면서도 전문성이 분명한 경험을 얻는다. 프로젝트를 따라가며 **문제 → 해결 → 결과** 흐름과 사고의 확장(Archive)이 보이는 사이트를 목표로 한다.

### 1.4 신뢰 축적 동선 (Trust Arc)

```text
Hero(도착) → About → Projects → Skills → Experience → Archive → Contact(전환)
```

**출처:** `ia-wireframe.md` §2, §5.1 · `design-system.md` §1 Trust arc · `content.md` §3 Section Mapping

---

## 2. 타깃·페르소나

### 2.1 타깃 오디언스

| 세그먼트 | 설명 | 핵심 니즈 |
|---|---|---|
| **도시·건축설계 실무자** | 설계사, 개발·기획 실무 | 프로젝트 규모·역할·도구 매칭 |
| **연구자·학술 협업자** | 대학·연구소 | 연구 관심분야, 학회·데이터 역량 |
| **협업 파트너·채용 담당자** | HR, PM, 클라이언트 | 경력·수상·포트폴리오 깊이 |
| **포트폴리오 방문자** | 일반 탐색 | 빠른 프로젝트 확인 |

**출처:** `content.md` §1 Target Audience, Keywords

### 2.2 페르소나

#### P-01: 협업·채용 담당자 — "민수"

| 항목 | 내용 |
|---|---|
| **배경** | 건축사무소 PM, 캠퍼스·사옥 프로젝트 인력 검토 |
| **목표** | 마스터플랜·대형 업무시설 경험 여부, 협업 적합성 판단 |
| **행동** | Hero → Projects → Experience → Contact (축약 경로) |
| **성공** | 3분 내 대표 프로젝트·경력 확인 후 이메일 문의 |
| **불만** | placeholder 링크, 느린 로딩, 모바일에서 CTA 찾기 어려움 |

#### P-02: 연구 협업자 — "지연"

| 항목 | 내용 |
|---|---|
| **배경** | 도시환경·데이터 연구실, 공동 연구 파트너 탐색 |
| **목표** | 연구 관심분야·학회·데이터 스킬 확인 |
| **행동** | Hero → About(관심분야) → Archive → Contact |
| **성공** | 유휴부지·기후·도시 데이터 관심 일치 확인 후 연락 |
| **불만** | 영문 콘텐츠 부재, 연구 이력 깊이 부족 |

#### P-03: 포트폴리오 훑기 방문자 — "Alex"

| 항목 | 내용 |
|---|---|
| **배경** | SNS·추천 링크로 유입, 짧은 체류 |
| **목표** | 시각·프로젝트 한눈에 파악 |
| **행동** | Hero → Projects → (이탈 또는 Contact) |
| **성공** | 30초 내 "삼성 캠퍼스 마스터플랜" 등 키워드 인지 |
| **불만** | 과도한 스크롤, 텍스트만 많은 카드 |

**출처:** `ia-wireframe.md` §5.1 페르소나별 축약 경로

---

## 3. 범위 (포함 / 제외)

### 3.1 v1 포함 (In Scope)

| 영역 | 내용 |
|---|---|
| **페이지 구조** | 싱글 페이지, 7 앵커 섹션 (`#home` … `#contact`) |
| **글로벌 크롬** | Header(로고·Nav·언어 토글), Footer, Skip link |
| **섹션** | Hero, About, Projects(4건), Skills, Experience, Archive, Contact |
| **콘텐츠** | `content.md` 필수(C-REQ-*) + 권장(C-REC-*) + 선택(C-OPT-*, C-PROJ-*, C-SKL-*, C-EXP-*, C-AWD-*, C-ARC-*) 전체 반영 |
| **프로젝트 상세** | 동일 페이지 인라인 확장(아코디언/패널) |
| **다국어** | Header KR/EN 토글, 섹션별 KR/EN 콘텐츠 |
| **문의** | `mailto:` 이메일 CTA (C-CON-002) |
| **디자인** | NOIR/288 토큰, 다크 기본 + 라이트 토글 |
| **반응형** | Mobile / Tablet / Desktop 3분기 |
| **콘텐츠 파이프** | `content.md` → 빌드타임 파싱 → `generated.ts` |
| **배포** | Vercel SSG, `main` push 자동 배포 |
| **SEO 기본** | metadata, sitemap, robots, JSON-LD Person |

### 3.2 v1 제외 (Out of Scope)

| 항목 | 사유 | 예약 |
|---|---|---|
| 프로젝트 독립 URL `/projects/[slug]` | v1 구현 비용 최소화 | v2 (ADR-008) |
| Formspree 문의 폼 | mailto 우선 | v1.5 |
| Vercel Web Analytics | v1 출시 범위 제외 | v1.5 (ADR-006) — `tech-stack.md` §1 한 줄 요약은 v1.5 포함 로드맵 표기 |
| Instagram/SNS 활성 링크 | C-CON-006 "추가 예정" | 콘텐츠 준비 시 |
| Phone / GitHub / LinkedIn 노출 | Private (C-CON-003~005) | 요청 시 |
| Headless CMS, DB, 자체 API | YAGNI | — |
| `/en`, `/ko` URL 분리 | UI 토글로 충분 | v4 검토 |
| Archive·Projects 필터/검색 | 4~7건 규모 | v3 |
| Sticky bottom CTA bar | 선택 기능 | P2 |
| Hero 배경 풀블리드 이미지 | About에 프로필 집중 | IA 결정 |

**출처:** `ia-wireframe.md` §1 v2 확장 · `tech-stack.md` §7.1, §7.3 · `content.md` C-CON-003~006

### 3.3 가정 (Assumptions)

1. 콘텐츠 업데이트 빈도: **분기 1회** 수준 → SSG 재배포로 충분
2. 프로필·프로젝트 이미지는 `public/images/`에 제공됨
3. 1인 개발·운영, React/Next.js 학습 중이나 SEO·유지보수 우선
4. 프로덕션 URL: Vercel (`snu-port.vercel.app`) 또는 커스텀 도메인

---

## 4. 기능 요구사항 (FR)

> **우선순위:** P0 = v1 출시 필수 · P1 = v1 권장 · P2 = v1 선택 / v1.5 이후

### 4.1 글로벌·내비게이션

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-01 | Header에 7개 앵커 Nav(Home, About, Projects, Skills, Experience, Archive, Contact)를 `content.md` §17 순서대로 제공한다 | P0 | 클릭 시 해당 `#section`으로 smooth scroll, `scroll-margin-top` = header 높이 | `content.md` §17 · `ia-wireframe.md` §1 · `--scroll-margin-top`, `--header-height` |
| FR-02 | Desktop(≥1024px)에서 가로 Nav, Tablet/Mobile(<1024px)에서 햄버거 → 드로어 Nav를 제공한다 | P0 | 드로어: 7 링크 세로 스택, Esc 닫기, focus trap | `ia-wireframe.md` §4.2, §4.3 · Nav component §4.3 |
| FR-03 | Header KR/EN 언어 토글로 전체 UI 콘텐츠 언어를 전환한다 | P1 | 토글 상태 유지(세션), `lang` 속성 또는 병기 일관 | `content.md` C-OPT-002 · `ia-wireframe.md` §3.1 · LangToggle |
| FR-04 | Skip link `#main-content`를 제공한다 (페이지 최상단, `<main>` 진입점) | P0 | Tab 첫 포커스 시 표시, `#main-content`로 이동(Hero 포함) | `ia-wireframe.md` §6 · `tech-stack.md` §4.3 · a11y 표준 |
| FR-05 | 스크롤 >40px 시 Header 배경 `--color-surface-overlay` + 하단 hairline 전환 | P1 | `--duration-base`, `--ease-standard` | `design-system.md` Motion #2 · Nav scrolled state |
| FR-06 | Footer에 ©, 브랜드 문장(§19 Footer)을 표시한다 | P1 | `© Jinkyung Kim. Urban, Architecture, Research Archive.` | `content.md` §19 Footer · `ia-wireframe.md` §3.1 |
| FR-06b | Desktop Header Nav 우측에 Contact Ghost Button(`#contact`)을 추가한다 | P2 | 7-link Nav의 Contact와 동일 대상; Desktop(≥1024px)만 | `ia-wireframe.md` §5.2 |

### 4.2 Hero (`#home`)

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-07 | One-line Identity "도시를 읽는 설계자" / EN을 `display-xl` 타이포로 표시한다 | P0 | 화면당 display-xl 1개, ALL CAPS, Hero 진입 애니메이션 | `content.md` §4 · `--text-display-xl` · Motion #1 |
| FR-08 | Supporting Copy KR/EN(2~3줄)을 Hero에 노출한다 | P0 | `body-l`, max-width 42rem | `content.md` §4 Supporting Copy · `--text-body-l` |
| FR-09 | 키워드/관심분야 Badge 태그를 Hero에 표시한다 | P1 | Outline Badge, wrap/scroll-x(mobile) | `content.md` C-OPT-006, §1 Keywords · Badge §4.5 |
| FR-10 | Primary CTA "Projects" → `#projects`, Secondary CTA "Contact" → `#contact` | P0 | Primary/Ghost Button, 모바일 풀폭, 첫 화면 CTA 노출 | `content.md` §4 CTA · `ia-wireframe.md` §5.2 · Button §4.1 |
| FR-11 | Hero 최소 높이 `min(100svh, 720px)` | P0 | 모바일에서 CTA가 viewport 내 노출 | `ia-wireframe.md` §4.3 · `--section-padding-y` 예외 |
| FR-11a | Hero에 §6 Core Message KR/EN **별도 블록을 표시하지 않는다** | P0 | Supporting Copy(§4)만 노출; Core Message는 Footer·PRD §1.3·메타 인용 | `content.md` §6 · `ia-wireframe.md` §6 |

### 4.3 About (`#about`)

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-12 | 프로필 이미지(C-REQ-001)와 About 본문 KR/EN(C-REC-001/002, §5)을 표시한다 | P0 | grayscale default, `alt` 제공 | `content.md` C-REQ-001, C-REC-001/002 · Media §4.6 |
| FR-13 | Mobile에서 About 본문 접기/펼치기(read more) — Minimal Version KR/EN | P1 | 접힘: §5 Minimal, 펼침: Full | `content.md` §5 Minimal · `ia-wireframe.md` §4.3 |
| FR-14 | 핵심 강점 카드 3개(C-STR-001~003)를 표시한다 | P0 | Desktop 3열, Tablet 2+1, Mobile 스택 | `content.md` §7 · Card §4.2 |
| FR-15 | 연구 관심분야 4개(C-INT-001~004)를 Badge/chip으로 표시한다 | P0 | 4 chips, 2×2 tablet | `content.md` §15 · Badge Outline |
| FR-16 | 학력 타임라인 2건(C-EDU-001, C-EDU-002)을 표시한다 | P0 | 기간·기관·전공·note(최우등) | `content.md` C-REQ-003/004, §8 |

### 4.4 Projects (`#projects`)

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-17 | 대표 프로젝트 4건(C-PROJ-001~004) 카드 그리드를 제공한다 | P0 | Desktop 4열, Tablet 2×2, Mobile 1열 | `content.md` C-REC-005, §9 · `ia-wireframe.md` §4.1 |
| FR-18 | 카드에 제목·기간·기관·키워드·요약(meta)을 표시한다 | P0 | Card title + caption 계층 | `content.md` C-PROJ-* · Card §4.2 |
| FR-19 | 카드 클릭/Enter로 Problem→Solution→Result 상세 패널을 인라인 확장한다 | P0 | Mobile 포함 — 카드 **아래** full-width accordion; bottom sheet 미사용 | `ia-wireframe.md` §4.3, §6 · Motion #3 · ADR-008 v1 |
| FR-20 | 프로젝트 상세 하단에 Contact CTA(`#contact`)를 제공한다 | P1 | "Discuss this project" 또는 "Contact" | `ia-wireframe.md` §5.2 |
| FR-21 | 프로젝트 Tools·Role·Result 필드를 상세에 포함한다 | P1 | caption 메타 | `content.md` §9 각 프로젝트 |

### 4.5 Skills (`#skills`)

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-22 | 4개 Skill Group(Design & Modeling, Visualization, Research & Data, BIM & Making)을 표시한다 | P0 | Desktop 4열, Tablet 2×2 | `content.md` §11 · `ia-wireframe.md` §3.5 |
| FR-23 | 각 그룹 내 스킬(C-SKL-001~015)을 Badge/tag로 나열한다 | P0 | Outline Badge, radius 0 | `content.md` C-SKL-* · Badge §4.5 |
| FR-24 | Mobile에서 Skills를 accordion(4 그룹)으로 제공한다 | P1 | 그룹별 펼침/접힘 | `ia-wireframe.md` §4.3 |

### 4.6 Experience (`#experience`)

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-25 | 실무 경력(C-EXP-001, C-REC-003)과 연구 경력(C-EXP-002, C-REC-004)을 timeline으로 표시한다 | P0 | Problem/Solution/Result 구조 | `content.md` §10 · Timeline §4.6 |
| FR-26 | 인턴·제작 경력(C-EXP-003)을 포함한다 | P1 | timeline 항목 | `content.md` C-EXP-003 |
| FR-27 | 수상 5건(C-AWD-001~005) 목록을 표시한다 | P0 | 연도·상명·기관 | `content.md` §12 |
| FR-28 | 교육·수료 3건(C-CERT-001~003) 목록을 표시한다 | P1 | 연도·과정·기관 | `content.md` §13 |
| FR-29 | Mobile에서 Work/Research/Awards/Courses 탭 또는 accordion | P2 | 4 영역 접근 가능 | `ia-wireframe.md` §4.3 |

### 4.7 Archive (`#archive`)

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-30 | Archive 소개 문구(§14 Introduction KR/EN)를 표시한다 | P0 | body-l intro | `content.md` §14 |
| FR-31 | 아카이브 항목 7건(C-ARC-001~007)을 vertical timeline으로 표시한다 | P0 | Type Badge + title + period + description | `content.md` §14 · Timeline left rule |
| FR-32 | Archive type(학회·워크숍·교환 등)을 Accent Badge로 구분한다 | P1 | `--color-primary-dim` | Badge Accent §4.5 |

### 4.8 Contact (`#contact`)

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-33 | Contact Copy KR/EN(§16)을 표시한다 | P0 | 2열 Desktop, 스택 Mobile | `content.md` §16 |
| FR-34 | 이메일 `kimninarosa97@naver.com`을 Accent/Primary CTA + `mailto:` 링크로 제공한다 | P0 | accessible name: "이메일로 Jinkyung Kim에게 문의" | `content.md` C-CON-002, C-REQ-002 · ADR-007 |
| FR-35 | Private 연락처(Phone, GitHub, LinkedIn)는 UI에 노출하지 않는다 | P0 | placeholder 링크 금지 | `content.md` C-CON-003~005 · `ia-wireframe.md` §5.2 |
| FR-36 | Instagram(C-CON-006)은 "추가 예정" 상태로 비활성 표시 또는 숨김 | P2 | 활성 링크 없음 | `content.md` C-OPT-001 · `ia-wireframe.md` §6 |
| FR-37 | 이메일 클립보드 복사 버튼(Mobile 편의) | P2 | copy feedback | `ia-wireframe.md` §5.2 |

### 4.9 콘텐츠·데이터

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-38 | `docs/content.md`를 Single Source of Truth로 빌드타임 파싱한다 | P0 | `npm run content:sync` → `lib/content/generated.ts` | ADR-004 · `tech-stack.md` §5 |
| FR-39 | 콘텐츠 ID(C-PROJ-001 등)를 파싱 결과·컴포넌트에서 추적 가능하게 유지한다 | P0 | TypeScript 타입 `SiteContent`, `Project` 등 | ADR-002 · `tech-stack.md` §5.2 |
| FR-40 | 섹션 `id` = `home`, `about`, `projects`, `skills`, `experience`, `archive`, `contact` | P0 | IA와 DOM 일치 | `ia-wireframe.md` §7 |
| FR-41 | 각 섹션 `aria-labelledby` = §18 Title KR/EN | P1 | heading 계층 h1 1개, h2 섹션 | `content.md` §18 · `ia-wireframe.md` §7 |

### 4.10 테마·인터랙션

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| FR-42 | 다크 테마 기본, 라이트 테마 수동 토글 + `prefers-color-scheme` 지원 | P1 | `data-theme` CSS 변수 스왑 | `design-system.md` §3 · ADR-003 |
| FR-43 | `prefers-reduced-motion: reduce` 시 애니메이션 duration 0ms | P0 | Hero·Nav·Project expand 포함 | `design-system.md` §2.6 |
| FR-44 | Experience·Archive 섹션에 선택적 alt band bg `--color-neutral-900` | P2 | every 2nd section | Section §4.4 |

---

## 5. 비기능 요구사항 (NFR)

### 5.1 성능

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| NFR-01 | Lighthouse Performance (Mobile) ≥ 90 | P0 | Slow 4G, Moto G Power | `tech-stack.md` §4.1 |
| NFR-02 | LCP ≤ 2.5s | P0 | Lab 또는 필드 | `tech-stack.md` §4.2 |
| NFR-03 | INP ≤ 200ms | P1 | Lab | `tech-stack.md` §4.2 |
| NFR-04 | CLS ≤ 0.1 | P0 | 이미지 dimensions 지정 | `tech-stack.md` §4.2 |
| NFR-05 | 프로필·프로젝트 이미지는 `next/image` + WebP 최적화 | P1 | `public/images/` | `tech-stack.md` §6, §8 |
| NFR-06 | 메인 페이지 SSG — 빌드타임 HTML 생성 | P0 | `next build` 정적 출력 | ADR-001 |

### 5.2 접근성

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| NFR-07 | Lighthouse Accessibility ≥ 95 | P0 | axe + 수동 키보드 테스트 | `tech-stack.md` §4.1 |
| NFR-08 | WCAG 2.1 AA 텍스트 대비 — 다크 캡션 최소 `--color-neutral-300` | P0 | 4.5:1 일반, 3:1 대형 | `design-system.md` §6 · §11 |
| NFR-09 | 모든 인터랙티브 요소 키보드 Tab 도달, `:focus-visible` = `--shadow-focus` | P0 | Nav, CTA, 카드, 토글 | `tech-stack.md` §4.3 · Button §4.1 |
| NFR-10 | 시맨틱 HTML: `header`, `main`, `section`, `nav`, `footer` | P0 | — | ADR-003 보조 · `tech-stack.md` §2.2 |
| NFR-11 | Hero·프로젝트 이미지 meaningful `alt` (Summary KR/EN 활용) | P0 | — | `tech-stack.md` §4.3 |
| NFR-12 | 기본 `lang="ko"`, EN 토글 시 일관된 언어 표시 | P1 | — | `tech-stack.md` §4.3 |

### 5.3 SEO

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| NFR-13 | Lighthouse SEO ≥ 95 | P0 | — | `tech-stack.md` §4.1 |
| NFR-14 | `<title>`: `Jinkyung Kim | Urban Environmental Design Researcher` (또는 직무 KR) | P0 | `generateMetadata` | `content.md` §1 · `tech-stack.md` §4.4 |
| NFR-15 | `<meta description>`: Hero Supporting Copy EN, 155자 내외 | P0 | — | `content.md` §4 · `tech-stack.md` §4.4 |
| NFR-16 | Open Graph / Twitter Card: 이름, og-default.jpg, URL | P1 | `public/og-default.jpg` | `tech-stack.md` §4.4, §6 |
| NFR-17 | `/sitemap.xml`, `/robots.txt` 자동 생성 | P0 | `app/sitemap.ts`, `robots.ts` | ADR-001 · `tech-stack.md` §6 |
| NFR-18 | JSON-LD `Person` + `WebSite` | P1 | `lib/seo.ts` | `tech-stack.md` §4.4 |
| NFR-19 | 프로젝트·경력 키워드는 시맨틱 HTML 텍스트로 노출 (이미지 텍스트 의존 금지) | P0 | — | `tech-stack.md` §4.4 |

### 5.4 보안·프라이버시

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| NFR-20 | HTTPS 프로덕션 (Vercel 기본) | P0 | — | ADR-005 |
| NFR-21 | Private 연락처 필드 소스·UI 모두 비노출 | P0 | C-CON-003~005 | `content.md` · Anti-patterns §8 |
| NFR-22 | GA4 등 쿠키 기반 Analytics v1 미사용 (GDPR 부담 최소) | P1 | Vercel Analytics는 v1.5 | ADR-006 |

### 5.5 유지보수·운영

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| NFR-23 | TypeScript 전 컴포넌트·콘텐츠 로더 | P0 | 빌드타임 타입 검증 | ADR-002 |
| NFR-24 | CI: `content:sync && build && lint` 통과 필수 | P1 | GitHub Actions 또는 Vercel | `tech-stack.md` §9 |
| NFR-25 | Node.js 20 LTS+, npm | P0 | — | `tech-stack.md` §9 |
| NFR-26 | `main` push → Vercel 자동 배포, PR Preview URL | P0 | — | ADR-005 |
| NFR-27 | 레거시 `lib/portfolio-data.ts` 하드코딩 → `siteContent` 마이그레이션 | P1 | — | `tech-stack.md` §6 |
| NFR-28 | 디자인 토큰은 `app/globals.css` `@theme` + CSS 변수, 컴포넌트 하드코드 색 금지 | P0 | NOIR/288 전 토큰 | ADR-003 · `design-system.md` §2 |

### 5.6 디자인 품질

| ID | 요구사항 | 우선순위 | 수용 기준 | 출처 |
|---|---|:---:|---|---|
| NFR-29 | 8px spacing grid, `--layout-max-width: 1200px` | P0 | gap 기반, margin stack 금지 | `--space-*`, `--layout-max-width` |
| NFR-30 | Accent color 화면 ≤5%, hover scale·shadow bloom 금지 | P0 | `--color-primary` | `design-system.md` §1, §8 |
| NFR-31 | Lighthouse Best Practices ≥ 95, console error 없음 | P1 | 프로덕션 | `tech-stack.md` §4.1 |
| NFR-32 | 그라데이션·글래스모피즘·둥근 카드+컬러 스트라이프 금지 | P0 | Anti-patterns | `design-system.md` §8 |

---

## 6. KPI / 측정 계획

### 6.1 KPI 정의

| KPI ID | 지표 | 측정 방법 | 목표치 (v1 출시 후 90일) | 관련 FR/NFR | 출처 |
|---|---|---|---|---|---|
| KPI-01 | **Unique Visitors (UV)** | Vercel Web Analytics (v1.5) 또는 Cloudflare Analytics | ≥ 200 UV/월 (초기 baseline) | FR-34, NFR-22 | ADR-006 |
| KPI-02 | **Bounce Rate** | Analytics 세션 중 1페이지만 조회 비율 | ≤ 55% | FR-07~11 (Hero 체류) | — |
| KPI-03 | **Contact Section Reach Rate** | 스크롤 depth 이벤트 또는 `#contact` hash 도달 (v2 커스텀 이벤트) | ≥ 15% of sessions | FR-10, FR-34 | `ia-wireframe.md` §5.1 |
| KPI-04 | **mailto Click-through Rate** | Contact 섹션 `mailto:` 클릭 / Contact 도달 (v1.5 이벤트) | ≥ 8% of Contact viewers | FR-34 | ADR-007 |
| KPI-05 | **Lighthouse Performance** | `npm run build` 후 Lighthouse CI (Mobile) | ≥ 90 | NFR-01 | `tech-stack.md` §4.1 |
| KPI-06 | **Lighthouse Accessibility** | Lighthouse CI + axe | ≥ 95 | NFR-07 | `tech-stack.md` §4.1 |
| KPI-07 | **Lighthouse SEO** | Lighthouse CI | ≥ 95 | NFR-13 | `tech-stack.md` §4.1 |
| KPI-08 | **LCP (Lab)** | Lighthouse / PageSpeed Insights | ≤ 2.5s | NFR-02 | `tech-stack.md` §4.2 |
| KPI-09 | **Build Success Rate** | Vercel 배포 성공 / 전체 push | 100% on `main` | NFR-24, NFR-26 | ADR-005 |
| KPI-10 | **Content Sync Integrity** | `content:sync` 후 TypeScript compile 0 error | 100% | FR-38, FR-39 | ADR-004 |
| KPI-11 | **Time to Identity** (정성→정량) | Usability test: Hero만 보고 직무 3키워드 말하기 | ≥ 80% 5초 내 "도시·건축·연구" 중 2개 이상 | FR-07, FR-08 | G-01 · `content.md` §1 Keywords |
| KPI-12 | **Project Detail Engagement** | 프로젝트 카드 expand 클릭 / Projects 섹션 view (v1.5) | ≥ 25% of Projects viewers | FR-19 | — |

### 6.2 측정 인프라 로드맵

| 단계 | 도구 | 측정 가능 KPI |
|---|---|---|
| **v1 출시** | Lighthouse CI, Vercel deploy logs | KPI-05~10 |
| **v1.5** | `@vercel/analytics` | KPI-01, KPI-02 |
| **v2** | 커스텀 이벤트 (project expand, contact scroll) | KPI-03, KPI-04, KPI-12 |

### 6.3 정성 피드백 수집

| 방법 | 주기 | 대상 |
|---|---|---|
| 동료·멘토 3인 Heuristic Review (신뢰·전문성·CTA) | 출시 전 1회 | P-01, P-02 |
| 본인 콘텐츠 정확도 체크리스트 (C-* ID 대조) | 배포 전 매회 | FR-38 |
| Search Console (커스텀 도메인 연결 후) | 월 1회 | 이름·프로젝트명 impression | 

---

## 7. 마일스톤

### 7.1 전체 일정 (권장)

```text
M0 ──► M1 ──► M2 ──► M3 ──► M4 ──► Launch ──► M5 (v1.5)
기반     콘텐츠   섹션     품질     배포     v1.0      Analytics
```

| 마일스톤 | 기간 (권장) | 목표 | 주요 FR/NFR | 완료 기준 |
|---|---|---|---|---|
| **M0: 기반 구축** | 3~5일 | 콘텐츠 파이프 + 디자인 토큰 + 레이아웃 shell | FR-38, FR-39, NFR-23, NFR-28 | `content:sync` 성공, `globals.css` 토큰, Header/Footer/SkipLink 렌더 |
| **M1: 콘텐츠·Hero·About** | 3~4일 | 첫인상·신뢰 1단 | FR-07~16, FR-40, NFR-08~11 | Hero CTA 동작, About 전 필드, KR/EN 토글 prototype |
| **M2: Projects·Skills·Experience** | 4~5일 | 신뢰 2~4단 | FR-17~28, FR-19 | 4 프로젝트 expand, Skills 4그룹, Experience timeline+awards |
| **M3: Archive·Contact·테마** | 2~3일 | 전환·마무리 | FR-30~35, FR-42, FR-43 | mailto CTA, Archive 7건, dark/light, Private 미노출 |
| **M4: SEO·품질·접근성** | 2~3일 | 출시 게이트 | NFR-01~04, NFR-07, NFR-13~19, NFR-31 | Lighthouse 4카테고리 목표, sitemap/robots/metadata |
| **Launch: v1.0** | 1일 | 프로덕션 배포 | NFR-26, KPI-05~10 | `main` deploy, snu-port.vercel.app live |
| **M5: v1.5** | +1주 | Analytics·Formspree | FR (Formspree), ADR-006, ADR-007 | Analytics 대시보드, KPI-01~02 측정 시작 |

**총 v1 예상:** 14~21일 (1인 파트타임 기준)

### 7.2 마일스톤별 산출물

| M | 산출물 |
|---|---|
| M0 | `scripts/sync-content.ts`, `lib/content/types.ts`, `generated.ts`, `app/layout.tsx` metadata skeleton |
| M1 | `HeroSection`, `AboutSection`, `LangToggle` |
| M2 | `ProjectsSection`, `ProjectCard`, `SkillsSection`, `ExperienceSection` |
| M3 | `ArchiveSection`, `ContactSection`, theme toggle |
| M4 | `sitemap.ts`, `robots.ts`, `lib/seo.ts`, Lighthouse report |
| Launch | PRD v1.0 기준 sign-off, README 배포 가이드 |
| M5 | `@vercel/analytics`, Formspree (선택) |

### 7.3 출시 게이트 (Go/No-Go)

| # | 체크 | 필수 |
|---|---|:---:|
| 1 | P0 FR 전체 수용 | ✅ |
| 2 | KPI-05~07 (Lighthouse) 목표 달성 | ✅ |
| 3 | C-REQ-* 필수 콘텐츠 UI 반영 | ✅ |
| 4 | Private 연락처 미노출 검증 | ✅ |
| 5 | Mobile Hero CTA 첫 화면 노출 | ✅ |
| 6 | `npm run build` CI green | ✅ |
| 7 | 프로덕션 URL HTTPS | ✅ |

### 7.4 v2+ 로드맵 (PRD 범위 외 참고)

| 버전 | 범위 | PRD 연계 |
|---|---|---|
| **v1.5** | Formspree, Vercel Analytics | KPI-01~04 측정 |
| **v2** | `/projects/[slug]` SSG, 프로젝트별 OG | FR-19 확장, G-05 강화 |
| **v3** | `content/projects/*.md` 분리, Archive 필터 | FR-31 확장 |
| **v4** | `/en`, `/ko` URL i18n | FR-03 확장 |

**출처:** `tech-stack.md` §7.1 · `ia-wireframe.md` §1 v2 · ADR-008

---

## 8. 부록

### 8.1 콘텐츠 ID ↔ 섹션 빠른 참조

| 섹션 | 주요 Content ID |
|---|---|
| Hero | §4 One-line·Supporting Copy, C-OPT-006 *(§6 Core Message: Hero v1 미노출)* |
| About | C-REQ-001/003/004, C-REC-001/002, C-STR-*, C-INT-*, C-EDU-* |
| Projects | C-REC-005, C-PROJ-001~004 |
| Skills | C-OPT-005, C-SKL-001~015 |
| Experience | C-REC-003/004, C-EXP-*, C-AWD-*, C-CERT-* |
| Archive | C-ARC-001~007 |
| Contact | C-REQ-002, C-CON-*, C-OPT-001 |

### 8.2 ADR ↔ NFR/FR 매핑

| ADR | 제목 | 연관 요구사항 |
|---|---|---|
| ADR-001 | Next.js App Router + SSG | NFR-06, NFR-17, FR-38 |
| ADR-002 | TypeScript 필수 | NFR-23, FR-39 |
| ADR-003 | Tailwind CSS 4 + 토큰 | NFR-28, NFR-29 |
| ADR-004 | content.md 빌드타임 파싱 | FR-38, FR-39, KPI-10 |
| ADR-005 | Vercel 배포 | NFR-20, NFR-26, KPI-09 |
| ADR-006 | Vercel Web Analytics | KPI-01, KPI-02 |
| ADR-007 | mailto 우선 | FR-34, KPI-04 |
| ADR-008 | v2 프로젝트 URL | Out of Scope v1, v2 roadmap |

### 8.3 문서 이력

| 버전 | 날짜 | 변경 |
|---|---|---|
| v1.0 | 2026-06-02 | `content.md`, `ia-wireframe.md`, `design-system.md`, `tech-stack.md` 통합 초안 |
| v1.1 | 2026-06-02 | QA 정합성 점검(`review-log.md`) 반영 — FR-04 Skip link 위치 명확화, §8.1 Hero 콘텐츠 ID 수정, v1/v1.5 Analytics 범위 주석; `content.md` §3 Archive·About·Skills ID 매핑 보완, C-EDU-001 기관명(단국대) 추가 |
| v1.1.1 | 2026-06-02 | P1 후속 — `content.md` 파서 힌트·CTA 채택·C-REQ-003↔C-EDU-001; `tech-stack.md` v1/v1.5 범위 정렬; `design-system.md` Nav link WCAG(`--color-neutral-300`) |
| v1.1.2 | 2026-06-02 | P2 후속 — FR-06b Header Contact(P2), FR-11a Hero Core Message 미노출, FR-19 Mobile accordion; `design-system.md` 제목 통일 |

---

**다음 단계:** M0 착수 — `scripts/sync-content.ts` + `lib/content/types.ts` 구현 후 섹션 컴포넌트 순차 개발.
