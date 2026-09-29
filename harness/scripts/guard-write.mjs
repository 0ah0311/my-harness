// 에이전트별 편집 권한 검사 — roles.md 기준
// 사용: node scripts/guard-write.mjs <agent> <target-path>
// 예시: node scripts/guard-write.mjs collect output/01-references.md
import path from "path";

const [agent, targetPath] = process.argv.slice(2);

if (!agent || !targetPath) {
  console.error("사용법: node guard-write.mjs <agent> <target-path>");
  process.exit(1);
}

const writePermissions = {
  collect: ["output/"],
  analyze: ["output/"],
  spec: ["output/", "instructions/"],
  validate: ["output/"],
  orchestrator: [],
};

const allowed = writePermissions[agent];
if (!allowed) {
  console.error(`알 수 없는 에이전트: ${agent}`);
  process.exit(1);
}

const normalized = targetPath.replace(/\\/g, "/");
const canWrite = allowed.some((dir) => normalized.startsWith(dir));

// docs/ 쓰기는 모든 에이전트에서 금지
if (normalized.startsWith("docs/")) {
  console.error(`[DENY] ${agent} → docs/ 쓰기 금지 (읽기 전용)`);
  process.exit(1);
}

if (!canWrite) {
  console.error(`[DENY] ${agent} → ${targetPath} 쓰기 권한 없음`);
  process.exit(1);
}

console.log(`[ALLOW] ${agent} → ${targetPath}`);
process.exit(0);
