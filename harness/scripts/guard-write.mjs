#!/usr/bin/env node
// harness/scripts/guard-write.mjs
// 에이전트별 쓰기 권한 가드

const PERMISSIONS = {
  collect:  ['output/'],
  analyze:  ['output/'],
  spec:     ['output/', 'instructions/'],
  validate: ['output/07-validation.md'],
};

const agent = process.env.HARNESS_AGENT;
const targetPath = process.argv[2];

if (!agent) {
  // HARNESS_AGENT 미설정 시 허용 (하네스 외부 실행)
  process.exit(0);
}

if (!targetPath) {
  console.error('[guard-write] 대상 경로 인자 없음');
  process.exit(1);
}

const allowed = PERMISSIONS[agent] || [];
const permitted = allowed.some(prefix => targetPath.startsWith(prefix));

if (!permitted) {
  console.error(`[guard-write] 차단: ${agent}는 ${targetPath}에 쓸 수 없습니다. 허용: ${allowed.join(', ')}`);
  process.exit(1);
}

process.exit(0);
