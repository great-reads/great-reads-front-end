import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        Great Reads
      </Link>
      <nav>
        <Link to="/login" style={styles.link}>
          Log in
        </Link>
        <Link to="/signup" style={styles.link}>
          Sign up
        </Link>
      </nav>
    </header>
  );
}

export default Header;

// inline styles - temporary
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  logo: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    marginLeft: '10px',
    color: 'black',
  },
};
