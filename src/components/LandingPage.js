import React from 'react';
import booklover from '../images/undraw_book_lover_mkck.svg';

function LandingPage() {
  return (
    <>
      {/* inline styles are temporary */}
      <div style={{ maxWidth: '100%', width: '600px', margin: '0 auto' }}>
        <img style={{ width: '100%' }} src={booklover} alt="" />
      </div>
    </>
  );
}

export default LandingPage;
