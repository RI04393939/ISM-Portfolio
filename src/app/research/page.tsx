export default function Research() {
  return (
    <main className="page-container">
      <h1 className="page-heading reveal">Research</h1>

      {/* Primary Sources */}
      <div className="reveal" style={{ marginBottom: '2.5rem' }}>
        <p className="page-subheading">Primary Sources</p>

        <div className="content-card" style={{ marginBottom: '1rem' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Interviews
          </p>
          <div className="placeholder-box" style={{ marginBottom: 0 }}>
            No interviews added yet
          </div>
        </div>

        <div className="content-card">
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Mentor Visits
          </p>
          <div className="placeholder-box" style={{ marginBottom: 0 }}>
            No mentor visits added yet
          </div>
        </div>
      </div>

      {/* Secondary Sources */}
      <div className="reveal">
        <p className="page-subheading">Secondary Sources</p>
        <div className="content-card">
          <div className="placeholder-box" style={{ marginBottom: 0 }}>
            No secondary sources added yet
          </div>
        </div>
      </div>
    </main>
  );
}
