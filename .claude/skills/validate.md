# /validate — 가이드 검증만 단독 실행

`output/03-spec.md`가 존재하는 상태에서 validate 에이전트만 단독 실행한다.

## 실행 순서
1. `output/03-spec.md` 존재 여부 확인 — 없으면 멈추고 사람에게 알린다
2. `docs/design.md` 존재 여부 확인 — 없으면 멈추고 사람에게 알린다
3. 기존 `output/07-validation.md`가 있으면 삭제한다
4. `harness/agents/validate.md` 지시에 따라 실행한다
5. 결과 요약 출력

## 언제 쓰나
- spec 수정 후 검증만 다시 돌리고 싶을 때
- design.md가 업데이트된 후 재검증이 필요할 때
