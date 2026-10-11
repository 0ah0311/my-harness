<!-- agent: spec | input: 확정 시안 | created: 2026-10-11 -->

# 토큰·컴포넌트 제작 지시

> 기준: docs/design.md  
> 확정 시안: output/04-figma-result.md (Figma 파일 https://www.figma.com/design/YxPf107H26CT52bcvbarSQ)

---

## 디자인 토큰

### 색상 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `{colors.ink}` | #161c1c | 주요 CTA 채움, 제목, 선택 링(2px), On-Brand 텍스트 배경 |
| `{colors.brand}` | #31cfff | 진행바·얇은 포인트 요소만. CTA 채움·큰 면 금지 |
| `{colors.canvas}` | #ffffff | 화면·시트·팝업 배경 |
| `{colors.subtle}` | #f4f4f4 | 보조 버튼 채움, 착장 카드 배경, 비활성 면, SlotTab 비선택 |
| `{colors.border}` | #dfe2e7 | 1px 구분선, 화이트 스와치 외곽 |
| `{colors.dim}` | #161c1c · 90% | 팝업·바텀 시트 뒤 오버레이 |

### 타이포그래피 토큰

| 토큰 | 크기 | 굵기 | 행 높이 | 용도 |
|---|---|---|---|---|
| `{typography.title-lg}` | 20px | 700 | 30px | 바텀 시트 제목 ("착장 선택") |
| `{typography.title-sm}` | 18px | 700 | 27px | 팝업 제목, 섹션 제목 |
| `{typography.body-lg}` | 16px | 400 / 700 | 24px | 본문(400), 버튼 라벨(700) |
| `{typography.body-sm}` | 14px | 400 / 700 | 21px | 옵션 이름, 보조 설명, 섹션 라벨(700) |
| `{typography.caption-lg}` | 13px | 500 | 20px | SlotTab 라벨, ShapeChip·PatternChip 이름 |
| `{typography.caption-sm}` | 12px | 400 | 18px | MyGearItem 보조 정보(최근 사용일) |

- 폰트: Pretendard 단일 사용, 자간 0
- 강조는 굵기(700)로만. 색 강조 없음.
- 내 장비 이름: 12자 이내, 한 줄 말줄임 처리

### 라운드 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `{rounded.sm}` | 4px | 무늬 타일 내부 모서리 |
| `{rounded.md}` | 8px | 작은 칩 |
| `{rounded.lg}` | 12px | 버튼, 입력 칩, MyGearItem |
| `{rounded.xl}` | 16px | 팝업, OutfitCard |
| `{rounded.2xl}` | 24px | 바텀 시트 상단 모서리 |
| `{rounded.circle}` | 9999px | ColorSwatch, SlotTab 토글 |

### 간격 토큰

- 기본 단위 8px, 반 단계 4px
- 토큰 값: 2 · 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64
- 화면 좌우 패딩: 24px
- 시트·팝업 내부 패딩: 24px
- 같은 그룹 안 간격: 8~12px / 그룹 사이: 24px

### Elevation 규칙

| 레벨 | 처리 | 용도 |
|---|---|---|
| 0 | 캔버스 위 평면 | 기본 화면 |
| 1 | `{colors.subtle}` 채움, 테두리 없음 | OutfitCard, MyGearItem, button-secondary |
| 2 | 1px `{colors.border}` | 비선택 ColorSwatch·칩 |
| 3 | 2px 잉크 링 | 선택된 ColorSwatch·ShapeChip·PatternChip·MyGearItem |
| Overlay | `{colors.dim}` + 흰 면 + 그림자 `0 10 10 rgba(22,28,28,0.1)` | 팝업, 바텀 시트 |

---

## 컴포넌트 목록

> spec(output/03-spec.md)에서 사용된 컴포넌트만 포함한다.

### 1. `button-primary`

**사용 화면**: 화면 3(옵션 편집 "적용"), 화면 4(EmptyState "새로 만들기"), 화면 4(삭제 확인 팝업 "확인")

| 속성 | 값 |
|---|---|
| 채움 | `{colors.ink}` |
| 텍스트 | `{typography.body-lg}` 700, On Brand (#ffffff) |
| 높이 | 56px |
| 라운드 | `{rounded.lg}` |
| 하단 고정 시 여백 | 좌우 24px / 위 16px / 홈 인디케이터 34px |

**상태**:
- `default`: 잉크 채움 + 흰 라벨
- `disabled`: `{colors.subtle}` 채움 + Disabled 텍스트

---

### 2. `button-secondary`

**사용 화면**: 화면 2(착장 선택 시트 "새로 만들기"), 화면 4(내 장비 목록 "새로 만들기"), 화면 4(삭제 확인 팝업 "취소")

| 속성 | 값 |
|---|---|
| 채움 | `{colors.subtle}` |
| 텍스트 | `{typography.body-lg}` 700, 잉크 라벨 |
| 높이 | 56px |
| 라운드 | `{rounded.lg}` |

**상태**:
- `default`: subtle 채움 + 잉크 라벨

---

### 3. `button-underline`

**사용 화면**: 화면 1(기록 작성 "변경" / 미설정 시 "설정")

| 속성 | 값 |
|---|---|
| 텍스트 | `{typography.caption-lg}`, 밑줄 |
| 터치 영역 | 최소 44px (비주얼 크기보다 크게 확장) |

**상태**:
- `default`: 잉크 텍스트 + 밑줄
- 착장 미설정 시 라벨: "설정" (착장 설정 시: "변경")

---

### 4. `OutfitCard`

**사용 화면**: 화면 1(기록 작성), 화면 5(기록 상세 읽기 전용)

| 속성 | 값 |
|---|---|
| 크기 | 354 × 208 |
| 채움 | `{colors.subtle}` |
| 라운드 | `{rounded.xl}` |
| 캐릭터 위치 | 중앙, 약 63 × 160 |
| 그림자 | 없음 (면 색으로 구분) |

**상태**:
- `default` (기록 작성): 탭 시 착장 선택 시트 오픈
- `readonly` (기록 상세): 탭 피드백 없음, 이동 없음

**예외**:
- 착장 미설정: 무채색 기본 착장 캐릭터 표시
- 로드 실패: 기본 착장으로 조용히 폴백

---

### 5. `CharacterPreview`

**사용 화면**: 화면 3(옵션 편집)

| 속성 | 값 |
|---|---|
| 위치 | 화면 상단 sticky |
| 높이 | 화면 높이 약 40% |
| 배경 | `{colors.subtle}` |
| 갱신 속도 | 옵션 변경 후 150ms 이내 즉시 반영 |
| 전환 애니메이션 | 없음 |

**레이어 합성 순서**:
`body_{female|male}` → `suit_main` → 무늬(메인 영역 마스크) → `suit_accent` → suit_line → `cap` → `goggles`

---

### 6. `SlotTab`

**사용 화면**: 화면 3(옵션 편집)

| 속성 | 값 |
|---|---|
| 항목 수 | 3개 (수영복 · 수모 · 수경) |
| 라운드 | `{rounded.circle}` |
| 라벨 | `{typography.caption-lg}` |

**상태**:
- `selected`: `{colors.ink}` 채움 + 흰 라벨
- `unselected`: `{colors.subtle}` 채움 + 잉크 라벨

**규칙**:
- 수모·수경 탭에는 착용 on/off 스위치 포함
- 수모 off → 수모 색·무늬 선택 UI disabled, 미리보기에서 수모 미표시
- 수경 off → 동일

---

### 7. `ColorSwatch`

**사용 화면**: 화면 3(옵션 편집)

| 속성 | 값 |
|---|---|
| 지름 | 40px |
| 터치 영역 | 44px |
| 라운드 | `{rounded.circle}` |
| 배열 | 12개, 6×2 (한 줄 6개 × 2줄) |
| 세그먼트 | "메인" / "포인트" 전환 |

**상태**:
- `selected`: 2px 잉크 링 + 체크 아이콘
- `unselected`: 1px `{colors.border}` 외곽 (화이트 스와치는 외곽 필수)

**팔레트 (12색)**:

| 구분 | 키 | Hex |
|---|---|---|
| Milestone 9색 | rime | #b8e34b |
| | yellow | #ffd447 |
| | orange | #ff9638 |
| | coral | #ff6658 |
| | skyblue | #35b9e8 |
| | vividblue | #3476e8 |
| | purple | #9a54d6 |
| | pink | #e84e9b |
| | deepblue | #263d91 |
| 뉴트럴 3색 | black | #161c1c |
| | white | #ffffff |
| | gray | #9ca3af |

- 색은 hex가 아닌 팔레트 키로 저장 (과거 기록 의미 유지)
- 색만으로 구분하지 않도록 선택 시 체크 아이콘 필수

---

### 8. `ShapeChip`

**사용 화면**: 화면 3(옵션 편집 — 실루엣 섹션)

| 속성 | 값 |
|---|---|
| 크기 | 56 × 56 |
| 내부 | 선택된 색이 입혀진 실루엣 미리보기 |
| 라운드 | `{rounded.md}` |
| 라벨 | `{typography.caption-lg}`, 칩 아래 |
| 종류 | 3종 |

**상태**:
- `selected`: 2px 잉크 링
- `unselected`: 1px `{colors.border}`

---

### 9. `PatternChip`

**사용 화면**: 화면 3(옵션 편집 — 무늬 섹션)

| 속성 | 값 |
|---|---|
| 크기 | 56 × 56 |
| 내부 | 선택된 색이 입혀진 무늬 미리보기 |
| 라운드 | `{rounded.md}` |
| 라벨 | `{typography.caption-lg}`, 칩 아래 |
| 종류 | 5종 |
| 크기 조절 | 3단계 세그먼트 컨트롤 |

**상태**:
- `selected`: 2px 잉크 링
- `unselected`: 1px `{colors.border}`

---

### 10. `OutfitSheet` (바텀 시트)

**사용 화면**: 화면 2(착장 선택 시트)

| 속성 | 값 |
|---|---|
| 배경 | `{colors.canvas}` |
| 상단 라운드 | `{rounded.2xl}` |
| 내부 패딩 | 24px |
| 오버레이 | `{colors.dim}` |
| 그림자 | `0 10 10 rgba(22,28,28,0.1)` |
| 최대 높이 | 화면의 75% (내부 스크롤) |
| 핸들 바 | 상단 중앙 |

**구성**:
- 상단: `{typography.title-lg}` 제목 "착장 선택" + `button-secondary` "새로 만들기" (전체 너비)
- 구분선 후: "내 장비" 섹션 라벨 + `MyGearItem` 목록 (최근 사용 순)

**예외**:
- 내 장비 0개: `EmptyState` (기본 착장 캐릭터 + 안내 문구 + "새로 만들기")

---

### 11. `MyGearItem`

**사용 화면**: 화면 2(착장 선택 시트), 화면 4(내 장비 목록)

| 속성 | 값 |
|---|---|
| 높이 | 72px |
| 채움 | `{colors.subtle}` |
| 라운드 | `{rounded.lg}` |
| 좌측 썸네일 | 캐릭터 48 × 48 |
| 이름 | `{typography.body-lg}`, 최대 12자, 한 줄 말줄임 |
| 보조 정보 | `{typography.caption-sm}` (최근 사용일) |
| 우측 | 더보기(···) 아이콘 (화면 4에만 표시) |

**상태**:
- `default`: subtle 채움
- `selected`: 2px 잉크 링 (화면 2 선택 시)

**더보기 액션 시트** (화면 4):
- "편집" → 옵션 편집 화면(편집 모드)
- "삭제" → `Popup` (삭제 확인)

---

### 12. `Popup` (삭제 확인)

**사용 화면**: 화면 4(내 장비 목록 — 삭제 확인)

| 속성 | 값 |
|---|---|
| 배경 | `{colors.canvas}` |
| 라운드 | `{rounded.xl}` |
| 폭 | 307px |
| 패딩 | 24px |
| 제목 | `{typography.title-sm}` "착장을 삭제할까요?" |
| 설명 | `{typography.body-lg}` "삭제 후 복구할 수 없어요" |
| 버튼 배치 | 취소(`button-secondary`) · 삭제(`button-primary`) 가로 배치 |
| 오버레이 | `{colors.dim}` |
| 그림자 | `0 10 10 rgba(22,28,28,0.1)` |

- 본체 저장 확인 팝업과 같은 컴포넌트 재사용

---

### 13. `EmptyState`

**사용 화면**: 화면 2(착장 선택 시트 — 내 장비 0개), 화면 4(내 장비 목록 — 0개)

| 속성 | 값 |
|---|---|
| 캐릭터 | 기본 착장 캐릭터 중앙 배치 |
| 안내 문구 | `{typography.body-lg}`, Secondary 색 "아직 저장된 착장이 없어요" |
| 버튼 | 화면 2: `button-secondary` "새로 만들기" / 화면 4: `button-primary` "새로 만들기" |

---

### 14. `Toast`

**사용 화면**: 화면 3(옵션 편집 — "내 장비에 저장" 토글 on 후 "적용" 탭)

| 속성 | 값 |
|---|---|
| 채움 | `{colors.ink}` |
| 텍스트 | 흰색, `{typography.body-sm}` |
| 라운드 | `{rounded.lg}` |
| 위치 | 하단 |
| 표시 시간 | 2초 후 자동 소멸 |
| 문구 | "내 장비에 저장했어요" |

- 수정 완료 토스트와 같은 컴포넌트 재사용

---

## 공통 제작 규칙

| 항목 | 규칙 |
|---|---|
| CTA 채움 | 주요 버튼: 잉크(`{colors.ink}`). 브랜드 청록(`{colors.brand}`) CTA 채움 금지 |
| 그림자 | 팝업·바텀 시트에만 적용. 카드·버튼·칩은 면 색으로 구분 |
| 선택 상태 | 2px 잉크 링 + 아이콘. 색에만 의존하지 않음 |
| 터치 영역 | 최소 44px (ColorSwatch 40px 지름이지만 터치 영역 44px 확보) |
| 착장 필수 여부 | 착장은 선택 항목. `*` 표시 및 저장 버튼 비활성 조건 포함 금지 |
| 도감·수집 UI | 획득 표시, 숫자 카운터 등 도감·수집 UI 금지 |
| 기준 프레임 | 390 × 844 (설계 기준). 최소 360px 폭 가로 스크롤 없음 |
| 캐릭터 렌더러 | 목록·썸네일 등 모든 곳에서 같은 렌더러 재사용. 캔버스 크기·앵커 동일 유지 |
| 에셋 납품 형식 | 벡터(SVG/PDF), 레이어 이름 키와 일치: `suit_main`, `suit_accent`, `suit_line`, `cap`, `goggles`, `body_{female\|male}` |
