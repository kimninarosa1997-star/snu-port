# 콘텐츠 키 가이드 — content.md ↔ 화면 매핑

> **대상:** `docs/content.md`만 수정해서 사이트를 업데이트하는 1인 운영자  
> **연관 문서:** `docs/tech-stack.md`, `docs/ia-wireframe.md`

---

## 1. 시작하기 (편집 → 배포)

1. `docs/content.md`를 편집한다.
2. 로컬에서 확인:

```bash
npm run content:sync   # lib/content/generated.ts 갱신
npm run dev
```

3. Git commit & push → Vercel이 `main` 브랜치를 자동 배포한다.

> `npm run build` 실행 시 `prebuild` 훅으로 `content:sync`가 **자동 실행**된다.

---

## 2. 빠른 참조 — 섹션 ↔ content.md 위치

| 화면 섹션 | content.md | 주요 필드 | 컴포넌트 |
|---|---|---|---|
| **Hero** | §4 Hero | `One-line Introduction`, `Supporting Copy`, CTA 후보 | `HeroSection` |
| **About** | §5 About, §7 Strengths, §8 Education, §15 Interests | `About KR/EN`, 강점 표, 학력 표 | `AboutSection` |
| **Projects** | §9 Projects | `C-PROJ-001~004`, `@slug` | `ProjectsSection`, `/projects/[slug]` |
| **Skills** | §11 Skills | `C-SKL-001~015`, 4 Skill Group | `SkillsSection` |
| **Experience** | §10, §12, §13 | 경력·수상·교육 표 | `ExperienceSection` |
| **Archive** | §14 Archive | intro + `C-ARC-001~007` | `ArchiveSection` |
| **Contact** | §16 Contact | `Contact Copy`, `C-CON-002` Email | `ContactSection` |
| **Header Nav** | §17 Navigation | Order 1~7 | `Header` |
| **섹션 제목** | §18 Section Titles | Title KR/EN, Description | `SectionHeading` |
| **Footer** | §19 Footer | Footer copy | `Footer` |
| **SEO / OG** | §1 meta, §4 Supporting EN | Name, Position, Supporting Copy EN | `app/layout.tsx`, `lib/seo.ts` |

---

## 3. Content ID 규칙

| 접두사 | 예시 | 용도 |
|---|---|---|
| `C-PROJ-*` | C-PROJ-001 | 프로젝트 (slug URL에 사용) |
| `C-SKL-*` | C-SKL-001 | 스킬 |
| `C-EXP-*` | C-EXP-001 | 경력 |
| `C-AWD-*` | C-AWD-001 | 수상 |
| `C-CERT-*` | C-CERT-001 | 교육·수료 |
| `C-ARC-*` | C-ARC-001 | 아카이브 |
| `C-INT-*` | C-INT-001 | 관심분야 |
| `C-STR-*` | C-STR-001 | 핵심 강점 |
| `C-EDU-*` | C-EDU-001 | 학력 |
| `C-CON-*` | C-CON-002 | 연락처 |

**ID는 한 번 부여하면 변경하지 않는다.** slug·파일명만 바꿀 수 있다.

---

## 4. 자주 하는 변경

### 4.1 Hero 한 줄 소개 바꾸기

**수정 위치:** §4 `One-line Introduction / 한 줄 소개` 및 `One-line Introduction EN`

**영향:** Hero H1, §18 Hero 섹션 제목(동일 문구인 경우), OG subtitle

### 4.2 이메일 변경

**수정 위치:**
- §2 Content Inventory `C-REQ-002` (Contact 행)
- §16 Contact 표 `C-CON-002`

**영향:** Contact mailto, Footer 이메일, JSON-LD Person

### 4.3 프로젝트 추가 (v2)

1. §9에 새 블록 추가:

```markdown
## Project 05. New Project Title
<!-- @id: C-PROJ-005 -->
<!-- @slug: new-project-title -->

| Item | Content |
| ID | C-PROJ-005 |
| Project KR | ... |
...
```

2. `scripts/sync-content.ts`의 `EXPECTED_COUNTS.projects` 값을 5로 올린다.
3. `npm run content:sync` → `/projects/new-project-title` SSG 페이지 자동 생성.

### 4.4 프로젝트 상세 URL (slug)

**수정 위치:** `<!-- @slug: samsung-pyeongtaek-campus-masterplan -->`

**영향:** `/projects/[slug]`, sitemap.xml, JSON-LD CreativeWork URL

---

## 5. 파서 HTML 주석 (선택)

`content.md` 상단 및 프로젝트 블록에 힌트 주석을 사용한다:

```markdown
<!-- @section:hero -->
<!-- @id: C-PROJ-001 -->
<!-- @slug: my-project-slug -->
```

형식을 바꿀 때는 `scripts/sync-content.ts`도 함께 수정한다.

---

## 6. 코드에서 데이터 읽기

```typescript
import { siteContent } from "@/lib/content";

siteContent.hero.oneLineKr;
siteContent.projects.find((p) => p.id === "C-PROJ-001");
siteContent.contact.email;
```

---

## 7. 문제 해결

| 증상 | 원인 | 해결 |
|---|---|---|
| `content:sync` 실패 — Expected N projects | 프로젝트 블록 형식 오류 또는 개수 불일치 | §9 표·`@slug`·PSR bullet 확인, `EXPECTED_COUNTS` 조정 |
| `Contact email missing` | C-REQ-002 Email 형식 | `Email: xxx@...` 패턴 유지 |
| 빌드 TS error | `types.ts` ↔ `generated.ts` 불일치 | `npm run content:sync` 재실행 |
| 프로필 이미지 안 보임 | 파일 없음 | `public/images/profile.jpg` 추가 (또는 placeholder) |
| Private 필드 노출 | Contact 표 | `Private` 값은 UI에서 자동 숨김 — 실수로 이메일 대신 Private 입력했는지 확인 |

---

## 8. Private / 공개 필드

Contact 표에서 `Private` 또는 `To be added later`는 UI에 노출되지 않는다.  
GitHub·LinkedIn·Phone은 현재 Private 처리되어 있다.

---

*최종 업데이트: 2026-06-02*
