import React from 'react';
import { Route, Link } from 'react-router-dom';
import Movies from './Movies';
import Home from './Home';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/movies">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movies" component={Movies} />
    </div>
  );
};

export default App;
