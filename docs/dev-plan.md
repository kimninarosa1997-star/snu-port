# 개발 계획서 — Jinkyung Kim Portfolio v1

| 항목 | 내용 |
|---|---|
| **문서명** | PRD v1.1.2 실행 가능 WBS |
| **작성일** | 2026-06-02 |
| **작성 관점** | Tech Lead |
| **입력 소스** | `docs/prd.md` v1.1.2, `docs/tech-stack.md`, 현재 레포 상태 |
| **예상 기간** | 14~21일 (1인 파트타임) |

---

## 1. 개요

본 문서는 PRD v1.1.2의 FR/NFR을 **M1~M4 마일스톤**으로 분해한 실행 계획이다. 구현은 반드시 아래 **6단계 레이어 순서**를 따른다.

```text
① 부트스트랩 → ② 디자인 토큰 → ③ 공통 컴포넌트 → ④ 페이지/섹션
    → ⑤ 콘텐츠 중앙화 → ⑥ SEO / 접근성 / 성능
```

### 1.1 현재 레포 스냅샷 (2026-06-02)

| 영역 | 상태 | 비고 |
|---|---|---|
| `scripts/sync-content.ts`, `lib/content/types.ts`, `generated.ts` | ✅ 부분 완료 | 파서·타입 존재, 섹션 커버리지 확장 필요 |
| `app/globals.css` NOIR/288 토큰 | ✅ 부분 완료 | `@theme` 매핑·라이트 테마 보완 필요 |
| `SkipLink`, `LangToggle`, `LanguageProvider` | ✅ 존재 | FR-03·FR-04 연동 검증 필요 |
| `HeroSection`, `AboutSection` | ✅ 존재 | `siteContent` 연동·FR 수용 기준 재검증 |
| `WorkSection`, `SkillsSection` | ✅ 제거됨 | `components/sections/*` + `siteContent` |
| Projects / Experience / Archive / Contact 섹션 | ❌ 미구현 | IA 7섹션 중 3섹션 누락 |
| SEO (`sitemap.ts`, `robots.ts`, `lib/seo.ts`) | ❌ 미구현 | M4 |
| CI (GitHub Actions) | ❌ 미구현 | NFR-24 |

---

## 2. 구현 순서 (레이어)

| 순서 | 레이어 | 마일스톤 | 산출물 |
|:---:|---|---|---|
| ① | **부트스트랩** | M1 | Next.js 15 SSG, `content:sync` 파이프, 폴더 구조, `prebuild` 훅 |
| ② | **디자인 토큰** | M1 | `globals.css` `@theme`, motion·spacing·color 전량 토큰화 |
| ③ | **공통 컴포넌트** | M1 | Button, Badge, Card, Timeline, SectionHeading, Nav shell |
| ④ | **페이지/섹션** | M1~M3 | 7섹션 + Header/Footer, IA 순서·앵커 id |
| ⑤ | **콘텐츠 중앙화** | M3 | UI 문구 단일 소스, `portfolio-data.ts` 제거, 회귀 검증 |
| ⑥ | **SEO / 접근성 / 성능** | M4 | metadata, Lighthouse 게이트, CI, Vercel 배포 |

> **원칙:** ④에서 임시 하드코딩 문자열을 허용하되, ⑤ 완료 전에는 **Launch 금지**. ⑤는 UI/스타일/동작 불변을 DoD로 한다.

---

## 3. 마일스톤 요약

| 마일스톤 | 기간 | 목표 | 완료 게이트 |
|---|---|---|---|
| **M1** | 4~5일 | 기반·토큰·공통 UI·Hero·About·글로벌 크롬 | `content:sync` green, Header/Footer/Skip, Hero·About FR P0 |
| **M2** | 4~5일 | Projects·Skills·Experience | 4건 accordion, Skills 4그룹, Experience timeline+awards |
| **M3** | 3~4일 | Archive·Contact·테ma·**콘텐츠 중앙화** | mailto CTA, 7섹션 완성, `portfolio-data.ts` 삭제, 회귀 통과 |
| **M4** | 2~3일 | SEO·a11y·성능·CI·운영 문서·Launch | Lighthouse 4카테고리, `npm run build` CI green, ops 가이드 |

---

## 4. WBS — 태스크 리스트

> **컬럼:** TASK-ID · 관련 FR/NFR · 내용 · DoD · 의존성 · 규모(S/M/L)

### M1 — 기반·디자인 시스템·Hero·About·글로벌 크롬

| TASK-ID | FR/NFR | 내용 | DoD | 의존성 | 규모 |
|---|---|---|---|---|---|
| M1-01 | FR-38, FR-39, NFR-23 | **부트스트랩:** Node 20+, npm 스크립트(`content:sync`, `prebuild`, `build`, `lint`) 정합, `lib/content/index.ts` export 정리 | `npm run content:sync` exit 0, `SiteContent` 타입 compile | — | S |
| M1-02 | FR-38, FR-39 | **콘텐츠 파서 확장:** `sync-content.ts`가 `content.md` §1~§19 전 섹션(C-PROJ-*, C-SKL-*, C-EXP-*, C-AWD-*, C-ARC-*, nav, footer) 파싱 | `generated.ts`에 7섹션 데이터·Content ID 추적 가능 | M1-01 | L |
| M1-03 | NFR-28, NFR-29, NFR-32 | **디자인 토큰:** `globals.css`에 NOIR/288 전 토큰(`@theme`), dark 기본 + light `[data-theme="light"]`, motion 변수, 8px grid | 컴포넌트 내 hex/rgb 하드코드 0건(신규 코드 기준) | M1-01 | M |
| M1-04 | FR-43, NFR-08 | **Motion·a11y 토큰:** `prefers-reduced-motion: reduce` 시 duration 0ms, `:focus-visible` = `--shadow-focus` | Hero·Nav transition reduce 시 비활성 확인 | M1-03 | S |
| M1-05 | FR-01~02, FR-04~06, NFR-09~10 | **레이아웃 쉘:** `Header`(7 앵커 Nav, scroll>40px overlay), `Footer`, `SkipLink`, `app/page.tsx` `<main id="main-content">` | Desktop 가로 Nav / Mobile 햄burger+드로어(Esc, focus trap), Skip link Tab 노출 | M1-03 | M |
| M1-06 | — | **공통 UI — Button:** Primary / Ghost / Accent 변형, min-height 44px, disabled | Storybook 없이 수동: 3 variant × hover/focus-visible | M1-03 | S |
| M1-07 | FR-09, FR-15, FR-23 | **공통 UI — Badge:** Outline / Accent, radius 0 | Hero·Skills에서 재사용 가능 | M1-03 | S |
| M1-08 | FR-14, FR-17~18 | **공통 UI — Card:** title + caption 계층, hover border only (scale/shadow bloom 금지) | design-system §4.2 Anti-pattern 준수 | M1-03 | S |
| M1-09 | FR-16, FR-25, FR-31 | **공통 UI — Timeline / SectionHeading:** left rule, `aria-labelledby` 패턴 | Experience·Archive에서 재사용 | M1-03 | M |
| M1-10 | FR-03, NFR-12 | **LangToggle + LanguageProvider:** KR/EN 전환, sessionStorage 유지, `lang` 속성 일관 | Nav·Hero 라벨 토글 동작 | M1-05 | M |
| M1-11 | FR-07~11, FR-11a, FR-40 | **HeroSection:** display-xl 1개, Supporting Copy, Badge, CTA 2개, min-height, Core Message 미노출 | Mobile 첫 화면 CTA 노출, `#home` 앵커 | M1-02, M1-06~07, M1-10 | M |
| M1-12 | FR-12~16, FR-40~41 | **AboutSection:** 프로필 `next/image`, 본문 KR/EN, read more(mobile), 강점 3, 관심 4, 학력 2 | grayscale default, alt 제공, `#about` | M1-02, M1-08~09 | M |
| M1-13 | NFR-06 | **M1 빌드 검증:** `npm run build` 실행, 실패 시 원인 분석·수정 반영 | build exit 0, TypeScript error 0 | M1-11, M1-12 | S |

---

### M2 — Projects · Skills · Experience

| TASK-ID | FR/NFR | 내용 | DoD | 의존성 | 규모 |
|---|---|---|---|---|---|
| M2-01 | FR-17~21, FR-40 | **ProjectsSection + ProjectCard:** 4열→2×2→1열 그리드, meta 필드, `#projects` | Desktop 4열, Tablet 2×2, Mobile 1열 | M1-08, M1-02 | M |
| M2-02 | FR-19, FR-43 | **프로젝트 인라인 accordion:** 카드 클릭/Enter → Problem/Solution/Result 패널, Mobile full-width( bottom sheet 금지) | 키보드 expand/collapse, reduced-motion 준수 | M2-01 | L |
| M2-03 | FR-20, FR-21 | **프로젝트 상세 CTA·메타:** Tools/Role/Result caption, 하단 `#contact` CTA | P1 필드 노출 | M2-02 | S |
| M2-04 | FR-22~24, FR-40 | **SkillsSection:** 4 Skill Group, C-SKL-001~015 Badge, Mobile accordion | Desktop 4열, Mobile 4-group accordion | M1-07, M1-02 | M |
| M2-05 | FR-25~28, FR-40 | **ExperienceSection:** Work/Research timeline, 인턴, 수상 5, 교육 3 | Problem/Solution/Result 구조, `#experience` | M1-09, M1-02 | L |
| M2-06 | FR-29 | **Experience Mobile UX (P2):** Work/Research/Awards/Courses 탭 또는 accordion | 4 영역 모바일 접근 가능 | M2-05 | M |
| M2-07 | FR-40 | **page.tsx IA 정합:** 섹션 순서 Hero→About→Projects→Skills→Experience→(Archive)→(Contact) 중간 상태 반영 | DOM 순서 = Trust Arc | M2-01~05 | S |
| M2-08 | NFR-05 | **이미지 자산:** `public/images/profile.jpg`, `projects/C-PROJ-*/` WebP, `next/image` dimensions | CLS ≤ 0.1 기준 width/height 지정 | M2-01 | M |
| M2-09 | NFR-06 | **M2 빌드 검증:** `npm run build` + accordion client boundary 확인 | build exit 0 | M2-01~08 | S |

---

### M3 — Archive · Contact · 테마 · 콘텐츠 중앙화

| TASK-ID | FR/NFR | 내용 | DoD | 의존성 | 규모 |
|---|---|---|---|---|---|
| M3-01 | FR-30~32, FR-40 | **ArchiveSection:** intro KR/EN, 7건 vertical timeline, Type Accent Badge | `#archive`, left rule timeline | M1-07, M1-09 | M |
| M3-02 | FR-33~35, FR-40, NFR-21 | **ContactSection:** Copy KR/EN, mailto CTA, accessible name, Private 필드 UI 미노출 | `kimninarosa97@naver.com` 링크, placeholder 링크 0 | M1-06, M1-02 | M |
| M3-03 | FR-36~37, FR-06b | **Contact P2:** Instagram 비활성/숨김, 이메일 클립보드 복사, Desktop Header Contact Ghost | copy feedback, Desktop ≥1024px만 Ghost | M3-02, M1-05 | S |
| M3-04 | FR-42, FR-44 | **ThemeToggle:** dark 기본, manual light + `prefers-color-scheme`, alt band bg (P2) | `data-theme` CSS 변수 스왑 | M1-03 | M |
| M3-05 | FR-05 | **Header scrolled state (P1):** `--color-surface-overlay` + hairline | scroll>40px transition | M1-05 | S |
| M3-06 | FR-06 | **Footer 브랜드 문장:** §19 Footer copy | `© Jinkyung Kim. Urban, Architecture, Research Archive.` | M1-02 | S |
| M3-07 | FR-41 | **섹션 접근성 마감:** 각 section `aria-labelledby` = §18 Title KR/EN, h1 1개·h2 섹션 | axe critical 0 (섹션 scope) | M3-01~02 | S |
| | | **── 콘텐츠 중앙화 (필수 단계) ──** | | | |
| M3-C01 | FR-38~39, NFR-27 | **UI 문구 단일 파일:** `lib/content/ui-strings.ts`(또는 `generated.ts` 내 `ui` namespace)에 Nav 라벨, 버튼, aria-label, 토스트, 섹션 fallback 문구 집중 | grep `components/` 내 한글·영문 UI literal 목록 작성 → 단일 파일 100% 매핑 | M1-02 | M |
| M3-C02 | FR-38~39 | **섹션별 객체화:** `siteContent.hero`, `.about`, `.projects` … + `ui.nav`, `ui.cta`, `ui.a11y` 타입 정의·export | `types.ts`와 `generated.ts` 필드 1:1, Content ID 주석 | M3-C01, M1-02 | M |
| M3-C03 | NFR-27 | **하드코딩 문자열 전수 치환:** `portfolio-data.ts` 제거, `WorkSection`→`ProjectsSection` 등 레거시 컴포넌트 삭제·통합, 전 컴포넌트 `siteContent`/`uiStrings` import | `lib/portfolio-data.ts` 삭제, import 0건 | M3-C02, M2-* | L |
| M3-C04 | G-04, KPI-10 | **UI/스타일/동작 불변 회귀 체크:** 7섹션 스크린샷·앵커·accordion·lang·theme 수동 체크리스트 | PRD §7.3 Go/No-Go 1~5 항목 통과 | M3-C03 | M |
| M3-08 | NFR-06 | **M3 빌드 검증:** `npm run content:sync && npm run build` | build exit 0, content sync integrity 100% | M3-C04 | S |

---

### M4 — SEO · 접근성 · 성능 · CI · 운영 · Launch

| TASK-ID | FR/NFR | 내용 | DoD | 의존성 | 규모 |
|---|---|---|---|---|---|
| M4-01 | NFR-14~16, NFR-19 | **`app/layout.tsx` metadata:** title, description(155자 EN), OG/Twitter, `lang="ko"` | View Source 검증 | M3-C04 | M |
| M4-02 | NFR-17~18 | **`sitemap.ts`, `robots.ts`, `lib/seo.ts`:** JSON-LD Person+WebSite | `/sitemap.xml`, `/robots.txt` 200 | M4-01 | M |
| M4-03 | NFR-07~11 | **접근성 감사:** axe + 키보드 전 경로(Nav, drawer, accordion, mailto, toggles) | Lighthouse a11y ≥ 95 | M3-07 | M |
| M4-04 | NFR-01~04, NFR-31 | **성능 최적화:** LCP hero, image priority, font subset, console error 0 | Lighthouse perf ≥ 90, LCP ≤ 2.5s, CLS ≤ 0.1 | M2-08 | M |
| M4-05 | NFR-24 | **CI:** GitHub Actions `content:sync && build && lint` on PR/main | PR check green | M3-08 | S |
| M4-06 | NFR-26, KPI-09 | **Vercel 프로덕션 배포:** `main` push, Preview URL PR 검증, HTTPS | snu-port.vercel.app live | M4-05 | S |
| M4-07 | NFR-24, KPI-05~07 | **Lighthouse CI 리포트:** Mobile 4카테고리 기록, 미달 항목 backlog | perf/a11y/seo/bp 목표치 문서화 | M4-04, M4-03 | M |
| M4-08 | G-04, NFR-27 | **운영 문서 — 초보자용 콘텐츠 키 가이드:** `docs/content-keys-guide.md` — "어떤 키 수정 → 어떤 화면 변경" 표 + 예시 diff | Hero/Projects/Contact 등 §별 키↔UI 매핑表, `content.md` 편집→재배포 절차 | M3-C04 | M |
| M4-09 | — | **README 갱신:** `portfolio-data.ts` 언급 제거, `content:sync`·배포·키 가이드 링크 | README와 코드 일치 | M4-08 | S |
| M4-10 | PRD §7.3 | **Launch Go/No-Go 체크리스트 실행** | 7항목 전부 ✅ | M4-06~09 | S |
| M4-11 | NFR-06 | **Launch 빌드 검증 (최종):** `npm run build` — 실패 시 원인 분석·핫픽스·재빌드 | production deploy = green build | M4-10 | S |

---

## 5. 콘텐츠 중앙화 상세 (M3-C01~C04)

PRD G-04 · FR-38 · NFR-27 충족을 위한 필수 단계. **섹션 UI 구현(④) 완료 후, SEO(⑥) 착수 전** 수행한다.

### 5.1 데이터 소스 계층

```text
docs/content.md          ← 편집 원본 (분기 1회)
    ↓ content:sync
lib/content/generated.ts ← 구조화 데이터 (프로젝트·경력·본문)
lib/content/ui-strings.ts← UI 크롬 문구 (Nav, 버튼, aria) — sync 또는 수동 co-locate
    ↓
components/*             ← import only, literal string 금지
```

### 5.2 하위 태스크 체크리스트

- [x] **M3-C01** 모든 UI 문구를 단일 파일(`ui-strings.ts` 또는 `generated.ui`)로 모으기
- [x] **M3-C02** 섹션별 객체화 — `SiteContent` 하위 타입과 Content ID(`C-PROJ-001` 등) 유지
- [x] **M3-C03** 하드코딩 문자열 전수 치환 — `portfolio-data.ts`·레거시 `WorkSection`/`Hero.tsx`/`AboutSection.tsx`(루트) 정리
- [x] **M3-C04** UI/스타일/동작 불변 회귀 체크 — KR/EN, theme, accordion, mailto, 7 앵커

### 5.3 치환 대상 (레거시)

| 파일 | 조치 |
|---|---|
| `lib/portfolio-data.ts` | 삭제 |
| `components/WorkSection.tsx` | `ProjectsSection`으로 대체 후 삭제 |
| `components/Hero.tsx`, `components/AboutSection.tsx` (루트) | `sections/*` 통합 후 삭제 |
| `components/CTABanner.tsx` | Contact 섹션 흡수 또는 삭제 |
| `README.md` | `portfolio-data.ts` 안내 → `content.md` 안내 |

---

## 6. 검증 태스크 (Build Gate)

모든 마일스톤 말미와 Launch 전에 **`npm run build`** 를 실행한다. 실패 시 아래 절차를 따른다.

| Gate ID | 시점 | 명령 | 통과 기준 |
|---|---|---|---|
| GATE-M1 | M1 완료 | `npm run build` | exit 0 |
| GATE-M2 | M2 완료 | `npm run build` | exit 0 |
| GATE-M3 | M3-C04 후 | `npm run content:sync && npm run build` | exit 0, TS error 0 |
| GATE-M4 | Launch 직전 | `npm run build` | exit 0 + Vercel deploy success |

### 6.1 빌드 실패 시 대응 절차

1. **로그 수집:** TypeScript / Next / sync-content stderr 전문 저장
2. **원인 분류:**
   - `content:sync` 파싱 오류 → `content.md` 형식·`@id` 힌트 점검 (M1-02)
   - TS 타입 불일치 → `types.ts` ↔ `generated.ts` 필드 동기화 (M3-C02)
   - Client/Server boundary → `"use client"` 누락·metadata import 위치 (M2-02)
   - Image domain/path → `public/images` 경로·`next/image` props (M2-08)
3. **수정·재실행:** 해당 TASK-ID에 핫픽스 후 GATE 재시도
4. **기록:** `docs/review-log.md`에 실패 원인·해결 1줄 추가 (선택)

---

## 7. 리스크와 대응책

| ID | 리스크 | 영향 | 확률 | 대응책 | 담당 TASK |
|---|---|---|---|---|---|
| R-01 | `content.md` 파서가 § 형식 변경에 취약 | 빌드 실패, 콘텐츠 누락 | 중 | `@section`/`@id` HTML 주석 힌트 고정, sync 단위 테스트 샘플, GATE-M* | M1-02 |
| R-02 | ④→⑤ 전환 시 UI 회귀 (accordion·i18n) | Launch 지연 | 중 | M3-C04 수동 체크리스트, 스크린샷 before/after | M3-C04 |
| R-03 | `portfolio-data`·`siteContent` 이중 데이터 |文案 불일치 |高 | M3-C03에서 레거시 일괄 삭제, grep gate | M3-C03 |
| R-04 | 프로젝트·프로필 이미지 미제공 | LCP·CLS 악화, 빈 UI | 중 | placeholder blur, dimensions 고정, 콘텐츠팀 C-REQ-001 확보 | M2-08 |
| R-05 | Mobile Nav focus trap 미구현 | a11y Lighthouse 미달 | 중 | eslint jsx-a11y, 수동 Tab/Esc 테스트 | M1-05, M4-03 |
| R-06 | App Router Client Component 과다 | JS 번들↑, INP 악화 |低 | accordion·toggle만 client, 나머지 RSC | M2-02 |
| R-07 | Lighthouse perf < 90 (display-xl·font) | 출시 게이트 실패 | 중 | font subset, hero animation reduce, image priority | M4-04 |
| R-08 | Private 연락처 실수 노출 | 프라이버시 |低 | `types.ts`에서 optional + UI render guard, PR checklist | M3-02, M4-10 |
| R-09 | Vercel 빌드 ≠ 로컬 빌드 | deploy fail |低 | CI = Vercel 동일 Node 20, `prebuild` content:sync | M4-05 |
| R-10 | 1인 개발 일정 slip | M2/M3 병목 | 중 | P2(FR-06b, FR-29, FR-36~37) Launch 후 backlog | M4-10 |

---

## 8. 실행 체크리스트 (마스터)

복사해 진행 상황을 표시한다. `[x]` = 완료.

### M1 — 기반·Hero·About

- [x] M1-01 부트스트랩·npm 스크립트
- [x] M1-02 콘텐츠 파서 전 섹션 확장
- [x] M1-03 디자인 토큰 `@theme` 완성
- [x] M1-04 reduced-motion·focus 토큰
- [x] M1-05 Header / Footer / SkipLink
- [ ] M1-06 Button 공통 컴포넌트
- [ ] M1-07 Badge 공통 컴포넌트
- [ ] M1-08 Card 공통 컴포넌트
- [ ] M1-09 Timeline / SectionHeading
- [x] M1-10 LangToggle + Provider
- [x] M1-11 HeroSection
- [x] M1-12 AboutSection
- [x] M1-13 **GATE-M1** `npm run build`

### M2 — Projects · Skills · Experience

- [x] M2-01 ProjectsSection + ProjectCard
- [x] M2-02 프로젝트 accordion
- [x] M2-03 프로젝트 상세 CTA·메타
- [x] M2-04 SkillsSection
- [x] M2-05 ExperienceSection
- [ ] M2-06 Experience Mobile UX (P2)
- [x] M2-07 page.tsx IA 정합
- [x] M2-08 이미지 자산·next/image
- [x] M2-09 **GATE-M2** `npm run build`

### M3 — Archive · Contact · 테마 · 콘텐츠 중앙화

- [x] M3-01 ArchiveSection
- [x] M3-02 ContactSection
- [x] M3-03 Contact P2 (clipboard, Instagram, Ghost CTA)
- [x] M3-04 ThemeToggle
- [x] M3-05 Header scrolled state
- [x] M3-06 Footer copy
- [x] M3-07 섹션 aria-labelledby
- [x] M3-C01 UI 문구 단일 파일
- [x] M3-C02 섹션별 객체화
- [x] M3-C03 하드코딩 전수 치환·레거시 삭제
- [x] M3-C04 회귀 체크 (UI/스타일/동작 불변)
- [x] M3-08 **GATE-M3** `content:sync && build`

### M4 — SEO · 품질 · Launch · 문서

- [x] M4-01 layout metadata·OG
- [x] M4-02 sitemap·robots·JSON-LD
- [ ] M4-03 접근성 감사 (Lighthouse a11y ≥ 95)
- [ ] M4-04 성능 최적화 (Lighthouse perf ≥ 90)
- [x] M4-05 GitHub Actions CI
- [ ] M4-06 Vercel 프로덕션 배포
- [ ] M4-07 Lighthouse CI 리포트
- [x] M4-08 **`docs/content-keys-guide.md`** 초보자용 키↔화면 가이드
- [x] M4-09 README 갱신
- [ ] M4-10 Launch Go/No-Go
- [x] M4-11 **GATE-M4** 최종 `npm run build`

---

## 9. 운영 문서 태스크 (M4-08) 목차 초안

`docs/content-keys-guide.md` 작성 시 포함할 섹션:

1. **시작하기** — `docs/content.md` 편집 → `npm run content:sync` → commit → Vercel 배포
2. **키↔화면 빠른 참조表** — Hero `oneLineKr` → Hero H1, `C-PROJ-001` → Projects 카드 1번 …
3. **섹션별 상세** — 수정 필드, KR/EN 쌍 규칙, Content ID 불변 안내
4. **UI 크롬 문구** — Nav·버튼·aria-label (`ui-strings` 또는 §17 Navigation)
5. **자주 하는 변경** — 프로젝트 추가, 이메일 변경, 수상 1건 추가 예시
6. **문제 해결** — sync 실패, build TS error, 이미지 경로

---

## 10. FR/NFR 커버리지 매트릭스 (요약)

| 우선순위 | FR/NFR 수 | 주요 마일스톤 |
|---|---|---|
| P0 FR | 28건 | M1~M3 |
| P1 FR | 14건 | M1~M4 |
| P2 FR | 6건 | M3~M4 (Launch 후 backlog 가능) |
| P0 NFR | 18건 | M1~M4 |
| P1 NFR | 10건 | M4 |

**P2 Launch 후 backlog 권장:** FR-06b, FR-29, FR-36, FR-37, FR-44

---

## 11. 관련 문서

| 문서 | 용도 |
|---|---|
| `docs/prd.md` | FR/NFR·KPI·Go/No-Go |
| `docs/tech-stack.md` | 스택·ADR·폴더 구조 |
| `docs/content.md` | 콘텐츠 SSOT |
| `docs/design-system.md` | 토큰·컴포넌트 스펙 |
| `docs/ia-wireframe.md` | 7섹션·반응형·Trust Arc |
| `docs/content-keys-guide.md` | *(M4-08 산출)* 운영 가이드 |

---

## 12. 문서 이력

| 버전 | 날짜 | 변경 |
|---|---|---|
| v1.0 | 2026-06-02 | PRD v1.1.2 + tech-stack 기반 초안 WBS, M1~M4, 콘텐츠 중앙화·Build Gate·리스크·체크리스트 |

---

**다음 액션:** M4-03~04 Lighthouse 감사, M4-06 Vercel 배포, M4-10 Launch Go/No-Go.
