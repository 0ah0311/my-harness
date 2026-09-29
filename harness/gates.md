# 게이트 규칙

## 단계별 통과 조건

| 단계 | 통과 조건 | 실패 시 복귀 |
|---|---|---|
| collect | `output/01-references.md` 존재 AND 항목 수 ≥ 3 | 파일 삭제 → collect 재실행 |
| analyze | `output/02-analysis.md` 존재 AND `## 반영 포인트` 섹션 존재 | 파일 삭제 → analyze 재실행 |
| spec | `output/03-spec.md` 존재 AND 화면 항목 수 ≥ 1 | 파일 삭제 → spec 재실행 |
| validate | `output/07-validation.md` 존재 AND 위반 항목 수 = 0 | 파일 삭제 → validate 재실행 |

## 사람 승인 지점

- **위치**: 5단계 (관계자 협의) — `instructions/05-stakeholder-review.md` 생성 직후
- **진행 조건**: 사람이 `승인` 입력
- **거부 시**: `재작업` 입력 → `output/03-spec.md` 삭제 → spec 재실행

## ★ 비공개 원칙 위반 감지 (story-service.md 규칙 1 연동)

> 멤버 자료는 기본 비공개 — 본인이 선택한 경우에만 공개 가능

- **감지 조건**: `output/03-spec.md` 내 "공개" 또는 "전체 공개" 문자열 등장
- **처리**: 해당 줄에 `<!-- FLAG: 비공개 원칙 확인 필요 -->` 플래그 삽입
- **차단**: 사람 확인("확인 완료" 입력) 없이 다음 단계 진행 불가

## 실패 복귀 원칙

- 실패한 단계의 output 파일만 삭제하고 해당 에이전트만 재실행
- 앞 단계 파일은 보존 (전체 재실행 X)
- 전체 초기화가 필요한 경우: `output/` 폴더 전체 삭제 후 collect부터
