# 기술 스택 정의서 — Jinkyung Kim Portfolio

> **문서 목적:** 1인 개발·유지보수 포트폴리오 사이트에 적합한 기술 스택을 선정하고, 선정 근거·구조·품질 목표를 기록한다.  
> **기준 문서:** `docs/content.md`, `docs/ia-wireframe.md`, `docs/design-system.md`  
> **작성 관점:** 프론트엔드 테크리드 · 1인 개발자 유지보수 우선

---

## 1. 최종 스택 한 줄 요약

**v1:** Next.js 15 (App Router, SSG) + TypeScript + Tailwind CSS 4 + `docs/content.md` 빌드타임 파싱 + Vercel 배포 + Contact `mailto:`

**v1.5+:** `@vercel/analytics` · Formspree 문의 폼 (ADR-006, ADR-007 · `prd.md` §3.2)

---

## 2. 후보 비교

### 2.1 프레임워크 / 렌더링

| 후보 | 장점 | 단점 | 선택 | 이유 |
|---|---|---|---|---|
| **Next.js 15 App Router (SSG)** | React 생태계·문서 풍부, SSG/ISR/메타데이터 API 내장, 프로젝트 상세 페이지 확장 용이, 이미 레포에 구축됨 | 학습 곡선 있음, App Router 개념 이해 필요 | ✅ **선택** | 유지보수·SEO·확장성 균형 최적. 분기 1회 업데이트는 SSG로 충분하며, v2 `/projects/[slug]` 추가가 자연스럽다. |
| **Astro (SSG + Islands)** | 기본 성능 우수, 마크다운 CMS 친화, JS 번들 최소화 | React 컴포넌트는 Islands로 제한적, 기존 Next.js 코드 이전 비용 | ❌ | 이미 Next.js 프로젝트가 존재. 마이그레이션 비용 대비 이득이 작다. |
| **Vite + React SPA** | 구조 단순, 빌드 빠름 | SEO·메타태그·OG 직접 구현 필요, 라우팅·이미지 최적화 별도 도입 | ❌ | 개인 이름·프로젝트명 검색 노출이 우선순위. SPA만으로는 SEO 부담이 크다. |

**렌더링 전략:** 메인 페이지와 섹션은 **정적 생성(SSG)**. 프로젝트 상세 독립 페이지(v2)도 빌드타임 생성. 동적 API·DB는 도입하지 않는다.

---

### 2.2 스타일링

| 후보 | 장점 | 단점 | 선택 | 이유 |
|---|---|---|---|---|
| **Tailwind CSS 4** | 유틸리티 기반으로 빠른 UI 구현, 디자인 토큰(`@theme`) 연동, 번들 최적화, 레포에 이미 적용 | 클래스명이 길어질 수 있음, HTML과 스타일 혼재 | ✅ **선택** | `design-system.md` 토큰을 CSS 변수·Tailwind theme로 매핑하기 쉽다. 1인 개발 속도와 일관성에 유리. |
| **CSS Modules** | 컴포넌트 스코프 명확, 러ntime 의존 없음 | 토큰·반응형·유틸 반복 작성 증가 | ❌ | 미니멀 UI는 가능하나, 섹션별 반응형·간격 시스템을 직접 관리해야 한다. |
| **styled-components / Emotion** | CSS-in-JS로 컴포넌트 캡슐화 | 런타임 오버헤드, RSC와 궁합 주의, 번들 증가 | ❌ | 성능·유지보수 우선순위와 맞지 않음. |

**보조:** 접근성·시맨틱 마크업은 Tailwind와 별개로 HTML 구조(`header`, `main`, `section`, `nav`, `footer`)로 보장한다.

---

### 2.3 배포

| 후보 | 장점 | 단점 | 선택 | 이유 |
|---|---|---|---|---|
| **Vercel** | Next.js 공식 호스팅, Git push 자동 배포, HTTPS·커스텀 도메인 무료, Preview URL | Serverless 한도(무료 Hobby) 존재 — 정적 사이트에는 충분 | ✅ **선택** | 이미 `snu-port.vercel.app` 연결됨. 1인 운영에 설정·모니터링 부담 최소. |
| **Netlify** | 정적·Jamstack 친화, 폼·분석 내장 | Next.js 기능 일부 제한, 기존 Vercel 대비 이전 이유 없음 | ❌ | 기능상 대체 가능하나 전환 비용만 발생. |
| **Cloudflare Pages** | 무료 대역폭 넉넉, 글로벌 CDN | Next.js full feature 지원은 Vercel 대비 설정 복잡 | ❌ | 현재 규모·스택에서는 Vercel이 더 단순. |

**배포 흐름:** `main` push → Vercel 자동 빌드 → 프로덕션 배포. PR/브랜치는 Preview URL로 검증.

---

### 2.4 분석 (Analytics)

| 후보 | 장점 | 단점 | 선택 | 이유 |
|---|---|---|---|---|
| **Vercel Web Analytics** | Vercel 대시보드 통합, 설정 1줄, GDPR 친화적, 무료 Hobby 포함 | 상세 퍼널·커스텀 이벤트는 제한적 | ✅ **v1.5** | v1 출시 범위 제외. PRD §3.2·ADR-006 — M5에서 `@vercel/analytics` 도입 |
| **Cloudflare Web Analytics** | 완전 무료, 쿠키 없음, 가벼움 | Cloudflare DNS/프록시 연동 시 편리, Vercel 단독 사용 시 별도 스니펫 | △ 대안 | 커스텀 도메인을 Cloudflare DNS로 옮길 경우 함께 사용 가능. |
| **Google Analytics 4** | 기능 풍부, 검색 유입 상세 | 쿠키 배너·개인정보 고려, 스크립트 무거움, 설정 복잡 | ❌ | 포트폴리오 규모·업데이트 빈도 대비 과도. |

---

### 2.5 폼 / 문의 처리

| 후보 | 장점 | 단점 | 선택 | 이유 |
|---|---|---|---|---|
| **mailto: + 이메일 노출** | 구현·유지보수 제로, 완전 무료 | 스팸 노출, 전송 성공 여부·UX 제한, 모바일 환경 차이 | △ v1 기본 | Contact 섹션 CTA로 즉시 사용 가능. `content.md`에 이미 이메일 있음. |
| **Formspree** | HTML form POST, 무료 50건/월, 스팸 필터 | 무료 한도, 외부 서비스 의존 | ✅ **v1.5 권장** | 간단한 문의 폼 추가 시 백엔드 없이 구현. React Client Component 1개면 충분. |
| **Web3Forms** | API 키만으로 연동, 무료 250건/월 | Formspree 대비 생태계 작음 | △ 대안 | Formspree 한도 초과 시 대체. |

**v1:** Contact에 **이메일 링크(mailto)** 만 제공 (ADR-007 · `prd.md` FR-34).

**v1.5:** Formspree 폼 추가(선택). 자체 API Route + SMTP는 1인 유지보수 관점에서 불필요.

---

## 3. ADR (Architecture Decision Records)

### ADR-001: Next.js App Router + SSG 채택

**Context**  
싱글 페이지 + 섹션 앵커 + (향후) 프로젝트 상세 페이지. 콘텐츠 변경은 분기 1회 수준. React·Next.js는 학습 중이지만 레포에 Next.js 15가 이미 구성되어 있다. SEO·유지보수가 학습보다 우선.

**Decision**  
Next.js 15 App Router로 **정적 생성(SSG)** 중심 사이트를 구축한다. 메인은 `app/page.tsx` 단일 페이지, v2에서 `app/projects/[slug]/page.tsx` 추가.

**Consequences**  
- ✅ 빌드 시 HTML 생성 → SEO·초기 로딩·호스팅 비용 유리  
- ✅ `generateMetadata`, `sitemap.ts`, `robots.ts`로 SEO 표준화  
- ⚠️ 콘텐츠 변경 시 재배포 필요 (분기 1회이므로 허용)  
- ⚠️ App Router·RSC 개념 학습 필요 (점진적 Client Component 사용)

---

### ADR-002: TypeScript 필수 사용

**Context**  
콘텐츠 ID(`C-PROJ-001` 등)와 섹션 매핑이 많다. 런타임 오류보다 빌드타임 검증이 1인 유지보수에 유리.

**Decision**  
전 컴포넌트·콘텐츠 로더·유틸에 TypeScript를 사용하고, `content` 파싱 결과에 명시적 타입(`SiteContent`, `Project`, `Experience` 등)을 정의한다.

**Consequences**  
- ✅ `content.md` 필드 누락·오타를 빌드에서 조기 발견  
- ✅ IDE 자동완성으로 분기 업데이트 속도 향상  
- ⚠️ 초기 타입 정의 작성 비용 (1회)

---

### ADR-003: Tailwind CSS 4 + 디자인 토큰

**Context**  
전문적·미니멀 UI. `design-system.md`에 색·타이포·간격이 정의됨. CSS 기초 수준에서도 유틸리티 클래스로 빠르게 UI를 맞출 수 있어야 함.

**Decision**  
Tailwind CSS 4를 유지하고, `app/globals.css`의 `@theme`에 디자인 토큰을 선언한다. 섹션 컴포넌트는 Tailwind 유틸 + 최소 커스텀 CSS.

**Consequences**  
- ✅ 디자인 시스템과 코드 동기화 용이  
- ✅ 새 섹션 추가 시 일관된 spacing/color 재사용  
- ⚠️ 복잡한 애니메이션은 `@keyframes` 또는 소량 CSS 파일로 분리

---

### ADR-004: `docs/content.md` 빌드타임 파싱

**Context**  
콘텐츠는 `docs/content.md` 한 파일에서 관리하고 싶음. CMS·DB·헤드리스 CMS는 분기 1회 업데이트 대비 오버헤드가 크다.

**Decision**  
`docs/content.md`를 **단일 원본(Single Source of Truth)** 으로 두고, 빌드 전(또는 `next build` 시) **remark 기반 파서**로 섹션별 구조화 데이터를 생성한다. 생성 결과는 `lib/content/generated.ts`(또는 `content/.generated/`)에 출력한다.

**Consequences**  
- ✅ 마크다운만 수정하면 사이트 반영 — Git diff로 변경 이력 추적  
- ✅ CMS 비용·계정 관리 없음  
- ⚠️ 파서 스크립트 유지 필요 (섹션 형식 변경 시 스크립트도 업데이트)  
- ⚠️ 장기적으로 프로젝트 수 증가 시 `content/projects/*.md` 분리 가능 (ADR-008)

---

### ADR-005: Vercel 배포 + GitHub 연동

**Context**  
무료 우선, HTTPS·커스텀 도메인·자동 배포 필요. 이미 Vercel 프로젝트 연결됨.

**Decision**  
Vercel Hobby 플랜으로 프로덕션 운영. `main` 브랜치 push 시 자동 배포.

**Consequences**  
- ✅ 배포 파이프라인 설정 불필요  
- ✅ Preview 배포로 배포 전 검증  
- ⚠️ 빌드 실패 시 사이트 미갱신 → CI에서 `npm run build` 검증 권장

---

### ADR-006: Vercel Web Analytics

**Context**  
방문자 수·유입 경로만 가볍게 확인. GDPR·쿠키 배너 부담 최소화.

**Decision**  
v1.5(M5)부터 `@vercel/analytics`로 페이지뷰·referrer 수집. v1 출시 시 Analytics 미포함.

**Consequences**  
- ✅ 1줄 설치, 대시보드 통합  
- ⚠️ 세부 이벤트(프로젝트 클릭 등)는 v2에서 `@vercel/speed-insights` 또는 커스텀 이벤트 검토

---

### ADR-007: 문의 — mailto 우선, Formspree 선택

**Context**  
이메일 1개 공개. 복잡한 CRM·자체 백엔드 불필요.

**Decision**  
v1: `mailto:` + 이메일 텍스트 링크. v1.5: Formspree 폼 추가(이름·메시지·회신 이메일).

**Consequences**  
- ✅ 서버·DB·환경변수 SMTP 관리 없음  
- ⚠️ Formspree 무료 한도(50건/월) 모니터링

---

### ADR-008: 프로젝트 확장 — v2 독립 URL

**Context**  
IA 문서에서 v1은 인라인 확장(모달/아코디언), v2는 `/projects/[slug]` SEO·공유용으로 예약.

**Decision**  
v1: 싱글 페이지 + `#projects` 내 상세 확장. v2: `generateStaticParams`로 프로젝트별 SSG 페이지 추가. slug는 `content.md`의 Project EN 제목 kebab-case (`samsung-pyeongtaek-campus-masterplan`).

**Consequences**  
- ✅ v1 단순 유지, v2 SEO 강화(프로젝트명 검색)  
- ⚠️ v2 전환 시 canonical·OG 메타를 페이지별로 관리

---

## 4. 품질 목표 (Performance / Accessibility / SEO)

### 4.1 Lighthouse (모바일 기준, 프로덕션 URL)

| 카테고리 | 목표 | 측정 조건 |
|---|---|---|
| **Performance** | **≥ 90** | Slow 4G · Moto G Power 시뮬레이션 |
| **Accessibility** | **≥ 95** | axe 기반 자동 검사 + 수동 키보드 테스트 |
| **Best Practices** | **≥ 95** | HTTPS, console error 없음 |
| **SEO** | **≥ 95** | 메타·구조화 데이터·robots 정상 |

### 4.2 Core Web Vitals (필드 데이터 또는 Lighthouse Lab)

| 지표 | 목표 |
|---|---|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s |
| **INP** (Interaction to Next Paint) | ≤ 200ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 |

### 4.3 접근성 체크리스트

- 모든 인터랙티브 요소 **키보드 Tab** 도달 가능, `:focus-visible` 스타일 명확
- Hero·프로젝트 이미지 **`alt`** — `content.md`에 `alt` 필드 추가 또는 Summary KR/EN 활용
- 본문·배경 **명도 대비 WCAG AA** (4.5:1 이상, 대형 텍스트 3:1)
- **`lang="ko"`** 기본, EN 토글 시 `lang` 속성 또는 병기 구조 일관
- **`skip to main content`** 링크 1개
- 섹션 **`aria-labelledby`** 또는 시맨틱 heading 계층 (`h1` 1개, `h2` 섹션)

### 4.4 SEO 체크리스트

- `<title>`: `{이름} | {직무/한 줄 정체성}` — 예: `Jinkyung Kim | Urban Environmental Design Researcher`
- `<meta name="description">`: Hero Supporting Copy EN (155자 내외)
- **Open Graph / Twitter Card**: 이름, 대표 이미지, URL
- **`/sitemap.xml`**, **`/robots.txt`**
- **JSON-LD** `Person` + `WebSite` (선택: `CreativeWork` per project in v2)
- 프로젝트·경력 키워드는 **시맨틱 HTML 텍스트**로 노출 (이미지 속 텍스트만 의존 금지)
- v2: 프로젝트별 URL·canonical·OG title에 **프로젝트명 KR/EN** 포함

---

## 5. `docs/content.md` 활용 구조

### 5.1 원칙

1. **`docs/content.md` = 편집용 원본.** 웹사이트는 빌드타임에 파싱된 데이터만 참조한다.
2. **콘텐츠 ID(`C-PROJ-001` 등)를 유지**해 IA·와이어프레임·코드 간 추적성을 확보한다.
3. **한/영 필드는 쌍으로 작성** (`title` / `titleEn`, `summary` / `summaryEn`).
4. **표(table)는 구조화 데이터**, **문단은 서술형 카피**로 구분한다.

### 5.2 권장 섹션 헤더 규칙 (파서 친화)

현재 `content.md` 구조를 유지하되, 아래 **머신 파싱 힌트**를 추가한다.

```markdown
<!-- @section:meta -->
## 1. Basic Information / 기본 정보
<!-- fields: name, nameKr, position, positionKr, keywords, ... -->

<!-- @section:hero -->
## 4. Hero
<!-- @fields: oneLineKr, oneLineEn, supportingKr, supportingEn, cta -->

<!-- @section:projects -->
## 9. Projects / 프로젝트
### Project 01. {Title EN}
<!-- @id: C-PROJ-001 -->
<!-- @slug: samsung-pyeongtaek-campus-masterplan -->
| Item | Content |
| ID | C-PROJ-001 |
...
```

**파서가 추출하는 타입 (예시):**

```typescript
interface SiteContent {
  meta: SiteMeta;
  hero: HeroContent;
  about: AboutContent;
  projects: Project[];      // id, slug, title, titleEn, period, ...
  skills: SkillGroup[];
  experience: Experience[];
  awards: Award[];
  archive: ArchiveItem[];
  contact: ContactContent;
  navigation: NavItem[];
  sections: SectionTitles;
}
```

### 5.3 빌드 파이프라인

```text
docs/content.md
    ↓  npm run content:sync  (scripts/sync-content.ts)
lib/content/generated.ts     ← gitignore 가능, CI에서 매 빌드 생성
    ↓
app/page.tsx, components/*   ← import { siteContent } from '@/lib/content'
```

**package.json 스크립트 추가 예:**

```json
{
  "scripts": {
    "content:sync": "tsx scripts/sync-content.ts",
    "prebuild": "npm run content:sync",
    "build": "next build"
  }
}
```

### 5.4 v2 분리 전략 (프로젝트 증가 시)

프로젝트 8개 이상 또는 상세 본문이 길어지면:

```text
content/
├── site.md              # meta, hero, about, contact (공통)
└── projects/
    ├── C-PROJ-001.md    # frontmatter + Problem/Solution/Result 본문
    └── C-PROJ-002.md
```

`docs/content.md`는 **통합 편집본**으로 유지하고, `content:sync`가 `content/projects/`로 분할 생성하도록 확장한다.

---

## 6. 폴더 구조 제안

```text
snu-port/
├── app/
│   ├── layout.tsx              # lang, metadata, Analytics
│   ├── page.tsx                # 싱글 페이지 — 섹션 조합
│   ├── globals.css               # @theme 디자인 토큰
│   ├── sitemap.ts
│   ├── robots.ts
│   └── projects/
│       └── [slug]/
│           └── page.tsx          # v2: 프로젝트 상세 SSG
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # 앵커 Nav, 언어 토글
│   │   ├── Footer.tsx
│   │   └── SkipLink.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ArchiveSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── SectionHeading.tsx
│       ├── ProjectCard.tsx
│       ├── Timeline.tsx
│       └── LangToggle.tsx
│
├── lib/
│   ├── content/
│   │   ├── types.ts              # SiteContent, Project, ...
│   │   ├── index.ts              # export siteContent
│   │   └── generated.ts          # sync-content 출력 (생성 파일)
│   ├── seo.ts                    # metadata helpers, JSON-LD
│   └── utils.ts                  # slugify, date format
│
├── scripts/
│   └── sync-content.ts           # content.md → generated.ts
│
├── docs/
│   ├── content.md                # ★ 콘텐츠 원본
│   ├── tech-stack.md             # 본 문서
│   ├── ia-wireframe.md
│   └── design-system.md
│
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   │       ├── C-PROJ-001/
│   │       └── ...
│   ├── favicon.ico
│   └── og-default.jpg            # SNS 공유 기본 이미지
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

**레거시 정리:** 현재 `lib/portfolio-data.ts`의 하드코딩 데이터는 `content.md` sync 결과로 **점진적 대체**한다.

---

## 7. 확장 가능 구조 (프로젝트·콘텐츠 증가)

### 7.1 단계별 로드맵

| 단계 | 범위 | 기술적 변화 |
|---|---|---|
| **v1** | 싱글 페이지 + 4 프로젝트 + 앵커 Nav | `content.md` 파싱, 모달/아코디언 상세 |
| **v1.5** | Formspree 문의, Vercel Analytics | Client Component 1~2개 추가 |
| **v2** | `/projects/[slug]` 4~10개 | `generateStaticParams`, 프로젝트별 OG/JSON-LD |
| **v3** | 프로젝트 10+, Archive 필터 | `content/projects/*.md` 분리, 태그 필터(클라이언트) |
| **v4** | 다국어 URL `/en`, `/ko` (선택) | Next.js i18n routing 또는 middleware |

### 7.2 확장 시 유지할 규칙

- **콘텐츠 ID 불변:** `C-PROJ-001`은 slug·파일명이 바뀌어도 유지
- **이미지 경로 규칙:** `public/images/projects/{id}/hero.jpg`
- **타입 우선:** 새 필드는 `lib/content/types.ts`에 먼저 추가 → `content.md` → 파서
- **SEO:** 새 프로젝트 추가 = `sitemap.ts`에 slug 자동 포함 (generated 데이터 기반)

### 7.3 추가하지 않을 것 (YAGNI)

- Headless CMS (Sanity, Contentful) — 분기 1회 업데이트 대비 과잉
- 자체 백엔드·DB — 문의·콘텐츠 모두 정적/서드파티로 충분
- CSS-in-JS 런타임 — Tailwind로 대체
- heavy animation library — CSS transition + `prefers-reduced-motion` 우선

---

## 8. 보조 라이브러리 (최소 세트)

| 패키지 | 용도 | 도입 시점 |
|---|---|---|
| `remark`, `remark-gfm`, `unist-util-visit` | `content.md` 파싱 | v1 |
| `tsx` | sync 스크립트 실행 | v1 |
| `@vercel/analytics` | 방문·유입 분석 | v1.5 |
| `@vercel/speed-insights` | CWV 모니터링 (선택) | v1.5 |
| `next/image` | 프로젝트 이미지 최적화 | v1 (내장) |

---

## 9. 환경·운영

| 항목 | 값 |
|---|---|
| **Node.js** | 20 LTS 이상 |
| **패키지 매니저** | npm (현재 레포 기준) |
| **브랜치 전략** | `main` = 프로덕션, feature 브랜치 → PR → Preview |
| **필수 CI 체크** | `npm run content:sync && npm run build && npm run lint` |
| **커스텀 도메인** | Vercel Dashboard → Domains → DNS CNAME/A 레코드 |
| **비밀 정보** | Formspree form ID만 `.env.local` (gitignore) |

---

## 10. 구현 우선순위 (Tech Lead 권장)

1. `lib/content/types.ts` + `scripts/sync-content.ts` — `content.md` → `generated.ts`
2. `lib/portfolio-data.ts` 제거·마이그레이션 — 섹션 컴포넌트가 `siteContent` 사용
3. `app/layout.tsx` — metadata, JSON-LD, Analytics
4. 섹션 컴포넌트 — IA 순서(Hero → … → Contact), 앵커 id, 접근성
5. `public/images` — 프로필·프로젝트 이미지 (WebP, `next/image`)
6. Lighthouse·axe로 품질 목표 검증 후 프로덕션 배포

---

## 11. 관련 문서

| 문서 | 역할 |
|---|---|
| `docs/content.md` | 사이트 텍스트·데이터 원본 |
| `docs/ia-wireframe.md` | 섹션·앵커·와이어프레임 |
| `docs/design-system.md` | Tailwind `@theme` 토큰 소스 |
| `README.md` | 로컬 실행·배포 가이드 |

---

*최종 업데이트: 2026-06-02 · 작성: Frontend Tech Lead*
