# 김진경 포트폴리오 (snu-port)

도시·건축설계 디자이너 **김진경**의 개인 브랜딩·프로젝트 아카이브 웹사이트입니다.  
`docs/content.md` 단일 원본에서 콘텐츠를 동기화하고, Next.js SSG로 정적 배포합니다.

| 항목 | 내용 |
|------|------|
| 프로덕션 | https://snu-port.vercel.app |
| 저장소 | https://github.com/kimninarosa1997-star/snu-port |
| Node | **20 LTS** (`.nvmrc`, `package.json` `engines`) |

## 기술 스택

- [Next.js 15](https://nextjs.org/) — App Router, SSG, `generateMetadata`, sitemap
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) — `docs/design-system.md` 토큰
- [Vercel](https://vercel.com/) — `main` merge 시 프로덕션 자동 배포
- [GitHub Actions](.github/workflows/ci.yml) — PR/`main`에서 `content:sync` + `build`

상세 스택·ADR: [`docs/tech-stack.md`](docs/tech-stack.md)  
콘텐츠·키 매핑: [`docs/content-keys-guide.md`](docs/content-keys-guide.md)

## 로컬 실행

```powershell
# Node 20 권장 (nvm: nvm use)
npm install
npm run dev
```

브라우저: [http://localhost:3000](http://localhost:3000)

## 빌드·검증

```powershell
npm run content:sync   # docs/content.md → lib/content/generated.ts
npm run build
npm start              # 프로덕션 미리보기 (선택)
npm run lint
```

`prebuild` 훅으로 `npm run build` 시 `content:sync`가 자동 실행됩니다.

## 콘텐츠 수정

1. **`docs/content.md`** — 텍스트·프로젝트·경력 등 **단일 원본**
2. 동기화: `npm run content:sync` (빌드 시 자동)
3. 컴포넌트: `@/lib/content`의 `siteContent` import  
   UI 라벨(헤더·푸터 등): `lib/content/ui-strings.ts`

```
docs/content.md
    ↓  npm run content:sync
lib/content/generated.ts   ← 자동 생성 (직접 수정 금지)
lib/content/types.ts
lib/content/ui-strings.ts
```

## 프로젝트 구조

```
app/                      # 페이지·레이아웃·SEO·/projects/[slug]
components/
  sections/               # Hero, About, Projects, …
  projects/               # 프로젝트 상세 뷰
  seo/                    # JSON-LD
lib/content/              # siteContent, helpers, ui-strings
scripts/sync-content.ts
docs/                     # content.md, tech-stack, design-system, …
public/images/
.github/workflows/ci.yml
```

## GitHub 브랜치 전략

| 브랜치 | 용도 |
|--------|------|
| `main` | 프로덕션. **직접 push 지양**, PR merge만 |
| `feat/*` | 기능 (예: `feat/m4-v2-project-pages`) |
| `fix/*` | 버그·핫픽스 |

**권장 흐름**

```powershell
git checkout main
git pull origin main
git checkout -b feat/short-description
# … 작업 · Conventional Commits …
git push -u origin feat/short-description
# GitHub에서 PR → main, CI 통과 후 merge
```

**커밋 메시지 (Conventional Commits)**

```
feat(scope): 새 기능 요약

fix(scope): 버그 수정 요약

docs(readme): 문서 변경
chore(ci): CI·도구 설정

- 본문: 변경 이유·영향 파일 범위
```

## 시크릿·안전 푸시

- **커밋 금지**: `.env`, `.env.local`, API 키, 토큰, `*.pem`, 비밀번호
- `.gitignore`에 `.env*`, `.vercel`, Lighthouse 산출물 등이 포함되어 있음
- 푸시 전 점검 예시:

```powershell
git status
git diff --cached
# .env 파일이 추적 목록에 없는지 확인
git ls-files | Select-String "\.env"
```

시크릿이 이미 커밋된 경우: 히스토리에서 제거 후 **키 로테이션**이 필요합니다 (force push는 팀 합의 후에만).

## 배포 (Vercel)

- GitHub `kimninarosa1997-star/snu-port` ↔ Vercel 프로젝트 연결
- **`main` merge** → 프로덕션 빌드·배포
- **PR/feat 브랜치** → Vercel Preview URL로 검증

수동 배포(필요 시만):

```powershell
npx vercel --prod
```

환경 변수가 필요해지면 Vercel 대시보드에만 설정하고, 저장소에는 `.env.example`(값 없음)만 두는 것을 권장합니다.
