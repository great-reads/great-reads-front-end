import React from 'react';
import ReactDOM from 'react-dom';
import booklover from './images/undraw_book_lover_mkck.svg';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <img src={booklover} alt="" />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
