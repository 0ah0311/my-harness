<!-- agent: figma-keyscreen | input: instructions/04-figma-keyscreen.md | created: 2026-10-11 -->

# Figma 키스크린 생성 결과

## 생성된 프레임 (3개, 390×844)

| # | 화면명 | Figma 프레임 URL |
|---|---|---|
| 1 | A-기록작성 | https://www.figma.com/design/YxPf107H26CT52bcvbarSQ?node-id=4-2 |
| 2 | B-옵션편집 | https://www.figma.com/design/YxPf107H26CT52bcvbarSQ?node-id=5-2 |
| 3 | C-기록상세 | https://www.figma.com/design/YxPf107H26CT52bcvbarSQ?node-id=6-2 |

## Figma 파일

https://www.figma.com/design/YxPf107H26CT52bcvbarSQ

## 적용된 디자인 규칙

- 프레임 사이즈: 390 × 844 (3개 모두 동일)
- 모서리: 버튼·입력 12px / 착장 카드 16px / 스와치·토글 9999px(원형) 적용
- 색: Ink(#161c1c) / Canvas(#ffffff) / Subtle(#f4f4f4) / Border(#dfe2e7) / Secondary 토큰 사용
- 로컬 변수 컬렉션 "SWIMMILE Colors" 생성 (8개 색상 토큰)
- 착장 필수 입력 표시 없음 확인 — `*` 없음, 저장 버튼 항상 활성
- 캐릭터 레이어 구조: body_female / suit_main / suit_accent / cap / goggles
- 주요 CTA 잉크(#161c1c) 채움 버튼, 브랜드 청록 CTA 미사용
- 카드 그림자 없음 — 면 색(#f4f4f4)으로 구분
- 선택 상태: 2px 잉크 링 (ColorSwatch/coral, ShapeChip/원피스)

## 화면별 구성 요약

### A-기록작성 (node-id: 4-2)
- 네비게이션 바: ← 뒤로 / 기록 작성
- 폼 영역: 날짜·수영장·거리·시간 입력 행
- 수영 착장 섹션: 섹션 라벨 + 변경(button-underline)
- OutfitCard (354×208, rounded.xl): 캐릭터 coral 착장 렌더링
- 저장하기 button-primary (잉크 채움 56px)

### B-옵션편집 (node-id: 5-2)
- 네비게이션 바: ← 취소 / 옵션 편집
- CharacterPreview 영역 (280px, colors.subtle 배경)
- SlotTab: 수영복(선택) · 수모 · 수경 원형 토글
- 실루엣 섹션: ShapeChip 3개 (원피스 2px 잉크 링 선택)
- 색 섹션: 메인/포인트 세그먼트 + ColorSwatch 12개 (coral 선택)
- 내 장비에 저장 토글 (off 상태)
- 적용 button-primary (잉크 채움 56px)

### C-기록상세 (node-id: 6-2)
- 네비게이션 바: ← 뒤로 / 기록 상세
- 헤더: 날짜(2026.10.11) + 수영장명(보조색)
- 요약 지표: 거리·시간 StatCard 2개
- 오늘의 물옷 섹션: OutfitCard 읽기 전용 (터치 피드백 없음)
- 캐릭터: 저장 당시 coral 착장으로 렌더링
