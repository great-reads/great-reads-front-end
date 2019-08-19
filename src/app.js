import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
      </>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
