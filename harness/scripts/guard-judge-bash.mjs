// 단계별 게이트 판정 — 특정 step의 output 파일 조건 검사
// 사용: node scripts/guard-judge-bash.mjs <step>
// 예시: node scripts/guard-judge-bash.mjs collect
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const step = process.argv[2];
if (!step) {
  console.error("사용법: node guard-judge-bash.mjs <step>");
  process.exit(1);
}

const ROOT = path.resolve(import.meta.dirname, "../..");
const rules = yaml.load(
  fs.readFileSync(path.resolve(import.meta.dirname, "../rules.yaml"), "utf8")
);

const gate = rules.gates[step];
if (!gate) {
  console.error(`알 수 없는 단계: ${step}`);
  process.exit(1);
}

const filePath = path.join(ROOT, gate.file);
if (!fs.existsSync(filePath)) {
  console.error(`[FAIL] ${gate.file} 없음 → ${gate.on_fail}`);
  process.exit(1);
}

const content = fs.readFileSync(filePath, "utf8");

// 비공개 원칙 FLAG 감지
const flagPattern = /(공개|전체 공개)/g;
const flagMatches = content.match(flagPattern);
if (flagMatches && !content.includes("확인 완료")) {
  console.error(`[BLOCK] 비공개 원칙 위반 의심 — 사람 확인 필요`);
  process.exit(1);
}

console.log(`[PASS] ${step} 게이트 통과`);
process.exit(0);
