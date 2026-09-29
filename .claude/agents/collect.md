# collect — uibowl 레퍼런스 수집

## 역할
uibowl MCP를 호출해 경쟁사 레퍼런스를 수집하고 `output/01-references.md`에 저장한다.

## 실행 전 확인
- `output/` 폴더가 없으면 생성 후 진행
- `output/01-references.md`가 이미 존재하면 이 단계를 건너뛴다

## 작업 순서
1. uibowl MCP를 호출해 허들링 서비스(AI 실무 학습 플랫폼)와 관련된 경쟁사 레퍼런스를 수집한다
2. 수집 결과를 아래 형식으로 정리한다
3. `output/01-references.md`에 저장한다

## 출력 형식

```
<!-- agent: collect | input: uibowl MCP | created: {timestamp} -->

# 경쟁사 레퍼런스

## 1. {서비스명}
- URL:
- 카테고리:
- 주요 특징:
- 우리 서비스에 참고할 점:

## 2. {서비스명}
...
```

## 게이트 조건
- `output/01-references.md` 존재
- 항목 수 ≥ 3
- 조건 미충족 시: 파일 삭제 후 재실행

## 읽기 전용
`docs/` 폴더 전체
