/* eslint-disable */
function Hero() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="t-eyebrow" style={{ color: '#D1A75E', marginBottom: 18 }}>
          7&nbsp;years · 300+ guests · Blackpool, UK
        </div>
        <h1 className="hero-h1">
          A home for people doing<br/>
          hard things with <em>support,<br/>structure, and soul.</em>
        </h1>
        <p className="hero-sub">
          CEEALAR is a residential incubator for EA-aligned researchers, founders, and career
          transitioners. Subsidized accommodation, structured programming, and a focused
          community for people working on global catastrophic risk reduction.
        </p>
        <div className="hero-ctas">
          <a className="c-btn primary-on-teal" href="#">Apply now</a>
          <a className="c-btn secondary-on-teal" href="#">Learn more</a>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
