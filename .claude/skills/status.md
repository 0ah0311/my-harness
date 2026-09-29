# /status — 하네스 진행 상태 확인

output/ 폴더를 읽어 현재 어느 단계까지 완료됐는지 보고한다.

## 실행 순서
1. `output/` 폴더 파일 목록을 확인한다
2. 아래 표 형식으로 각 단계 완료 여부를 출력한다
3. 다음 실행 대상 단계를 한 줄로 안내한다

## 출력 형식

| 단계 | 에이전트 | 파일 | 상태 |
|---|---|---|---|
| 1 | collect | output/01-references.md | ✓ 완료 / — 미실행 |
| 2 | analyze | output/02-analysis.md | ✓ 완료 / — 미실행 |
| 3 | spec | output/03-spec.md | ✓ 완료 / — 미실행 |
| 7 | validate | output/07-validation.md | ✓ 완료 / — 미실행 |

다음 단계: {단계명} — `/run` 또는 `/resume {N}` 으로 이어 실행
