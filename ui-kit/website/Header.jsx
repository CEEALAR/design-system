/* eslint-disable */
const { useState } = React;

function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#" className="logo-lockup">
          <img src="logo-mark-gradient.png" alt="" width="40" height="36" style={{ objectFit: 'contain' }} />
          <span className="wordmark">CEEALAR</span>
        </a>
        <nav className="site-nav">
          <a href="#">About</a>
          <a href="#">Programme</a>
          <a href="#">Alumni</a>
          <a href="#">Apply</a>
          <a href="#">Donate</a>
        </nav>
        <a className="c-btn" href="#">Apply now</a>
      </div>
    </header>
  );
}
window.Header = Header;
