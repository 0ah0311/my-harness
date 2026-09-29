# 허들링 하네스 — 이 파일이 모든 에이전트의 유일한 규칙 출처입니다

## 1. 트리거

| 문장 | 동작 |
|---|---|
| "허들링 레퍼런스 수집 시작해줘" | collect부터 전체 순서 실행 |
| "N단계부터 다시 시작해줘" | N단계 output 파일 삭제 → 해당 에이전트 재실행 |

## 2. 단계·파일명

| 순서 | 에이전트 | 입력 | 출력 |
|---|---|---|---|
| 1 | collect | uibowl MCP | output/01-references.md |
| 2 | analyze | output/01-references.md | output/02-analysis.md |
| 3 | spec | output/02-analysis.md | output/03-spec.md |
| 4 | (보조) | output/03-spec.md | instructions/04-figma-keyscreen.md |
| 5 | (보조·사람 승인) | output/03-spec.md | instructions/05-stakeholder-review.md |
| 6 | (보조) | 확정 시안 | instructions/06-tokens-components.md |
| 7 | validate | output/03-spec.md + docs/design.md | output/07-validation.md |

재개: output/NN-*.md 파일 존재 시 해당 단계 완료로 간주, 없으면 실행.
파일 헤더: `<!-- agent: {name} | input: {path} | created: {timestamp} -->`
폴더 자동 생성: 에이전트 실행 시작 시 output/, instructions/ 폴더가 없으면 자동 생성 후 진행.

## 3. 게이트 조건

| 단계 | 통과 조건 | 실패 시 |
|---|---|---|
| collect | 01-references.md 존재 AND 항목 수 ≥ 3 | 파일 삭제 → collect 재실행 |
| analyze | 02-analysis.md 존재 AND ## 반영 포인트 섹션 존재 | 파일 삭제 → analyze 재실행 |
| spec | 03-spec.md 존재 AND 화면 항목 수 ≥ 1 | 파일 삭제 → spec 재실행 |
| validate | 07-validation.md 존재 AND 위반 항목 수 = 0 | 파일 삭제 → validate 재실행 |
| 5단계 사람 승인 | 사람이 "승인" 입력 | "재작업" → 03-spec.md 삭제 → spec 재실행 |

## 4. 편집 권한

| 에이전트 | 쓰기 가능 | 읽기 전용 |
|---|---|---|
| collect | output/ | docs/ |
| analyze | output/ | docs/ |
| spec | output/, instructions/ | docs/ |
| validate | output/ | docs/, output/03-spec.md |
| 오케스트레이터 | 없음 | 전체 |

## 5. 어기면 안 되는 것

1. **멤버 자료 비공개 원칙**: spec 단계에서 "공개" 또는 "전체 공개" 문자열
   감지 시 `<!-- FLAG: 비공개 원칙 확인 필요 -->` 플래그 삽입.
   사람 확인("확인 완료" 입력) 없이 다음 단계 진행 불가.

2. **판매 자산 검수 우회 금지**: validate 단계에서 위반 항목이 1개라도 있으면
   에이전트가 임의로 통과 처리하지 않는다. 반드시 사람에게 보고 후 대기.

## 6. 불확실 상황 기본 행동

파일 없음·MCP 오류·모호한 지시 발생 시:
- 추측해서 진행 금지
- 멈추고 사람에게 한 줄 질문 후 대기
