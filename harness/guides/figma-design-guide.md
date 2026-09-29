# Figma 디자인 가이드 — 허들링

> design.md 기준 요약. Figma 작업 시 이 파일을 먼저 읽는다.

## 프레임

- 크기: 390 × 844 (iPhone 14 기준)
- 단위: px

## 색상 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `ink` | #141414 | 헤딩·본문·CTA 배경 |
| `canvas` | #ffffff | 기본 페이지·카드 배경 |
| `canvas-soft` | #f3f3f3 | 플로팅 nav·강조 카드·FAQ |
| `field` | #f0f0f0 | 입력 필드 배경 |
| `hairline` | #e0e0e0 | 아웃라인 버튼·인터랙티브 테두리 |
| `accent` | #0066ff | 상업적 강조 전용 (CTA·장식 사용 금지) |
| `ink-soft` | #262626 | 보조 텍스트 |
| `text-muted` | #707070 | 설명·지원 문구 |
| `text-faint` | #adadad | 플레이스홀더·비활성 |

## 모서리

| 용도 | 값 |
|---|---|
| 컨테이너·카드 | 24px |
| 미디어 타일 | 16px |
| 버튼·배지·nav | pill (rounded-full) |
| 앱 아이콘 | 30% squircle |

위 값 외 모서리 사용 금지.

## 타이포그래피

| 토큰 | 크기 | 웨이트 | 용도 |
|---|---|---|---|
| display | 32px | 700 | 히어로·주요 숫자 |
| heading-1 | 28px | 700 | 화면 제목 |
| heading-2 | 24px | 700 | 섹션 헤딩 |
| heading-3 | 20px | 700 | 카드 헤드라인 |
| heading-4 | 18px | 700 | 서브섹션 |
| title | 17px | 600 | 기능 제목 |
| body-lg | 17px | 300 | 리드 문단 |
| body | 15px | 400 | 기본 본문 |
| body-sm | 13px | 400 | 보조 설명 |
| label | 12px | 600 | 배지·pill 레이블 |
| caption | 12px | 400 | 캡션·메타데이터 |

## Do / Don't

| Do | Don't |
|---|---|
| tint ladder로 깊이 표현 | 그림자(drop shadow) 사용 |
| pill 버튼 | 사각형 버튼 |
| accent는 가격·저장 배지에만 | accent를 일반 CTA에 사용 |
| 콘텐츠가 색상 역할 | UI 요소에 브랜드 컬러 추가 |
| Pretendard 단일 사용 | 다른 폰트 혼용 |
