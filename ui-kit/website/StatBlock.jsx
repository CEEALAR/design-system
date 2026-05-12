/* eslint-disable */
function StatBlock() {
  const stats = [
    { num: '54%', label: 'career transition rate among intent cohort' },
    { num: '55%', label: 'more time on impactful work' },
    { num: <>9.1<small>/10</small></>, label: 'resident recommendation' },
  ];
  return (
    <section className="section stat-section">
      <div className="shell">
        <div className="section-head">
          <span className="c-marker">By the numbers</span>
        </div>
        <div className="stat-row">
          {stats.map((s, i) => (
            <div className="c-stat" key={i}>
              <div className="c-stat-num">{s.num}</div>
              <div className="c-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.StatBlock = StatBlock;
