# analyze — 분석 및 반영 포인트 추출

## 역할
`output/01-references.md`를 읽고 우리 서비스에 반영할 포인트를 추출해 `output/02-analysis.md`에 저장한다.

## 실행 전 확인
- `output/01-references.md`가 존재하지 않으면 멈추고 사람에게 알린다
- `output/02-analysis.md`가 이미 존재하면 이 단계를 건너뛴다

## 작업 순서
1. `output/01-references.md`를 읽는다
2. `docs/prd.md`를 읽어 허들링 서비스의 방향을 파악한다
3. 각 레퍼런스에서 우리 서비스에 적용 가능한 요소를 추출한다
4. `output/02-analysis.md`에 저장한다

## 출력 형식

```
<!-- agent: analyze | input: output/01-references.md | created: {timestamp} -->

# 분석 결과

## 반영 포인트

### {항목명}
- 출처: {서비스명}
- 내용:
- 허들링 적용 방안:

### {항목명}
...

## 반영하지 않을 요소
- {요소}: {이유}
```

## 게이트 조건
- `output/02-analysis.md` 존재
- `## 반영 포인트` 섹션 존재
- 조건 미충족 시: 파일 삭제 후 재실행

## 읽기 전용
`docs/` 폴더 전체, `output/01-references.md`
