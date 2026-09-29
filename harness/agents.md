# 에이전트 분류

## 직접 실행 에이전트

| 에이전트 | 담당 단계 | 입력 | 출력 |
|---|---|---|---|
| `collect` | 1. uibowl 레퍼런스 수집 | uibowl MCP | `output/01-references.md` |
| `analyze` | 2. 분석·반영 포인트 추출 | `output/01-references.md` | `output/02-analysis.md` |
| `spec` | 3. 화면 설계 문서화 | `output/02-analysis.md` | `output/03-spec.md` |
| `validate` | 7. 가이드 검증 | `output/03-spec.md` + `design.md` | `output/07-validation.md` |

## 보조(지시문 생성) 에이전트

| 단계 | 입력 | 출력 위치 |
|---|---|---|
| 4. Figma 키스크린 지시문 | `output/03-spec.md` | `instructions/04-figma-keyscreen.md` |
| 5. 관계자 협의 지시문 | `output/03-spec.md` | `instructions/05-stakeholder-review.md` |
| 6. 토큰·컴포넌트 지시문 | 확정된 시안 | `instructions/06-tokens-components.md` |

## 실행 규칙

- 에이전트 간 데이터 전달: 파일 경유 (이전 단계 output 파일을 읽어 다음 단계 output 파일로 씀)
- 재개: 마지막으로 완료된 output 파일이 존재하면 그 다음 단계부터 재시작
- 처음부터 재실행: output 폴더 초기화 후 collect부터
