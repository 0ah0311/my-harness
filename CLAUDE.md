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
| 4 | figma-keyscreen | instructions/04-figma-keyscreen.md | output/04-figma-result.md + Figma 프레임 |
| 5 | (보조·사람 승인) | output/03-spec.md | instructions/05-stakeholder-review.md |
| 6 | (보조) | 확정 시안 | instructions/06-tokens-components.md |
| 7 | validate | output/03-spec.md + docs/design.md | output/07-validation.md |

재개: output/NN-*.md 파일 존재 시 해당 단계 완료로 간주, 없으면 실행.
파일 헤더: `<!-- agent: {name} | input: {path} | created: {timestamp} -->`
폴더 자동 생성: 에이전트 실행 시작 시 output/, instructions/ 폴더가 없으면 자동 생성 후 진행.

## 3. 게이트 조건

| 단계 | 통과 조건 | 판정 주체 | 실패 시 |
|---|---|---|---|
| 1. 수집 | 01-references.md 존재 AND 항목 수 ≥ 3 | 기계 | 파일 삭제 → collect 재실행 |
| 2. 분석 | 02-analysis.md 존재 AND ## 반영 포인트 섹션 존재 | 기계 | 파일 삭제 → analyze 재실행 |
| 3. 설계 | 03-spec.md 존재 AND 화면 항목 수 ≥ 1 | 기계 | 파일 삭제 → spec 재실행 |
| 4. 키스크린 | 04-figma-result.md 존재 AND Figma 프레임 URL 2~3개 기록 | 기계 | 파일 삭제 → figma-keyscreen 재실행 |
| 5. 협의 | 사람이 "승인" 입력 | **사람** | "재작업" → 03-spec.md 삭제 → spec 재실행 |
| 7. 검토 | 07-validation.md 존재 AND 아래 체크리스트 위반 항목 수 = 0 | 기계 | 파일 삭제 → validate 재실행 |

### 7단계 validate 체크리스트

**design.md 기반 (디자인 규칙)**
- [ ] 모서리 값이 4/8/12/16/24/9999px 이외 값을 사용하지 않는다
- [ ] 브랜드 청록(#31cfff)을 버튼 채움 또는 큰 면에 사용하지 않는다
- [ ] 카드·버튼에 그림자를 사용하지 않는다 (그림자는 팝업·시트에만 허용)
- [ ] 착장을 필수 입력으로 표시하지 않는다 (필수 표시 * 또는 저장 버튼 비활성 조건 금지)
- [ ] 선택 상태를 색만으로 표시하지 않는다 (2px 잉크 링 필수)

**prd.md 기반 (기능 조건)**
- [ ] "착장을 설정하지 않아도 기록 저장 가능"이 spec에 명시됐다
- [ ] "착장은 다음 기록에서 자동으로 채워진다"가 spec에 명시됐다
- [ ] "내 장비 수정·삭제 시 이전 기록 착장은 변하지 않는다"가 spec에 명시됐다

## 4. 편집 권한

| 에이전트 | 쓰기 가능 | 읽기 전용 |
|---|---|---|
| collect | output/ | docs/ |
| analyze | output/ | docs/ |
| spec | output/, instructions/ | docs/ |
| figma-keyscreen | output/ | docs/, instructions/04-figma-keyscreen.md |
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
- 멈추고 사람에게 한 줄 질문 후 대기 (긴 설명 금지)
