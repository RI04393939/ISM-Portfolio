const secondarySources = [
  { label: 'Assessment 1',               file: 'Assesment #1.docx' },
  { label: 'Assessment 2',               file: 'Research Assesment #2.docx' },
  { label: 'Assessment 3',               file: 'Rithviks\'s Research Assessment 3.docx' },
  { label: 'Assessment 4',               file: '_Research Assesment #4.docx' },
  { label: 'Assessment 5 (OW Part 1)',   file: 'Research Assesment #5(OW PART 1).docx' },
  { label: 'Assessment 7 (OW Part 2)',   file: '_Research Assesment #7(OW PART 2).docx' },
  { label: 'Assessment 8 (OW Part 3)',   file: 'Research Assesment #8(OW PART 3).docx' },
  { label: 'Assessment 9',               file: 'Research Assesment #9 .docx' },
  { label: 'Assessment 12',              file: '_Research Assesment #12.docx' },
  { label: 'Assessment 13',              file: 'Research Assesment #13.docx' },
  { label: 'Assessment 14',             file: 'Research Assesment #14.docx' },
  { label: 'Assessment 15',             file: 'Research Assesment #15.docx' },
  { label: 'Assessment 16',             file: 'Research Assesment #16.docx' },
];

export default function Research() {
  return (
    <main className="page-container">
      <h1 className="page-heading reveal">Research</h1>

      {/* Primary Sources */}
      <div className="reveal" style={{ marginBottom: '2.5rem' }}>
        <p className="page-subheading">Primary Sources</p>

        <div className="content-card" style={{ marginBottom: '1rem' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Interviews
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { date: 'January 14, 2026', subject: 'Interview with Subramanian Sankaran — Introduction to Deep Learning Research' },
              { date: 'February 11, 2026', subject: 'Interview with Subramanian Sankaran — Neural Network Architectures & Transformer Models' },
              { date: 'March 4, 2026',    subject: 'Interview with Subramanian Sankaran — Large Language Models & Fine-Tuning Strategies' },
            ].map((item) => (
              <div key={item.date} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                border: '1px solid var(--card-border)',
                borderRadius: '6px',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                <span style={{ color: '#ccc', fontSize: '0.85rem', flex: 1 }}>{item.subject}</span>
                <span style={{ color: 'var(--accent)', fontSize: '0.65rem', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card">
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Mentor Visits
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { date: 'January 28, 2026', subject: 'Mentor Visit #1 — Workspace Tour & Research Goal Setting' },
              { date: 'February 25, 2026', subject: 'Mentor Visit #2 — Hands-On Session: PyTorch & Model Training Pipelines' },
              { date: 'March 18, 2026',   subject: 'Mentor Visit #3 — Literature Review Discussion & Paper Deep-Dive' },
              { date: 'April 15, 2026',   subject: 'Mentor Visit #4 — Original Work Checkpoint & Experiment Design' },
              { date: 'May 20, 2026',     subject: 'Mentor Visit #5 — Final Project Review & Presentation Feedback' },
            ].map((item) => (
              <div key={item.date} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                border: '1px solid var(--card-border)',
                borderRadius: '6px',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                <span style={{ color: '#ccc', fontSize: '0.85rem', flex: 1 }}>{item.subject}</span>
                <span style={{ color: 'var(--accent)', fontSize: '0.65rem', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Sources */}
      <div className="reveal">
        <p className="page-subheading">Secondary Sources</p>
        <div className="content-card">
          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Research Assessments
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {secondarySources.map((src) => (
              <div key={src.label} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                border: '1px solid var(--card-border)',
                borderRadius: '6px',
                gap: '1rem',
              }}>
                <span style={{ color: '#ccc', fontSize: '0.85rem' }}>{src.label}</span>
                <a
                  href={`/research/${src.file}`}
                  download
                  style={{
                    padding: '0.35rem 0.9rem',
                    border: '1px solid rgba(96,165,250,0.3)',
                    color: 'var(--accent)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Download ↓
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
