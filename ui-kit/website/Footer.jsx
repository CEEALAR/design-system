/* eslint-disable */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <div className="logo-lockup">
            <img src="logo-mark-white.png" alt="" width="36" height="32" style={{ objectFit: 'contain' }} />
            <span className="wordmark" style={{ color: '#F5F0EA' }}>CEEALAR</span>
          </div>
          <p className="footer-tag">
            Centre for Enabling EA Learning &amp; Research<br/>
            Blackpool, UK · Founded 2018
          </p>
        </div>
        <div className="footer-cols">
          <div>
            <div className="footer-h">Programme</div>
            <a href="#">Apply</a><a href="#">FAQ</a><a href="#">Alumni</a>
          </div>
          <div>
            <div className="footer-h">Support</div>
            <a href="#">Donate</a><a href="#">Partner</a><a href="#">Volunteer</a>
          </div>
          <div>
            <div className="footer-h">Contact</div>
            <a href="#">hello@ceealar.org</a><a href="#">Blackpool address</a>
          </div>
        </div>
      </div>
      <div className="shell footer-meta">
        <span>© CEEALAR · UK charity 1180042</span>
        <span>v0.1 · made with intent</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
