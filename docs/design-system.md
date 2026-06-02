# Design System — EDITORIAL · Jinkyung Kim Portfolio

> 에디토리얼 모노크롬 디자인 시스템. 싱글 페이지 포트폴리오(`docs/ia-wireframe.md`) 구현 계약.  
> **파일:** `docs/design-system.md`  
> **브랜드 무드:** 미니멀 · 대담 · 에디토리얼 · B/W 대비  
> **기본 테마:** 다크 우선(캔버스 = `#000`). 라이트·다크 토글 지원.  
> **1차 레퍼런스:** [Darren Harroff Portfolio](https://darrenharroff.webflow.io/)

---

## 0. How to use this file

UI 작업 전 _"Build to `design-system.md` + `ia-wireframe.md`"_ 로 핸드오프한다.

**3대 원칙**

1. **Black & white first.** 순수 흑백 캔버스. 컬러는 포인트(≤5%)만.
2. **Two voices in type.** Hero = **Oswald** · 섹션 = **Playfair** · UI = **Inter**.
3. **Band rhythm.** `band-dark` / `band-light` / `band-muted` 교차.

**레퍼런스 & 차용 포인트**

| URL | 차용 포인트 |
|:---|:---|
| [darrenharroff.webflow.io](https://darrenharroff.webflow.io/) | 스택 Hero + 프로필, masonry Projects, Skills 흰 밴드, marquee CTA/Footer |
| [linear.app](https://linear.app) | 1px 헤어라인·느린 ease-out |
| [oma.com](https://www.oma.com) | 에디토리얼 여백·serif 본문 |
| [vercel.com/design](https://vercel.com/design) | 토큰 기반 시스템·라벨형 내비 |

---

## 1. Design principles

| Principle | Practice |
|:---|:---|
| **Editorial contrast** | 순수 `#000` / `#FFF` 밴드 교차, serif + condensed sans 대비 |
| **Stacked hero** | 프로필 중앙 + Oswald 4단 스택(이름·역할) |
| **Masonry proof** | Projects 비대칭 12열 그리드, 카드 → `/projects/[slug]` |
| **Marquee rhythm** | 섹션 헤더·CTA·Footer에 수평 ticker (prefers-reduced-motion 대응) |
| **Trust arc** | Hero → Projects → Skills → CTA → About → Experience → Archive → Contact |

---

## 2. Design tokens (CSS custom properties)

모든 토큰은 `:root`(다크) / `[data-theme="light"]`(라이트)에 정의한다. 구현 시 `app/globals.css`에 이 블록을 이식한다.

### 2.1 Color

쿨 그래파이트 캐스트(hue ~250). Hex는 oklch 근사값(개발·대비 검증용).

```css
:root {
  /* Canvas & ink */
  --color-canvas:     oklch(0.14 0.006 250);  /* #0B0B0D */
  --color-ink:        oklch(0.97 0.004 250);  /* #F4F4F5 — primary text on dark */
  --color-ink-muted:  oklch(0.74 0.005 250);  /* #9A9AA3 — secondary */
  --color-ink-faint:  oklch(0.55 0.006 250);  /* #6E6E75 — decorative meta only on dark */

  /* Neutral ramp */
  --color-neutral-950: var(--color-canvas);
  --color-neutral-900: oklch(0.19 0.006 250);  /* #19191C raised */
  --color-neutral-800: oklch(0.25 0.006 250);  /* #27272A hairline */
  --color-neutral-700: oklch(0.34 0.006 250);  /* #3F3F46 disabled */
  --color-neutral-500: oklch(0.55 0.006 250);  /* #6E6E75 */
  --color-neutral-300: oklch(0.74 0.005 250);  /* #9A9AA3 */
  --color-neutral-100: oklch(0.92 0.004 250);  /* #E4E4E7 body */
  --color-neutral-050: oklch(0.97 0.004 250);  /* #F4F4F5 headings */

  /* Section bands */
  --color-band-light: oklch(1 0 0);
  --color-band-light-ink: oklch(0 0 0);
  --color-band-muted: oklch(0.94 0 0);
  --color-band-muted-ink: oklch(0.12 0 0);
  /* Accent — warm signal, ≤5% screen */
  --color-primary:       oklch(0.55 0.18 25);
  --color-on-primary:    oklch(0.14 0.006 250);

  /* Semantic */
  --color-success:  oklch(0.74 0.13 150);
  --color-warning:  oklch(0.80 0.14 85);
  --color-error:    oklch(0.66 0.18 25);

  /* Surfaces & borders */
  --color-surface-raised: var(--color-neutral-900);
  --color-surface-overlay: oklch(0.14 0.006 250 / 0.92);
  --color-border:         var(--color-neutral-800);
  --color-border-strong:  var(--color-neutral-700);
  --color-focus-ring:     var(--color-neutral-050);
}

[data-theme="light"] {
  --color-canvas:        oklch(0.98 0.004 250);  /* #FAFAFC paper */
  --color-ink:           oklch(0.14 0.006 250);
  --color-ink-muted:     oklch(0.34 0.006 250);
  --color-ink-faint:     oklch(0.55 0.006 250);

  --color-neutral-950:   oklch(0.14 0.006 250);
  --color-neutral-900:   oklch(0.92 0.004 250);
  --color-neutral-800:   oklch(0.88 0.004 250);
  --color-neutral-700:   oklch(0.74 0.005 250);
  --color-neutral-500:   oklch(0.55 0.006 250);
  --color-neutral-300:   oklch(0.45 0.006 250);
  --color-neutral-100:   oklch(0.25 0.006 250);
  --color-neutral-050:   oklch(0.14 0.006 250);

  --color-surface-raised: oklch(0.96 0.004 250);
  --color-surface-overlay: oklch(0.98 0.004 250 / 0.92);
  --color-border:         oklch(0.88 0.004 250);
  --color-border-strong:  oklch(0.74 0.005 250);
  --color-focus-ring:     oklch(0.14 0.006 250);

  /* accent unchanged */
  --color-on-primary:     oklch(0.14 0.006 250);
}
```

**Usage**

- 기본 본문: `--color-neutral-100` on `--color-canvas`
- 제목: `--color-neutral-050`
- 캡션·메타(다크): **`--color-neutral-300` 이상** — `--color-neutral-500`은 13px 일반 텍스트에 사용 금지(§11)
- 테두리: `1px solid var(--color-border)`
- Primary CTA(Contact mailto 등): `--color-primary` 배경 + `--color-on-primary` 텍스트

### 2.2 Typography

```css
:root {
  --font-hero: "Oswald", "Arial Narrow", system-ui, sans-serif;
  --font-display: "Playfair Display", ui-serif, Georgia, serif;
  --font-text: "Inter", system-ui, sans-serif;

  /* Size / line-height pairs */
  --text-display-xl:  clamp(4.5rem, 18vw, 18rem);   /* Hero — 288px @1440 */
  --text-display-xl-lh: 0.92;
  --text-display-l:   clamp(3rem, 10vw, 10rem);
  --text-display-l-lh: 0.94;
  --text-display-m:   clamp(2rem, 5vw, 5.5rem);
  --text-display-m-lh: 0.98;
  --text-headline:    3rem;
  --text-headline-lh: 1.05;
  --text-title:       1.75rem;
  --text-title-lh:    1.15;
  --text-body-l:      1.25rem;
  --text-body-l-lh:   1.5;
  --text-body:        1rem;
  --text-body-lh:     1.6;
  --text-caption:     0.8125rem;
  --text-caption-lh:  1.4;
  --text-label:       0.75rem;
  --text-label-lh:    1;

  --weight-display: 600;
  --weight-title:   500;
  --weight-body:    400;
  --weight-label:   500;

  --tracking-display: -0.02em;
  --tracking-tight:   -0.01em;
  --tracking-label:   0.18em;
}
```

| Token | Desktop | Weight | Tracking | Case | Use (IA) |
|:---|:---|:---|:---|:---|:---|
| `hero-stack` | `--text-hero-stack` | 700 | -0.01em | UPPER | `#home` 4단 이름·역할 |
| `display-xl` | `--text-display-xl` | 700 | -0.01em | UPPER | Footer 장식 타이포 |
| `headline` | clamp 2–3.5rem | 600 | -0.01em | Sentence | 섹션 h2 (Playfair) |
| `editorial` | clamp 1.5–2.25rem | 600 | -0.01em | Sentence | About 중앙 본문 |
| `title` | 28px | 500 | 0 | Sentence | 카드·타임라인 제목 |
| `body-l` | 20px | 400 | 0 | Sentence | Hero 서브카피 |
| `body` | 16px | 400 | 0 | Sentence | About 본문 |
| `caption` | 13px | 400 | 0 | Sentence | 기간·메타 |
| `label` | 12px | 500 | 0.18em | UPPER | Nav · Badge · 칩 |

- 화면당 `display-xl` **1개**. 모바일은 clamp로 ~30% 축소.
- `display-*` = ALL CAPS, line-height &lt; 1.0.
- 본문 최대 ~70자/줄 (`max-width: 42rem`).

### 2.3 Spacing (8px base)

```css
:root {
  --space-0:  0;
  --space-1:  8px;    /* 1 unit */
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-5:  40px;
  --space-6:  48px;
  --space-8:  64px;
  --space-10: 80px;
  --space-12: 96px;
  --space-16: 128px;
  --space-20: 160px;
  --space-24: 192px;
  --space-32: 256px;

  /* Layout */
  --layout-gutter:     var(--space-3);
  --layout-max-width:  1200px;   /* ia-wireframe §4.1 */
  --header-height:     72px;
  --scroll-margin-top: var(--header-height);
  --section-padding-y: clamp(var(--space-16), 12vh, var(--space-24));
}
```

- 섹션 리듬: `--section-padding-y` (Hero 제외 About~Contact)
- 12열 그리드, gutter `--layout-gutter`, `gap`만 사용(마진 스택 금지)
- Hero 최소 높이: `min(100svh, 720px)` (모바일 CTA 노출)

### 2.4 Radius

```css
:root {
  --radius-none: 0;      /* default — cards, buttons */
  --radius-sm:   2px;    /* inputs only */
  --radius-focus: 2px;   /* focus ring offset */
}
```

### 2.5 Shadow

계층은 **공간·헤어라인**으로. 그림자는 오버레이·드로어에만.

```css
:root {
  --shadow-none: none;
  --shadow-elevated: 0 8px 32px oklch(0 0 0 / 0.45);  /* mobile nav drawer */
  --shadow-focus:    0 0 0 2px var(--color-canvas), 0 0 0 4px var(--color-focus-ring);
}
```

### 2.6 Motion

```css
:root {
  --ease-cinema:     cubic-bezier(0.16, 1, 0.3, 1);
  --ease-standard:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-emphasized: cubic-bezier(0.08, 0.82, 0.17, 1);

  --duration-instant: 0ms;
  --duration-fast:    180ms;
  --duration-base:    360ms;
  --duration-slow:    720ms;
  --duration-hero:    1200ms;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: var(--duration-instant);
    --duration-base: var(--duration-instant);
    --duration-slow: var(--duration-instant);
    --duration-hero: var(--duration-instant);
  }
}
```

**대표 인터랙션 3가지**

| # | 이름 | 트리거 | 동작 | 토큰 |
|:---:|:---|:---|:---|:---|
| 1 | **Hero title card** | `#home` 진입 | H1 `translateY(24px)`→0 + opacity 0→1 | `--duration-hero`, `--ease-cinema` |
| 2 | **Nav chrome settle** | scroll &gt; 40px | 헤더 bg `--color-surface-overlay`, 하단 1px border fade-in | `--duration-base`, `--ease-standard` |
| 3 | **Project detail expand** | 카드 Enter/click | 패널 `max-height` + opacity, hairline 밝기 `--color-border`→strong | `--duration-slow`, `--ease-cinema` |

- Hover: opacity / underline / border 색만. **scale·shadow bloom 금지.**
- 장식 루프 애니메이션 금지.

---

## 3. Dark / light mode

| 항목 | 결정 |
|:---|:---|
| **기본** | `data-theme="dark"` 또는 미설정 = 다크 |
| **지원** | Header `[KR\|EN]` 옆 또는 시스템 `prefers-color-scheme` + 수동 토글 |
| **전환** | `color-scheme: dark \| light` + CSS 변수 스왑(컴포넌트 하드코드 색 금지) |
| **원칙** | 라이트는 램프 **반전**, accent hue 동일 |

### 3.1 Semantic token mapping

| Semantic | Dark (`:root`) | Light (`[data-theme="light"]`) |
|:---|:---|:---|
| Page background | `--color-canvas` | `--color-canvas` |
| Primary text | `--color-ink` / `--color-neutral-050` | `--color-ink` |
| Secondary text | `--color-neutral-300` | `--color-ink-muted` |
| Muted meta | `--color-neutral-500`※ | `--color-neutral-500` |
| Raised surface | `--color-neutral-900` | `--color-surface-raised` |
| Hairline | `--color-border` | `--color-border` |
| Primary button fill | `--color-neutral-050` | `--color-neutral-050` |
| Primary button text | `--color-neutral-950` | `--color-neutral-950` |
| Accent CTA | `--color-primary` | `--color-primary` |
| Focus | `--shadow-focus` | `--shadow-focus` |

※ 다크에서 `--color-neutral-500`은 **18px+ bold 또는 장식**에만(§11).

---

## 4. Core components (state specs)

### 4.1 Button

| Variant | Default | Hover | Focus | Active | Disabled |
|:---|:---|:---|:---|:---|:---|
| **Primary** | bg `--color-neutral-050`, text `--color-neutral-950`, padding `14px 28px`, radius 0, `label` | bg `--color-neutral-100` | `--shadow-focus` | opacity 0.92 | bg `--color-neutral-700`, text `--color-neutral-500`, pointer-events none |
| **Ghost** | transparent, 1px `--color-border`, text `--color-neutral-050` | border `--color-neutral-050` | `--shadow-focus` | bg `--color-neutral-900` | border `--color-neutral-800`, text `--color-neutral-700` |
| **Accent** | bg `--color-primary`, text `--color-on-primary` | brightness 1.05 | `--shadow-focus` | scale 없음, opacity 0.95 | 동 Primary disabled |
| **Link** | text `--color-neutral-050`, underline offset 4px | underline visible | ring | — | text `--color-neutral-700` |

- Hero: Primary `Projects` → `#projects`, Ghost `Contact` → `#contact`
- Contact: Accent 또는 Primary large + `mailto:` accessible name

### 4.2 Card (project · strength · archive row)

| State | Surface | Border | Title | Meta |
|:---|:---|:---|:---|:---|
| **Default** | transparent | top `1px --color-border` | `title` / `--color-neutral-050` | `caption` / `--color-neutral-300` |
| **Hover** | `--color-neutral-900` | top `--color-neutral-700` | unchanged | unchanged |
| **Focus-within** | hover 동일 | + `--shadow-focus` on interactive child | — | — |
| **Expanded** (project) | full-width panel below | panel top hairline strong | P→S→R `body` | tools `caption` |
| **Disabled** | — | — | `--color-neutral-700` | — |

- 중첩 박스·큰 radius·좌측 accent stripe **금지** (§8)

### 4.7 Marquee (ticker)

| Part | Spec |
|:---|:---|
| **Root** | `overflow-hidden`, `prefers-reduced-motion` 시 정적 중앙 정렬 |
| **Track** | `marquee-scroll` 28s/40s linear infinite |
| **Use** | Projects/Skills 섹션 헤더, CTA 밴드, Contact/Footer 이메일 유도 |

### 4.8 Section bands

| Class | Background | Text | Sections |
|:---|:---|:---|:---|
| `band-dark` | `--color-canvas` | `--color-ink` | Hero, Projects, Experience, Contact |
| `band-light` | `--color-band-light` | `--color-band-light-ink` | Skills, Archive |
| `band-muted` | `--color-band-muted` | `--color-band-muted-ink` | About (personal statement) |

### 4.9 Nav (Header)

| Part | Spec |
|:---|:---|
| **Desktop** | `Projects · Skills · About · Contact` (4링크, · 구분) |
| **Mobile** | 7링크 풀 드로어 |
| **Logo** | `JK` text label (박스 border 제거) |

### 4.4 Section

| Element | Spec |
|:---|:---|
| **Wrapper** | `id` = `home`…`contact`, `padding-block: var(--section-padding-y)` |
| **Inner** | `max-width: var(--layout-max-width)`, horizontal `var(--layout-gutter)` |
| **Eyebrow** | optional `label` + `--color-neutral-500` → prefer `--color-neutral-300` on dark |
| **Title** | `headline`, `aria-labelledby` |
| **Intro** | `body-l`, max-width 42rem |
| **Alt band** | every 2nd section optional bg `--color-neutral-900` (Experience, Archive) |

### 4.5 Badge (chip · timeline type · skill tag)

| Variant | Default | Hover | Active / selected | Disabled |
|:---|:---|:---|:---|:---|
| **Outline** | 1px `--color-border`, `label`, text `--color-neutral-300`, no fill | border `--color-neutral-300` | — | text `--color-neutral-700` |
| **Filled** | bg `--color-neutral-050`, text `--color-neutral-950` | bg `--color-neutral-100` | — | bg `--color-neutral-800` |
| **Accent** | bg `--color-primary-dim`, text `--color-primary` | — | Archive type 등 | — |

- 관심분야 칩(C-INT-*), 스킬 태그(C-SKL-*), Archive 타입에 사용
- radius `--radius-none`

### 4.6 기타 (유지)

- **Input:** bottom-border only, focus border `--color-neutral-050`
- **Media:** grayscale default; hero/호버 시 컬러 허용
- **Timeline:** left rule `1px --color-border`, items right, Badge for type

---

## 5. Stitch Map — 레퍼런스 → 우리 토큰/컴포넌트

| 레퍼런스 요소 | 우리 매핑 |
|:---|:---|
| Linear — 다크 사이드바·헤어라인 구분 | `--color-border`, Nav scrolled state, Card hairline |
| Linear — 빠른 키보드 내비 느낌 | Nav `label` + focus ring, skip link `#main-content` |
| Rauno — 싱글 페이지 섹션 리듬 | Section `--section-padding-y`, anchor `scroll-margin-top` |
| Rauno — 타이포만으로 계층 | `display-xl` Hero + `body` About, 그림자 최소 |
| OMA — 모뉴멘탈 히어로 타이포 | `--text-display-xl`, Hero 인터랙션 #1 |
| OMA — 풀블리드 이미지 | About `C-REQ-001`, grayscale filter |
| Vercel Design — 토큰·라벨 내비 | `--text-label`, `--tracking-label`, 7-link Nav |
| Vercel — 테크 신뢰 CTA | Button Primary/Ghost, Contact Accent |
| British Design Fund — 카드 메타 계층 | Card `title` + `caption`, Projects grid 4열→2→1 |
| British Design Fund — 에디토리얼 여백 | `--space-16`~`--space-24`, `--layout-max-width` 1200px |

---

## 6. WCAG 2.1 AA — 텍스트/배경 대비

기준: 일반 텍스트 **4.5:1**, 큰 텍스트(≥24px 또는 ≥18.67px bold) **3:1**.  
계산: sRGB 근사 Hex, 다크 캔버스 `#0B0B0D`, 라이트 `#FAFAFC`.

### 6.1 Dark theme

| Foreground | Background | Ratio | AA normal | AA large | 용도 허용 |
|:---|:---|:---:|:---:|:---:|:---|
| `--color-neutral-050` | `--color-canvas` | 17.89:1 | ✅ | ✅ | H1–H3, Nav active |
| `--color-neutral-100` | `--color-canvas` | 15.50:1 | ✅ | ✅ | Body |
| `--color-neutral-300` | `--color-canvas` | 7.05:1 | ✅ | ✅ | Caption, meta |
| `--color-neutral-500` | `--color-canvas` | 3.89:1 | ❌ | ✅ | **장식·18px+ only** |
| `--color-neutral-700` | `--color-canvas` | 1.85:1 | ❌ | ❌ | Disabled only |
| `--color-primary` | `--color-canvas` | 9.41:1 | ✅ | ✅ | Accent text on dark |
| `--color-neutral-050` | `--color-neutral-900` | 15.96:1 | ✅ | ✅ | Card hover title |
| `--color-neutral-300` | `--color-neutral-900` | 6.29:1 | ✅ | ✅ | Card hover meta |
| `--color-neutral-500` | `--color-neutral-900` | 3.47:1 | ❌ | ✅ | Hover 장식 only |
| `--color-neutral-950` | `--color-neutral-050` | 17.89:1 | ✅ | ✅ | Primary button |
| `--color-neutral-700` | `--color-neutral-050` | 9.66:1 | ✅ | ✅ | Disabled on light fill |
| `--color-neutral-050` | `--color-neutral-800` | 13.55:1 | ✅ | ✅ | — |
| `--color-neutral-500` | `--color-neutral-800` | 2.94:1 | ❌ | ❌ | **사용 금지** |
| `--color-neutral-950` | `--color-primary` | 9.41:1 | ✅ | ✅ | Accent button |

### 6.2 Light theme

| Foreground | Background | Ratio | AA normal | AA large |
|:---|:---|:---:|:---:|:---:|
| `--color-neutral-950` | `--color-canvas` (paper) | 18.86:1 | ✅ | ✅ |
| `--color-neutral-500` | `--color-canvas` | 4.85:1 | ✅ | ✅ |
| `--color-neutral-700` | `--color-canvas` | 10.19:1 | ✅ | ✅ |
| `--color-neutral-300` | `--color-canvas` | 2.68:1 | ❌ | ❌ |
| `--color-neutral-950` | `--color-primary` | 9.41:1 | ✅ | ✅ |

**구현 규칙**

- 다크 캡션·메타: 최소 `--color-neutral-300`.
- `--color-neutral-500` on canvas: 비필수 장식 또는 `aria-hidden` 메타만.
- Disabled는 대비 실패 허용 + `aria-disabled`.

---

## 7. Voice & tone

- 짧고 선언형. 형용사 최소.
- Nav/Badge: 대문자 라벨 (`PROJECTS`, `CONTACT`).
- 느낌표·이모지 금지.

---

## 8. Anti-patterns

- ❌ 그라데이션, 글래스모피즘, 글로우
- ❌ 둥근 카드 + 좌측 컬러 스트라이프
- ❌ 화면당 accent 2색 이상
- ❌ drop shadow로 계층(드로어 제외)
- ❌ `display-xl`을 작게 쓰기
- ❌ Private 연락처 placeholder 링크

---

## 9. IA ↔ component quick map

| Section | Components | Tokens |
|:---|:---|:---|
| `#home` | Hero stack, ProfileImage(square), intro | `text-hero-stack`, `text-editorial` |
| `#projects` | Marquee, masonry grid, project links | `band-dark`, 12-col spans |
| `#skills` | Marquee, 4-col groups | `band-light`, Playfair h3 |
| CTA band | Marquee → mailto | `band-dark`, full-width |
| `#about` | Editorial center + strengths/education | `band-muted` + `band-dark` |
| `#experience` | Timeline 2-col | `band-dark` |
| `#archive` | Timeline | `band-light` |
| `#contact` | Email CTA + Footer marquee | `band-dark` |
| Global | Nav (4+mobile 7), Theme/Lang toggle | `--header-height` 64px |

---

## 10. Make it yours (5-minute fork)

1. `--font-display` / `--font-text` 교체
2. `--color-primary` hue 1회 결정(chroma ~0.14)
3. `display-xl` 상한 조정(clamp max)
4. 다크 전용 vs `data-theme` 토글
5. §4·§9에 없는 컴포넌트 삭제

---

## 11. 문서 이력

| 버전 | 날짜 | 변경 |
|:---|:---|:---|
| 0.1 | — | NOIR/288 초안 |
| 0.2 | 2026-06-02 | 포트폴리오 토큰·컴포넌트 상태·Stitch Map·WCAG·8px 스페이스·와이어프레임 정렬 |
| 0.3 | 2026-06-02 | QA P1 — Nav link WCAG `--color-neutral-300` (`review-log.md` C-05) |
| 0.5 | 2026-06-02 | EDITORIAL 리디자인 — Darren Harroff 레퍼런스, Oswald/Playfair, section bands, marquee, masonry Projects, 스크롤 순서 변경 |

**관련:** `docs/ia-wireframe.md`, `docs/content.md`

---

_EDITORIAL — Jinkyung Kim Portfolio. [Darren Harroff](https://darrenharroff.webflow.io/) 에디토리얼 B/W 무드 차용._
