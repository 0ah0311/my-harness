# /resume — 특정 단계부터 재실행

args로 받은 단계 번호부터 하네스를 재실행한다.

## 사용법
`/resume 3` → 3단계(spec)부터 재실행

## 단계 번호 매핑
| 번호 | 에이전트 | output 파일 |
|---|---|---|
| 1 | collect | output/01-references.md |
| 2 | analyze | output/02-analysis.md |
| 3 | spec | output/03-spec.md |
| 7 | validate | output/07-validation.md |

## 실행 순서
1. 지정한 단계의 output 파일을 삭제한다
2. 해당 단계의 agent 파일(`harness/agents/{name}.md`)을 읽고 실행한다
3. 게이트 통과 후 이후 단계를 순서대로 이어 실행한다

## 주의
단계 번호를 지정하지 않으면 멈추고 사람에게 번호를 물어본다.
