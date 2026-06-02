# 김진경 포트폴리오 (snu-port)

도시·건축설계 디자이너 김진경의 개인 브랜딩·프로젝트 아카이브 웹사이트입니다.

## 기술 스택

- [Next.js 15](https://nextjs.org/) (App Router, SSG)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) 배포

상세 스택·ADR은 [`docs/tech-stack.md`](docs/tech-stack.md)를 참고하세요.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## 빌드

```bash
npm run build
npm start
```

`npm run build` 실행 전에 `content:sync`가 자동으로 실행되어 `docs/content.md` → `lib/content/generated.ts`를 갱신합니다.

## 콘텐츠 수정

1. **`docs/content.md`** — 사이트 텍스트·프로젝트·경력 등 **단일 원본**
2. 동기화 (선택, 빌드 시 자동 실행):

```bash
npm run content:sync
```

3. 컴포넌트는 `@/lib/content`의 `siteContent`를 import합니다.

```
docs/content.md
    ↓  npm run content:sync
lib/content/generated.ts   ← 자동 생성 (직접 수정 금지)
lib/content/types.ts       ← 타입 정의
```

## 프로젝트 구조

```
app/                  # Next.js 페이지·레이아웃·SEO
components/
  sections/           # Hero, About, Projects, …
  ui/                 # SectionHeading, LangToggle, …
lib/
  content/            # siteContent (generated + types)
scripts/
  sync-content.ts     # content.md 파서
docs/
  content.md          # ★ 콘텐츠 원본
  tech-stack.md
  ia-wireframe.md
  design-system.md
public/images/        # 프로필·프로젝트 이미지
```

## Vercel 배포

GitHub 저장소 `kimninarosa1997-star/snu-port`가 Vercel 프로젝트에 연결되어 있습니다.

- **프로덕션 URL**: https://snu-port.vercel.app
- **자동 배포**: `main` 브랜치에 push하면 Vercel이 빌드·배포합니다.

```bash
git add .
git commit -m "변경 내용"
git push origin main
```

수동 배포가 필요할 때만:

```bash
npx vercel --prod
```
