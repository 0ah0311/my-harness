#!/usr/bin/env node
// harness/scripts/verify.mjs
// 단계별 게이트 조건 검증

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();

function countTableRows(content) {
  return content.split('\n').filter(l => l.trim().match(/^\|[^-|]/) ).length;
}

function sectionExists(content, heading) {
  return content.includes(heading);
}

const gates = [
  {
    step: 1,
    file: 'output/01-references.md',
    check: (content) => {
      const count = countTableRows(content);
      if (count < 3) return { pass: false, reason: `항목 수 ${count} < 3` };
      return { pass: true };
    }
  },
  {
    step: 2,
    file: 'output/02-analysis.md',
    check: (content) => {
      if (!sectionExists(content, '## 반영 포인트'))
        return { pass: false, reason: '## 반영 포인트 섹션 없음' };
      return { pass: true };
    }
  },
  {
    step: 3,
    file: 'output/03-spec.md',
    check: (content) => {
      const count = countTableRows(content);
      if (count < 1) return { pass: false, reason: '화면 항목 수 < 1' };
      return { pass: true };
    }
  },
  {
    step: 7,
    file: 'output/07-validation.md',
    check: (content) => {
      const match = content.match(/위반 항목 수[^\n]*\n+(\d+)/);
      const count = match ? parseInt(match[1]) : null;
      if (count === null) return { pass: false, reason: '위반 항목 수 파싱 불가' };
      if (count !== 0) return { pass: false, reason: `위반 항목 ${count}개` };
      return { pass: true };
    }
  }
];

const step = parseInt(process.argv[2]);
if (!step) {
  console.error('사용법: node verify.mjs <단계번호>');
  process.exit(1);
}

const gate = gates.find(g => g.step === step);
if (!gate) {
  console.log(`단계 ${step}: 기계 판정 없음 (사람 확인 필요)`);
  process.exit(0);
}

const filePath = join(ROOT, gate.file);
if (!existsSync(filePath)) {
  console.error(`파일 없음: ${gate.file}`);
  process.exit(1);
}

const content = readFileSync(filePath, 'utf-8');
const result = gate.check(content);

if (result.pass) {
  console.log(`단계 ${step}: 통과`);
  process.exit(0);
} else {
  console.error(`단계 ${step}: 실패 — ${result.reason}`);
  process.exit(1);
}
