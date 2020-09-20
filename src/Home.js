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
          <li>axios : ^0.20.0</li>
          <li>react-router-dom : ^5.2.0</li>
          <li>style-components : ^5.2.0</li>
          <li>react-rating-stars-component : ^2.2.0</li>
          <li>react-infinite-scroll-component : ^5.1.0</li>
        </ul>
      </div>
    </HomeStyle>
  );
};
export default Home;
