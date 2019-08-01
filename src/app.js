import React from 'react';
import ReactDOM from 'react-dom';
import booklover from './images/undraw_book_lover_mkck.svg';

import Register from './components/Register';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <img src={booklover} alt="" />
        <Register />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
