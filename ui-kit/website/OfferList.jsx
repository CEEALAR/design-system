/* eslint-disable */
function OfferList() {
  const left = [
    'Co-living & co-working in a converted Blackpool hotel',
    'Delicious vegan food, three meals a day',
    'Needs-based subsidized accommodation',
    'A focused, intellectually serious community',
  ];
  const right = [
    'Structured weekly programming and reading groups',
    '1:1 mentorship from senior alumni',
    'Quiet space and a library to think in',
    'Travel grants for conferences and visits',
  ];
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <span className="c-marker">What we offer</span>
          <hr className="c-rule"/>
        </div>
        <div className="offer-grid">
          <ul className="c-list">{left.map((l, i) => <li key={i}>{l}</li>)}</ul>
          <ul className="c-list">{right.map((l, i) => <li key={i}>{l}</li>)}</ul>
        </div>
        <div className="offer-closing">…and you.</div>
      </div>
    </section>
  );
}
window.OfferList = OfferList;
