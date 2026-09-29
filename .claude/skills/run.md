# /run — 허들링 하네스 전체 실행

CLAUDE.md를 읽고 collect → analyze → spec → validate 순서로 전체 하네스를 실행한다.

## 실행 순서
1. CLAUDE.md를 읽어 규칙을 확인한다
2. `output/`, `instructions/` 폴더가 없으면 생성한다
3. `harness/agents/collect.md` 지시에 따라 collect 실행
4. 게이트 통과 확인 후 `harness/agents/analyze.md` 실행
5. 게이트 통과 확인 후 `harness/agents/spec.md` 실행
6. `instructions/05-stakeholder-review.md` 생성 후 **사람 승인 대기**
7. "승인" 입력 시 `harness/agents/validate.md` 실행
8. 최종 결과 한 줄 요약 출력

## 재개 동작
각 단계 시작 전 output 파일 존재 여부를 확인한다.
파일이 있으면 해당 단계를 건너뛰고 다음 단계로 진행한다.

## 게이트 실패 시
실패한 단계의 output 파일을 삭제하고 해당 단계만 재실행한다.
