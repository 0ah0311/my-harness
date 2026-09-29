// 게이트 조건 전체 검증 — rules.yaml 기준
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const ROOT = path.resolve(import.meta.dirname, "../..");
const rulesPath = path.resolve(import.meta.dirname, "../rules.yaml");
const rules = yaml.load(fs.readFileSync(rulesPath, "utf8"));

let allPassed = true;

for (const [step, gate] of Object.entries(rules.gates)) {
  const filePath = path.join(ROOT, gate.file);
  const exists = fs.existsSync(filePath);

  if (!exists) {
    console.error(`[FAIL] ${step}: ${gate.file} 없음`);
    allPassed = false;
    continue;
  }

  const content = fs.readFileSync(filePath, "utf8");

  for (const condition of gate.conditions) {
    if (condition.file_exists !== undefined) continue;

    if (condition.section_exists) {
      if (!content.includes(condition.section_exists)) {
        console.error(`[FAIL] ${step}: "${condition.section_exists}" 섹션 없음`);
        allPassed = false;
      }
    }

    if (condition.item_count) {
      const count = (content.match(/^## /gm) || []).length;
      const min = parseInt(condition.item_count.replace(">= ", ""));
      if (count < min) {
        console.error(`[FAIL] ${step}: 항목 수 ${count} < ${min}`);
        allPassed = false;
      }
    }

    if (condition.violation_count) {
      if (content.includes("| ") && !content.includes("없음")) {
        console.error(`[FAIL] ${step}: 위반 항목 존재`);
        allPassed = false;
      }
    }
  }

  if (allPassed) console.log(`[PASS] ${step}`);
}

process.exit(allPassed ? 0 : 1);
