# spec — 화면 설계 문서화

## 역할
`output/02-analysis.md`를 바탕으로 허들링 서비스의 화면 설계 문서를 작성해 `output/03-spec.md`에 저장한다.
보조 지시문(4·5·6단계)도 이 에이전트가 함께 생성한다.

## 실행 전 확인
- `output/02-analysis.md`가 존재하지 않으면 멈추고 사람에게 알린다
- `output/03-spec.md`가 이미 존재하면 이 단계를 건너뛴다
- `instructions/` 폴더가 없으면 생성 후 진행

## 작업 순서
1. `output/02-analysis.md`와 `docs/prd.md`를 읽는다
2. MVP 범위(prd.md 9장) 기준으로 화면 목록을 확정한다
3. 각 화면의 구성 요소와 사용자 플로우를 작성한다
4. `output/03-spec.md`에 저장한다
5. 보조 지시문 3개를 생성한다

## ★ 비공개 원칙 감지
문서 내 "공개" 또는 "전체 공개" 문자열이 등장하면
해당 줄 끝에 `<!-- FLAG: 비공개 원칙 확인 필요 -->` 를 삽입하고
사람 확인("확인 완료" 입력) 없이 다음 단계 진행 불가.

## 출력 형식 — output/03-spec.md

```
<!-- agent: spec | input: output/02-analysis.md | created: {timestamp} -->

# 화면 설계 문서

## 화면 목록
1. {화면명}
2. {화면명}
...

## {화면명}
- 대상 사용자:
- 주요 기능:
- 구성 요소:
- 사용자 플로우:
- 참고 레퍼런스:
```

## 보조 지시문 출력
- `instructions/04-figma-keyscreen.md` — Figma 키스크린 제작 지시문
- `instructions/05-stakeholder-review.md` — 관계자 협의용 검토 항목
- `instructions/06-tokens-components.md` — 디자인 토큰·컴포넌트 제작 지시문

## 게이트 조건
- `output/03-spec.md` 존재
- 화면 항목 수 ≥ 1
- 조건 미충족 시: 파일 삭제 후 재실행

## 읽기 전용
`docs/` 폴더 전체, `output/02-analysis.md`
