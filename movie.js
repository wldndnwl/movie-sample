const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmY1ZWRjZTc2MzQ1MThhOWYyYmE1NWNmOTAyMTYwYiIsIm5iZiI6MTcyMjE2OTI0NC43NzMzMDQsInN1YiI6IjY2YTYzNTMyNGI3MjM2ZmU3MjcyMmI5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qQsWjeVyC0yUILWhjsNnM3dbvnZMl0Io3-a6wkG_DrQ",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// alert (`영화 id: ${영화 id}`)

// 검색 구현
//1. 영화카드리스트 선택하기
//2. 입력값에 따라서 포함여부 확인
