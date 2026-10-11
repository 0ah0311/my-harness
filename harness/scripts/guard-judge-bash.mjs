#!/usr/bin/env node
// harness/scripts/guard-judge-bash.mjs
// validate 단계에서 위험한 bash 명령 차단

const BLOCKED_PATTERNS = [
  /rm\s+-?r?f?\s+output\/03-spec/,
  />\s*output\/03-spec\.md/,
  /mv\s+.*output\/03-spec/,
  /sed\s+-i.*output\/03-spec/,
];

const command = process.argv.slice(2).join(' ');

if (!command) {
  process.exit(0);
}

const blocked = BLOCKED_PATTERNS.find(p => p.test(command));
if (blocked) {
  console.error(`[guard-judge-bash] 차단: validate는 spec 파일을 수정할 수 없습니다.`);
  console.error(`명령: ${command}`);
  process.exit(1);
}

process.exit(0);
