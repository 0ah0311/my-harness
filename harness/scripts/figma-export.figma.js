// Figma 키스크린 지시문 생성 — spec 결과 기반
// 사용: node scripts/figma-export.figma.js
import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "../..");
const specPath = path.join(ROOT, "output/03-spec.md");
const outputPath = path.join(ROOT, "instructions/04-figma-keyscreen.md");

if (!fs.existsSync(specPath)) {
  console.error("[ERROR] output/03-spec.md 없음 — spec 단계를 먼저 실행하세요");
  process.exit(1);
}

const spec = fs.readFileSync(specPath, "utf8");

// 화면 목록 추출
const screenMatches = spec.match(/^## .+/gm) || [];
const screens = screenMatches
  .filter((s) => !s.includes("화면 목록"))
  .map((s) => s.replace("## ", "").trim());

const figmaInstructions = `# Figma 키스크린 제작 지시문

> 생성 시각: ${new Date().toISOString()}
> 기준 파일: output/03-spec.md
> 프레임 크기: 390 × 844 (iPhone 14 기준)

## 제작 대상 화면 (2~3개 선택)

${screens.slice(0, 3).map((s, i) => `${i + 1}. ${s}`).join("\n")}

## 디자인 규칙 (design.md 기준)

- 색상: ink(#141414) · canvas(#ffffff) · accent(#0066ff) 외 사용 금지
- 모서리: 0 / 16px / 24px / pill(rounded-full) 만 허용
- 그림자: 사용 금지 — tint ladder로 대체
- 폰트: Pretendard (Bold 700 · Regular 400 · Light 300)
- 버튼·배지: pill 형태(rounded-full) 필수

## 작업 순서

1. 프레임 390×844 생성
2. 화면별 레이아웃 배치 (spec 문서 참고)
3. design.md 토큰 적용
4. 키스크린 완성 후 운영자·관계자 공유용 PNG 내보내기
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, figmaInstructions, "utf8");
console.log(`[SAVED] instructions/04-figma-keyscreen.md`);
