# 산출물 규칙

## 파일명 규칙

- 패턴: `output/NN-역할명.md` (NN은 두 자리 숫자)
- 예시: `output/01-references.md`, `output/02-analysis.md`, `output/03-spec.md`, `output/07-validation.md`

## 전체 output 파일 목록

| 파일 | 생성 에이전트 | 비고 |
|---|---|---|
| `output/01-references.md` | collect | uibowl 수집 결과 |
| `output/02-analysis.md` | analyze | 반영 포인트 추출 결과 |
| `output/03-spec.md` | spec | 화면 설계 문서 |
| `output/07-validation.md` | validate | 가이드 위반 검토 결과 |
| `instructions/04-figma-keyscreen.md` | (보조) | Figma 지시문 |
| `instructions/05-stakeholder-review.md` | (보조) | 관계자 협의 지시문 |
| `instructions/06-tokens-components.md` | (보조) | 토큰·컴포넌트 지시문 |

## 파일 헤더 형식

모든 output 파일 첫 줄에 아래 메타데이터를 포함한다.

```
<!-- agent: {name} | input: {path} | created: {timestamp} -->
```

## 재개 판별 규칙

- `output/NN-*.md` 파일이 존재하면 해당 단계 완료로 간주
- 없으면 해당 단계 실행 대상
- 처음부터 재실행: `output/` 폴더 전체 삭제 후 collect부터

## 규칙 SSOT

모든 에이전트 규칙·게이트·파일명 규칙은 `CLAUDE.md` 한 파일에 집중한다.
개별 에이전트 파일은 CLAUDE.md를 참조하며 자체 규칙을 정의하지 않는다.
