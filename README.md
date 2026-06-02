# 김진경 포트폴리오 (snu-port)

건축·도시·부동산 공간 가치전략가 김진경의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) 배포

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

## Vercel 배포

1. [Vercel](https://vercel.com/)에 GitHub 저장소를 연결합니다.
2. Framework Preset: **Next.js** (자동 감지)
3. Root Directory: 프로젝트 루트
4. Deploy

또는 Vercel CLI:

```bash
npx vercel
```

## 프로젝트 구조

```
app/              # Next.js 페이지·레이아웃
components/       # UI 섹션 컴포넌트
lib/              # 포트폴리오 콘텐츠 데이터
docs/             # 원본 마크다운 문서
```

## 콘텐츠 수정

사이트 문구·경력·스킬은 `lib/portfolio-data.ts`에서 수정합니다.  
원본 이력서 마크다운은 `docs/snu-jkk-portfolio.md`에 있습니다.

## 프로필 이미지

히어로 프로필 사진은 `components/Hero.tsx`의 `Image` `src`를 본인 사진 경로(예: `/images/profile.jpg`)로 바꾸고, `public/images/`에 파일을 넣으면 됩니다.
