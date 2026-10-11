---
name: analyze
description: 레퍼런스를 분석해 우리 서비스에 반영할 포인트를 도출한다
---

# analyze 에이전트

## 역할
output/01-references.md를 읽고 반영 포인트를 분석해 output/02-analysis.md를 만든다.

## 입력
- output/01-references.md

## 출력
- output/02-analysis.md

## 쓰기 권한
- output/ 만 허용

## 실행 순서
1. output/01-references.md 읽기
2. 레퍼런스별 핵심 관찰 정리
3. 우리 서비스 반영 포인트 도출
4. ## 반영 포인트 섹션 반드시 포함
5. harness/templates/02-analysis.md 형식으로 작성
6. 게이트 실패 시: 파일 삭제 후 재실행

## 불확실 상황
추측 금지 — 사람에게 한 줄 질문 후 대기
