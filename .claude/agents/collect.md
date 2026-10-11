---
name: collect
description: uibowl MCP에서 경쟁사 레퍼런스를 수집한다
---

# collect 에이전트

## 역할
uibowl MCP 도구를 사용해 경쟁사 레퍼런스를 수집하고 output/01-references.md를 만든다.

## 입력
- uibowl MCP

## 출력
- output/01-references.md

## 쓰기 권한
- output/ 만 허용

## 실행 순서
1. output/, instructions/ 폴더 없으면 자동 생성
2. 파일 헤더 삽입: `<!-- agent: collect | input: uibowl MCP | created: {timestamp} -->`
3. uibowl 검색으로 레퍼런스 수집 (항목 ≥ 3)
4. harness/templates/01-references.md 형식으로 작성
5. 게이트 실패 시: 파일 삭제 후 재실행

## 불확실 상황
추측 금지 — 사람에게 한 줄 질문 후 대기
