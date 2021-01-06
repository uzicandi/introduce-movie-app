# 영화 소개 웹페이지

[🎬 구현화면 보기](https://5ff5ce9a62ce80edadbe6be0--suspicious-hopper-e18581.netlify.app/
)

## 설치

```
npm install
```

## 시작하기

```
npm start
```

## 사용한 기술

- ReactJS, React Hooks
- create-react-app, react-router-dom
- styled-components
- netlify

## 주요 기능

- 홈

1. URI : /
2. 헤더
   1. 모든 페이지에 동일하게 적용
   2. Home, Movies 버튼 클릭시 페이지 이동
3. 사용된 라이브러리 및 프레임워크 출력

- 영화 리스트 출력 페이지

1. URI : /movies
2. API 호출하여 데이터 조회
3. rating 별 표시
4. 스크롤을 내리면 영화정보 4개씩 추가로 출력되는 infinite pagination
5. 자세히보기 클릭 시 해당 영화 페이지로 이동

- 영화 정보 출력 페이지

1. URI: /movie/:id
2. API 호출하여 데이터 조회
3. 리스트로 돌아가기 버튼

## 구현 화면

![](/images/movie-app.gif)
