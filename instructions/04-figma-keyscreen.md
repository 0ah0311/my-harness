<!-- agent: spec | input: output/03-spec.md | created: 2026-10-11 -->

# Figma 키스크린 작성 지시

## 개요

output/03-spec.md를 바탕으로 SWIMMILE 오늘의 물옷 기능의 핵심 화면 3개를 Figma에 제작한다.
모든 프레임은 **390 × 844** 기준이며, docs/design.md의 토큰 값을 그대로 사용한다.

---

## 제작 대상 화면

### Screen A — 기록 작성 (수영 착장 영역)

**목적**: 착장이 자동으로 채워진 기록 작성 화면. 착장이 선택 사항임을 UI에서 명확히 보여준다.

**프레임 크기**: 390 × 844

**레이아웃 구성**:
1. 네비게이션 바: 좌측 "← 뒤로", 중앙 "기록 작성" (title-sm 700)
2. 폼 영역 (좌우 패딩 24px):
   - 날짜 입력 행
   - 수영장 입력 행
   - 거리·시간 입력 행
   - **수영 착장 섹션** (핵심):
     - 섹션 라벨 "수영 착장" (body-sm 700) + 우측 "변경" button-underline
     - OutfitCard: 354 × 208, colors.subtle(#f4f4f4) 채움, rounded.xl(16px), 캐릭터 중앙 배치(약 63×160)
     - 캐릭터는 착장이 채워진 상태로 렌더링 (coral #ff6658 메인색 예시)
3. 하단 고정: "저장하기" button-primary (잉크 #161c1c 채움, 56px 높이, 좌우 24px)

**디자인 주의사항**:
- 착장 섹션에 필수 표시(`*`) 없음
- "저장하기" 버튼은 항상 활성 상태로 표시
- OutfitCard는 탭 가능 상태 (커서/터치 피드백 표시)

**사용 토큰**:
- 배경: `{colors.canvas}` #ffffff
- 카드 배경: `{colors.subtle}` #f4f4f4
- 주요 버튼: `{colors.ink}` #161c1c 채움
- 텍스트: `{colors.ink}` #161c1c
- 구분선: `{colors.border}` #dfe2e7

---

### Screen B — 옵션 편집

**목적**: 캐릭터 미리보기가 상단에 sticky되고, 옵션을 세로 스크롤로 선택하는 편집 화면.

**프레임 크기**: 390 × 844

**레이아웃 구성**:
1. 네비게이션 바: 좌측 "← 취소", 중앙 "옵션 편집" (title-sm 700)
2. CharacterPreview 영역 (sticky, 화면 높이 약 40% = 338px):
   - colors.subtle 배경
   - 캐릭터 중앙 배치 (여러 색·무늬가 적용된 상태 예시)
3. SlotTab: "수영복" · "수모" · "수경" 원형 토글 3개 (간격 8px, 선택=잉크 채움, 비선택=subtle)
4. 스크롤 가능 옵션 영역 (좌우 패딩 24px):
   - **실루엣 섹션**: ShapeChip 3개 가로 배열 (56×56, 2px 잉크 링 선택)
   - 구분선 (colors.border)
   - **색 섹션**: "메인 | 포인트" 세그먼트 + ColorSwatch 12개 (6×2, 지름 40px)
   - 구분선
   - **무늬 섹션**: PatternChip 5개 + 크기 세그먼트 (소·중·대)
   - 구분선
   - **저장 토글**: "내 장비에 저장" + 토글 스위치 (off 상태 기본)
5. 하단 고정 버튼 영역:
   - "적용" button-primary (잉크 채움, 56px 높이, 좌우 24px, 위 16px, 홈 인디케이터 34px)

**디자인 주의사항**:
- CharacterPreview는 Figma에서 sticky 표현을 위해 상단 고정 프레임으로 분리
- ColorSwatch 선택 상태: 2px 잉크 링 + 체크 아이콘 중앙 표시
- 화이트 스와치(#ffffff)는 colors.border 1px 외곽 필수
- 무늬·실루엣 없음 칩 포함 (무늬 없음 = 5번째 옵션)

**사용 토큰**:
- CharacterPreview 배경: `{colors.subtle}` #f4f4f4
- 슬롯탭 선택: `{colors.ink}` #161c1c 채움, 흰 라벨
- 스와치 선택 링: `{colors.ink}` 2px
- 적용 버튼: `{colors.ink}` #161c1c 채움

---

### Screen C — 기록 상세 캐릭터 카드

**목적**: 저장된 기록에서 그날의 착장을 확인하는 읽기 전용 화면.

**프레임 크기**: 390 × 844

**레이아웃 구성**:
1. 네비게이션 바: 좌측 "← 뒤로", 중앙 "기록 상세" (title-sm 700)
2. 헤더 영역 (좌우 패딩 24px):
   - 날짜: "2026.10.11" (body-lg 700)
   - 수영장명: "강남구 수영장" (body-sm, secondary)
3. 요약 지표 행: 거리·시간 카드 2개 가로 배열 (본체 컴포넌트 재사용)
4. 구분선 (colors.border)
5. **오늘의 물옷 섹션**:
   - 섹션 라벨 "오늘의 물옷" (body-sm 700)
   - OutfitCard (읽기 전용): 354 × 208, colors.subtle 채움, rounded.xl
   - 캐릭터는 저장 당시 착장 값으로 렌더링 (탭 비활성 표시)

**디자인 주의사항**:
- OutfitCard에 탭 가능 표시 없음 (터치 피드백 없음, 커서 pointer 없음)
- 착장 카드 위에 편집 버튼 없음
- 날짜·수영장 헤더가 착장 카드보다 위에 배치되어 맥락 먼저 전달

**사용 토큰**:
- 배경: `{colors.canvas}` #ffffff
- 카드 배경: `{colors.subtle}` #f4f4f4
- 날짜 텍스트: `{colors.ink}` #161c1c
- 보조 텍스트: secondary 토큰

---

## Figma 작업 체크리스트

- [ ] 세 프레임을 하나의 Figma 페이지에 가로로 배치 (간격 80px)
- [ ] 프레임 이름: `A-기록작성`, `B-옵션편집`, `C-기록상세`
- [ ] 캐릭터는 SVG 벡터 레이어 합성 구조로 작성: `body_{female}`, `suit_main`, `suit_accent`, `suit_line`, `cap`, `goggles`
- [ ] 색 토큰은 Figma 로컬 변수로 등록 후 적용 (하드코딩 금지)
- [ ] 선택 상태 표현: 2px 잉크 링, 체크 아이콘 (Figma 컴포넌트 variant로 분리)
- [ ] 버튼 컴포넌트: `button-primary` / `button-secondary` / `button-underline` 세 종류
- [ ] 하단 버튼 고정 영역: 56px 버튼 + 16px 위 여백 + 34px 홈 인디케이터

---

## 납품 형식

- Figma 파일 링크 공유
- 각 프레임 PNG 내보내기 (2x, 390×844 기준)
- 컴포넌트 사용 목록 주석 첨부
