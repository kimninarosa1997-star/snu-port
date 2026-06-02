# 변경 이력 (Changelog)

포트폴리오 배포 후 개선 작업 기록. 분석·피드백·Lighthouse 기준으로 우선순위를 부여한다.

---

## 2026-06-03 — 성장·UX·성능 1차 개선

**기준 데이터 (프로덕션 `https://snu-port.vercel.app/`, Mobile Lighthouse 2026-06-02)**

| 지표 | 값 | 목표 |
|------|-----|------|
| Performance | 93 | ≥ 90 |
| Accessibility | 100 | ≥ 95 |
| Best Practices | 96 | ≥ 95 |
| SEO | 100 | ≥ 95 |
| LCP | 2.6s | ≤ 2.5s |

**정성 피드백·페르소나 (`docs/prd.md` §2)**

- 채용 담당자: 모바일 CTA 찾기 어려움, 로딩 체감
- SNS 방문자: 스크롤 과다, 카드가 텍스트 위주
- 연구 협업자: Hero→About→Contact 동선 보강 필요

### P0 — Hero CTA·첫 화면 전환

| 항목 | 분류 | 개선 | 사유 |
|------|------|------|------|
| Hero `Projects`/`Contact` CTA 복원 | UX / 버그 | `HeroSection`에 `siteContent.hero` CTA + `scrollToSection` | FR-10 회귀, CTA 클릭·이탈 개선 |
| 첫 뷰포트 CTA 노출 | UX | `min-h-[min(100svh,720px)]` + 이미지 높이 제한 | FR-11, 모바일 전환율 |
| h1 시맨틱 | 접근성 | sr-only 제거, visible `h1` | 스크린리더·SEO |

**영향 파일:** `components/sections/HeroSection.tsx`

### P0 — LCP·이미지 성능

| 항목 | 분류 | 개선 | 사유 |
|------|------|------|------|
| Hero·프로젝트 커버 Next Image 최적화 | 성능 | `unoptimized` 제거, `fetchPriority="high"`, preload | LCP 2.6s → 목표 이내 |
| Hero JPEG preload | 성능 | `app/layout.tsx` `<link rel="preload">` | LCP 리소스 우선 로드 |
| Oswald 웨이트 서브셋 | 성능 | 500 제거, 600·700만 로드 | 폰트 바이트 절감 |

**영향 파일:** `components/sections/HeroSection.tsx`, `components/ui/ProjectCoverImage.tsx`, `app/layout.tsx`

### P1 — 전환·스캔 가능성

| 항목 | 분류 | 개선 | 사유 |
|------|------|------|------|
| CTA Marquee 밴드 | UX | `CtaMarqueeBand`를 Contact 직전 배치 | IA §5.2 협업 유도 |
| Contact mailto Primary 스타일 | UX | 프로젝트 상세와 동일 버튼 토큰 | CTA 시각 계층 |
| 프로젝트 카드 요약 2줄 | 콘텐츠 | `summaryKr/En` line-clamp | 짧은 체류 방문자 스캔 |

**영향 파일:** `app/page.tsx`, `components/sections/ContactSection.tsx`, `components/projects/ProjectGridCard.tsx`

---

## 2026-06-03 — Analytics·모바일 Nav (P2)

### P2 — 측정·내비게이션

| 항목 | 분류 | 개선 | 사유 |
|------|------|------|------|
| Vercel Web Analytics | 성능/운영 | `@vercel/analytics` + `layout` `<Analytics />` | ADR-006, KPI-01·02 유입·이탈 실측 |
| 모바일 햄버거 드로어 | UX / 접근성 | `<1024px` 7링크 드로어, Esc·backdrop·focus trap | FR-02, R-05 |
| Desktop Contact Ghost | UX | `lg+` Header Contact Ghost 버튼 | FR-06b |
| Nav 링크 중앙화 | 유지보수 | `lib/nav-links.ts` | §17 순서·데스크톱 4링크 분리 |

**영향 파일:** `app/layout.tsx`, `components/Header.tsx`, `lib/nav-links.ts`, `lib/content/ui-strings.ts`, `package.json`
