<!-- agent: (보조) | input: 확정 시안 | created: {timestamp} -->

# 토큰·컴포넌트 제작 지시

> 기준: docs/design.md

## 디자인 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| colors.ink | #161c1c | 주요 CTA, 제목, 선택 링 |
| colors.brand | #31cfff | 얇은 포인트 요소만 |
| colors.canvas | #ffffff | 화면·시트·팝업 배경 |
| colors.subtle | #f4f4f4 | 보조 버튼, 카드 배경 |
| colors.border | #dfe2e7 | 1px 구분선 |
| rounded.lg | 12px | 버튼, 입력 |
| rounded.xl | 16px | 팝업, 착장 카드 |
| rounded.2xl | 24px | 바텀 시트 상단 |

## 컴포넌트 목록

| # | 컴포넌트 | 상태 | 비고 |
|---|---|---|---|
| 1 | button-primary | default / disabled | |
| 2 | button-secondary | default | |
| 3 | outfit-card | default / readonly | |
| 4 | color-swatch | selected / unselected | |
| 5 | my-gear-item | default / selected | |
