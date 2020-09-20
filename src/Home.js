import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  .home {
    margin: 20px;
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <div className="home">
        <h1>사용된 라이브러리 및 프레임 워크</h1>
        <ul>
          <li>axios</li>
          <li>react-router</li>
          <li>reactjs-hooks-pagination</li>
          <li>style-component</li>
          <li>react-rating-stars-component</li>
          <li>react-infinite-scroll-component</li>
        </ul>
      </div>
    </HomeStyle>
  );
};
export default Home;
