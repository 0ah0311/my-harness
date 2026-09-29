# validate — 가이드 검증

## 역할
`output/03-spec.md`를 `docs/design.md` 기준으로 검토해 위반 항목을 찾고 `output/07-validation.md`에 저장한다.

## 실행 전 확인
- `output/03-spec.md`가 존재하지 않으면 멈추고 사람에게 알린다
- `docs/design.md`가 존재하지 않으면 멈추고 사람에게 알린다
- `output/07-validation.md`가 이미 존재하면 이 단계를 건너뛴다

## 작업 순서
1. `output/03-spec.md`를 읽는다
2. `docs/design.md`의 규칙을 읽는다
3. 아래 항목을 하나씩 검사한다
4. `output/07-validation.md`에 저장한다

## 검사 항목 (design.md 기준)

| 항목 | 기준 |
|---|---|
| 색상 | ink(#141414)·canvas(#ffffff)·accent(#0066ff) 외 색상 사용 여부 |
| 모서리 | 0 / 16px / 24px / full(pill) 외 값 사용 여부 |
| 그림자 | 그림자 사용 여부 (shadow-free 원칙) |
| 타이포그래피 | Pretendard 외 폰트 / 정의된 토큰 외 사이즈·웨이트 사용 여부 |
| 버튼·배지 | pill 형태(rounded-full) 미적용 여부 |
| 액센트 색상 | #0066ff를 CTA·장식 용도로 사용하는 경우 (상업적 강조 외 사용 금지) |

## ★ 판매 자산 검수 우회 금지
위반 항목이 1개라도 있으면 임의로 통과 처리하지 않는다.
반드시 위반 내용을 사람에게 보고하고 대기한다.

## 출력 형식

```
<!-- agent: validate | input: output/03-spec.md + docs/design.md | created: {timestamp} -->

# 가이드 검증 결과

## 위반 항목
(없으면 "없음"으로 표기)

| 화면 | 항목 | 위반 내용 | 수정 방향 |
|---|---|---|---|

## 검증 통과 여부
- 위반 항목 수: N
- 통과 여부: ✓ / ✗
```

## 게이트 조건
- `output/07-validation.md` 존재
- 위반 항목 수 = 0
- 조건 미충족 시: 파일 삭제 후 재실행, 사람에게 위반 내용 보고

## 읽기 전용
`docs/` 폴더 전체, `output/03-spec.md`
