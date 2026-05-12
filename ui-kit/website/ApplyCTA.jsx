/* eslint-disable */
const { useState: useApplyState } = React;

function ApplyCTA() {
  const [submitted, setSubmitted] = useApplyState(false);
  const [email, setEmail] = useApplyState('');
  return (
    <section className="section apply">
      <div className="shell apply-inner">
        <span className="c-marker" style={{ color: '#D1A75E' }}>Applications open</span>
        <h2 className="apply-h">
          Apply for a residency.<br/>
          <em>It's free to ask.</em>
        </h2>
        <p className="apply-sub">
          Rolling intake. Most stays are 4–12 weeks. Needs-based subsidies cover full board.
        </p>
        {submitted ? (
          <div className="apply-thanks">
            Thanks — we'll be in touch within a week.
          </div>
        ) : (
          <form
            className="apply-form"
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <input
              className="c-input"
              type="email"
              required
              placeholder="you@email.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="c-btn" type="submit">Start an application</button>
          </form>
        )}
      </div>
    </section>
  );
}
window.ApplyCTA = ApplyCTA;
