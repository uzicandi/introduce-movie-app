import React from 'react';
import { Route, Link } from 'react-router-dom';
import Movies from './Movies';
import Home from './Home';
import styled from 'styled-components';

const Navigator = styled.div`
  .links {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    background: #dfdfdf;
    width: 100%;
    height: 60px;
  }
  .link {
    list-style: none;
    margin-left: 30px;
  }
  .link a {
    text-decoration: none;
    color: black;
  }
  .link a:hover {
    color: #3b88c3;
  }
`;

function App() {
  return (
    <>
      <Navigator>
        <ul class="links">
          <li class="link">
            <Link to="/">Home</Link>
          </li>
          <li class="link">
            <Link to="/movies">Movies</Link>
          </li>
        </ul>

        <Route path="/" exact={true} component={Home} />
        <Route path="/movies" component={Movies} />
      </Navigator>
    </>
  );
}

export default App;
