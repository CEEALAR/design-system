/* eslint-disable */
function AlumniRoll() {
  const orgs = [
    'GovAI', 'MIT', 'UK AISI', 'FAR AI', 'Open Philanthropy',
    'Rethink Priorities', 'Centre for the Governance of AI',
    'Apollo Research', 'Effective Ventures', 'Forethought',
    '80,000 Hours', 'Founders Pledge',
  ];
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <span className="c-marker">Where our alumni are</span>
          <hr className="c-rule"/>
        </div>
        <div className="alumni-grid">
          {orgs.map((o, i) => (
            <span className="c-pill" key={i}>{o}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
window.AlumniRoll = AlumniRoll;
