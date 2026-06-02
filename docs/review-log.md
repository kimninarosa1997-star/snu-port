# QA 정합성 점검 — Jinkyung Kim Portfolio (1~5단계)

| 항목 | 내용 |
|---|---|
| **점검일** | 2026-06-02 |
| **점검 관점** | QA / 리뷰어 |
| **대상 산출물** | ① `content.md` · ② `ia-wireframe.md` · ③ `design-system.md` · ④ `tech-stack.md` · ⑤ `prd.md` |
| **PRD 버전** | v1.0 → **v1.1.2** (본 점검·P1·P2 반영) |

---

## 1. 점검 요약

| 구분 | 건수 | 비고 |
|---|---:|---|
| 충족 (RTM) | 52 | P0 FR/NFR 대부분 추적 가능 |
| 갭 | 14 | 콘텐츠·문서 간 불일치 |
| 모순 | 6 | v1 범위·Skip link·Hero ID 등 |
| 중복 | 4 | 의도적 중복 2 · 정리 필요 2 |

**종합 판정:** 5단계 산출물 **문서 정합성 P0~P2 완료**. M0(`sync-content.ts`) 착수 가능.

---

## 2. 요구사항 추적 매트릭스 (RTM)

> **상태:** 충족 = 5문서 간 ID·섹션·컴포넌트 일치 · 갭 = 누락·모순·미정의

### 2.1 글로벌·내비게이션

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-01 | §17 Navigation | Header / 7 앵커 | Nav (7-link) | 충족 |
| FR-02 | §17 | Header | Nav + Mobile Drawer | 충족 |
| FR-03 | C-OPT-002 | Header | LangToggle | 충족 |
| FR-04 | — | Global (DOM 최상단) | SkipLink → `#main-content` | 충족 *(v1.1 명확화)* |
| FR-05 | — | Header | Nav scrolled state | 충족 |
| FR-06 | §19 Footer, §6 Brand | Footer | Footer | 충족 |

### 2.2 Hero (`#home`)

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-07 | §4 One-line KR/EN | `#home` | Section + `display-xl` H1 | 충족 |
| FR-08 | §4 Supporting Copy KR/EN | `#home` | `body-l` copy | 충족 |
| FR-09 | §1 Keywords, C-OPT-006 | `#home` | Badge (Outline) | 충족 |
| FR-10 | §4 CTA #1, #3 | `#home` | Button Primary/Ghost | 충족 |
| FR-11 | — | `#home` | Section (min-height) | 충족 |

### 2.3 About (`#about`)

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-12 | C-REQ-001, C-REC-001/002, §5 | `#about` | Media + prose | 충족 |
| FR-13 | §5 Minimal KR/EN | `#about` (Mobile) | read-more collapse | 충족 |
| FR-14 | C-STR-001~003 | `#about` | Card ×3 | 충족 |
| FR-15 | C-INT-001~004 | `#about` | Badge ×4 | 충족 |
| FR-16 | C-EDU-001, C-EDU-002 | `#about` | Timeline / list | 충족 *(C-EDU-001 기관명 v1.1 보완)* |

### 2.4 Projects (`#projects`)

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-17 | C-REC-005, C-PROJ-001~004 | `#projects` | ProjectCard ×4 grid | 충족 |
| FR-18 | C-PROJ-* meta | `#projects` | Card title + caption | 충족 |
| FR-19 | C-PROJ-* P→S→R | `#projects` | expand panel | 충족 |
| FR-20 | — | `#projects` detail | Button → `#contact` | 충족 |
| FR-21 | C-PROJ-* Tools/Role/Result | `#projects` detail | caption meta | 충족 |

### 2.5 Skills (`#skills`)

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-22 | C-SKL-001~015 (4 groups) | `#skills` | Section + 4 columns | 충족 |
| FR-23 | C-SKL-* | `#skills` | Badge (Outline) | 충족 |
| FR-24 | — | `#skills` (Mobile) | accordion | 충족 |

### 2.6 Experience (`#experience`)

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-25 | C-EXP-001/002, C-REC-003/004 | `#experience` | Timeline | 충족 |
| FR-26 | C-EXP-003 | `#experience` | Timeline item | 충족 |
| FR-27 | C-AWD-001~005 | `#experience` | Awards list | 충족 |
| FR-28 | C-CERT-001~003 | `#experience` | Courses list | 충족 |
| FR-29 | — | `#experience` (Mobile) | tabs/accordion | 충족 (P2) |

### 2.7 Archive (`#archive`)

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-30 | §14 Introduction KR/EN | `#archive` | Section intro `body-l` | 충족 |
| FR-31 | C-ARC-001~007 | `#archive` | Timeline (vertical) | 충족 |
| FR-32 | C-ARC-* Type | `#archive` | Badge (Accent) | 충족 |

### 2.8 Contact (`#contact`)

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-33 | §16 Contact Copy KR/EN | `#contact` | Section 2-col | 충족 |
| FR-34 | C-REQ-002, C-CON-002 | `#contact` | Button Accent + `mailto:` | 충족 |
| FR-35 | C-CON-003~005 | `#contact` | *(비렌더)* | 충족 |
| FR-36 | C-CON-006, C-OPT-001 | `#contact` | disabled/hidden SNS | 충족 (P2) |
| FR-37 | — | `#contact` (Mobile) | copy button | 충족 (P2) |

### 2.9 콘텐츠·데이터·테마

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| FR-38 | `content.md` 전체 | build pipeline | `sync-content.ts` | 충족 *(파서 힌트 v1.1.1)* |
| FR-39 | C-* 전 ID | generated.ts | TypeScript types | 갭 *(구현 전, 힌트 준비됨)* |
| FR-40 | §17, §18 | all sections | Section `id` | 충족 |
| FR-41 | §18 Title KR/EN | all sections | `aria-labelledby` | 충족 |
| FR-42 | — | Global | theme toggle | 충족 |
| FR-43 | — | Global | reduced-motion | 충족 |
| FR-44 | — | `#experience`, `#archive` | Section alt band | 충족 (P2) |

### 2.10 핵심 NFR (샘플)

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트 | 상태 |
|---|---|---|---|:---:|
| NFR-01~04 | — | Global | Lighthouse targets | 충족 (tech-stack §4) |
| NFR-07~11 | C-REQ-001 alt | Global | a11y checklist | 충족 |
| NFR-13~17 | §1, §4 | `layout.tsx` | metadata, sitemap | 충족 |
| NFR-21 | C-CON-003~005 | Contact | anti-pattern | 충족 |
| NFR-28 | design-system §2 | `globals.css` | CSS tokens | 충족 |
| NFR-29 | `--layout-max-width` | all sections | Section inner | 충족 |

---

## 3. 누락 · 모순 · 중복

### 3.1 누락 (Missing)

| # | 항목 | 발견 위치 | 영향 | 수정안 | 반영 |
|:---:|:---|:---|:---|:---|:---:|
| M-01 | **Archive 섹션이 `content.md` §3 Section Mapping에 없음** | `content.md` §3 | RTM 단절, 파서·QA 추적 불가 | §3에 Archive 행 추가 (C-ARC-001~007, §14) | ✅ v1.1 |
| M-02 | **About §3 매핑 불완전** (C-REC-002, C-STR-*, C-INT-* 누락) | `content.md` §3 | About FR-12~15 추적 약화 | §3 About Content IDs 전체 나열 | ✅ v1.1 |
| M-03 | **C-EDU-001 기관명 누락** ("Architecture"만 기재) | `content.md` §8 | C-AWD-005(단국대)와 불일치 | `Dankook University / 단국대학교` 추가 | ✅ v1.1 |
| M-04 | **`content.md` 파서 힌트 없음** (`@section`, `@id`) | `content.md` vs `tech-stack.md` §5.2 | FR-38 구현 시 수동 파싱 위험 | §1~§19에 tech-stack 권장 주석 추가 | ✅ v1.1.1 |
| M-05 | **프로젝트 `@slug` frontmatter 없음** | `content.md` §9 | v2 ADR-008 slug 생성 불명확 | 각 C-PROJ-*에 `@slug` 주석 추가 | ✅ v1.1.1 |
| M-06 | **Header Desktop Contact CTA** — IA §5.2 P1만 정의, PRD FR 없음 | `ia-wireframe.md` §5.2 | 구현 우선순위 모호 | PRD FR-06b(P2) 추가, IA P2로 하향 | ✅ v1.1.2 |
| M-07 | **Hero §4 CTA 후보 #2 "Archive"** — 채택 여부 미기록 | `content.md` §4 | 의사결정 이력 누락 | §4에 "채택: #1 Projects, #3 Contact" 주석 | ✅ v1.1.1 |

### 3.2 모순 (Contradiction)

| # | 항목 | 문서 A | 문서 B | 수정안 | 반영 |
|:---:|:---|:---|:---|:---|:---:|
| C-01 | **Skip link 위치** | PRD FR-04 "Hero 직전" | IA §6 "Hero 직후" | a11y 표준: DOM 최상단 → `#main-content`(Hero 포함) | ✅ v1.1 |
| C-02 | **Hero 콘텐츠 ID** | PRD §8.1 `C-REC-001/002` | IA §3.2 `§4 One-line` | Hero = §4 + C-OPT-006; C-REC는 About 본문 | ✅ v1.1 |
| C-03 | **Vercel Analytics v1 범위** | `tech-stack.md` §1 "Analytics ✅ 선택" | PRD §3.2 Out of Scope v1.5 | tech-stack §1을 "v1.5 로드맵"으로 정정 | ✅ v1.1.1 |
| C-04 | **Formspree v1 범위** | `tech-stack.md` §2.5 "v1 선택적 Formspree" | PRD §3.2 v1.5 | tech-stack §2.5를 ADR-007과 동일하게 v1.5로 | ✅ v1.1.1 |
| C-05 | **Nav 링크 기본색** | design-system §4.3 `--color-neutral-500` | design-system §11 "500 on canvas AA 실패" | Nav default를 `--color-neutral-300`으로 상향 | ✅ v1.1.1 |
| C-06 | **design-system 파일명 vs 제목** | 파일: `design-system.md` | H1: `DESIGN.md` | H1을 `Design System — NOIR/288`로 통일 | ✅ v1.1.2 |

### 3.3 중복 (Duplicate)

| # | 항목 | 위치 | 판정 | 수정안 |
|:---:|:---|:---|:---|:---|
| D-01 | **C-OPT-006 Interests** | Hero Badge + About chips | ✅ 의도적 — Hero=키워드 요약, About=상세 chip | 유지, §3 매핑에 역할 주석 |
| D-02 | **C-REC-001/002 vs §5 About** | Recommended + §5 본문 | ✅ 의도적 — REC=요약, §5=확장 | 파서 시 §5 우선, REC fallback 문서화 |
| D-03 | **C-OPT-005 vs C-SKL-001~015** | Skills 일괄 태그 vs 그룹 | ⚠️ 정리 필요 | UI는 C-SKL-*만 사용; C-OPT-005는 legacy/SEO용 |
| D-04 | **Experience 연구 vs C-ARC-001** | C-EXP-002, C-ARC-001 기간·주제 겹침 | ✅ 의도적 — Experience=경력, Archive=맥락 | Archive intro 문구로 역할 구분 유지 |

---

## 4. 우선순위별 수정 작업 목록

### P0 — v1 출시 차단 (완료 / 즉시)

| ID | 작업 | 담당 문서 | 상태 |
|:---|:---|:---|:---:|
| P0-1 | `content.md` §3 Archive·About·Skills ID 매핑 보완 | content.md | ✅ |
| P0-2 | C-EDU-001 단국대학교 기관명 추가 | content.md | ✅ |
| P0-3 | Skip link 위치 PRD·IA 통일 | prd.md, ia-wireframe.md | ✅ |
| P0-4 | PRD §8.1 Hero 콘텐츠 ID 수정 | prd.md | ✅ |

### P1 — v1 권장 (M0~M1 착수 전)

| ID | 작업 | 담당 문서 | 상태 |
|:---|:---|:---|:---:|
| P1-1 | `content.md`에 `@section` / `@id` / `@slug` 파서 힌트 추가 | content.md | ✅ |
| P1-2 | `tech-stack.md` §1·§2.5 v1/v1.5 범위 문구를 PRD와 정렬 | tech-stack.md | ✅ |
| P1-3 | design-system Nav link color `--color-neutral-300`으로 수정 | design-system.md | ✅ |
| P1-4 | `content.md` §4 CTA 채택 결정 주석 (Projects + Contact) | content.md | ✅ |
| P1-5 | C-REQ-003에 C-EDU-001 기관명 교차 참조 | content.md §2 | ✅ |

### P2 — v1 선택 / v1.5

| ID | 작업 | 담당 문서 | 상태 |
|:---|:---|:---|:---:|
| P2-1 | design-system H1 ↔ 파일명 통일 | design-system.md | ✅ |
| P2-2 | PRD Header Contact CTA FR 추가 또는 IA 우선순위 하향 | prd.md / ia-wireframe.md | ✅ |
| P2-3 | Mobile 프로젝트 상세 bottom sheet vs accordion 구현 결정 문서화 | ia-wireframe.md | ✅ |
| P2-4 | Hero §6 Core Message 노출 여부 (선택 블록) UI 스펙 확정 | ia-wireframe.md, prd.md | ✅ |

---

## 5. 단계별 정합성 스코어

| 단계 | 산출물 | content | IA | design | tech | PRD | 비고 |
|:---:|:---|:---:|:---:|:---:|:---:|:---|:---|
| 1 | content.md | — | ○ | ○ | ○ | ○ | 파서 힌트·CTA·C-REQ 교차참조 완료 |
| 2 | ia-wireframe.md | ○ | — | ○ | ○ | ○ | Skip link v1.1 정렬 |
| 3 | design-system.md | ○ | ○ | — | ○ | ○ | Nav WCAG v1.1.1 |
| 4 | tech-stack.md | ○ | ○ | ○ | — | ○ | v1/v1.5 범위 v1.1.1 |
| 5 | prd.md | ○ | ○ | ○ | ○ | — | v1.1.2 — P0~P2 문서 정합 완료 |

**범례:** ○ 충족 · △ 부분 갭 · ✕ 불일치

---

## 6. v1.1 반영 변경 요약

| 파일 | 변경 내용 |
|---|---|
| `docs/content.md` | §3 Section Mapping — Archive 추가, About/Skills/Projects ID 보완; C-EDU-001 단국대학교; **v1.1.1:** `@section`/`@id`/`@slug` 힌트, CTA 채택, C-REQ-003↔C-EDU-001 |
| `docs/prd.md` | v1.1 → **v1.1.2** — FR-04, §8.1, Analytics; FR-06b, FR-11a, FR-19 Mobile |
| `docs/ia-wireframe.md` | §6 Skip link 위치 a11y 표준으로 수정 |
| `docs/tech-stack.md` | **v1.1.1:** §1 v1/v1.5 분리, §2.4·§2.5·ADR-006 범위 정렬 |
| `docs/design-system.md` | **v1.1.1:** Nav link `--color-neutral-300` (WCAG); **v1.1.2:** H1·핸드오프 문구 통일 |
| `docs/ia-wireframe.md` | Skip link; **v1.1.2:** Mobile accordion, Core Message, Header Contact P2 |
| `docs/review-log.md` | 본 문서 (P0~P2 완료 갱신) |

---

## 7. 다음 QA 게이트

M0 완료 시 아래를 **재점검**:

1. `npm run content:sync` 출력 `generated.ts`가 RTM의 모든 C-* ID를 포함하는지
2. Private 필드(C-CON-003~005)가 UI·JSON-LD 모두에서 제외되는지
3. Lighthouse CI KPI-05~07 목표 달성
4. `content.md` §3 ↔ 실제 렌더 섹션 7개 1:1 대조

---

*점검자: QA/Reviewer · PRD v1.1.2 연동 · 2026-06-02*
