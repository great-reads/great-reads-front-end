import React from 'react';
import ReactDOM from 'react-dom';
import booklover from './images/undraw_book_lover_mkck.svg';

import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <img src={booklover} alt="" />
        <Register />
        <Login />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
