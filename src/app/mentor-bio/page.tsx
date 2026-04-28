import Image from 'next/image';

export default function MentorBio() {
  return (
    <main className="page-container">
      <h1 className="page-heading reveal">Mentor Bio</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
        {/* Mentor photo */}
        <div className="reveal" style={{ position: 'relative', minHeight: '300px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            src="/mentor-sankaran.jpg"
            alt="Subramanian Sankaran"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>

        {/* Name & title */}
        <div className="content-card reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="page-subheading">Mentor</p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
            Subramanian Sankaran
          </h2>
          <p style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            AI Innovation Lead at Citi
          </p>
          <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '0.9rem' }}>
            Subramanian Sankaran is the AI Innovation Lead at Citi, where he spearheads the firm's
            artificial intelligence strategy across large-scale financial systems. With over fifteen
            years of experience in machine learning and deep learning, he drives real-world AI
            deployments spanning natural language processing, computer vision, and generative AI
            within one of the world's largest financial institutions.
          </p>
        </div>
      </div>

      {/* Experience in AI */}
      <div className="content-card reveal">
        <p className="page-subheading">Experience in AI</p>
        <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          At Citi, Subramanian leads cross-functional teams building and deploying production-grade AI
          systems — from transformer-based models for document understanding and risk analysis to
          generative AI tools that streamline operations across the bank. He is responsible for
          translating cutting-edge research into scalable, compliant solutions within a highly regulated
          financial environment.
        </p>
        <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          He has deep expertise in frameworks such as PyTorch and TensorFlow and has guided teams
          through the full model lifecycle — from data engineering and training to inference optimization
          and responsible AI governance. He has mentored dozens of engineers and emerging researchers
          throughout his career.
        </p>
        <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '0.9rem' }}>
          Subramanian is particularly passionate about making AI research accessible to the next
          generation of practitioners. His mentorship philosophy centers on rigorous thinking, hands-on
          experimentation, and developing an intuition for when and why models succeed or fail — skills
          he actively fosters in students like Rithvik through structured visits, technical discussions,
          and guided original work.
        </p>
      </div>

      {/* Areas of Expertise */}
      <div className="content-card reveal">
        <p className="page-subheading">Areas of Expertise</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.5rem' }}>
          {[
            'Deep Learning',
            'Transformer Architectures',
            'Large Language Models',
            'Computer Vision',
            'NLP',
            'Generative AI',
            'Model Efficiency & Quantization',
            'Responsible AI',
            'PyTorch',
            'Research Mentorship',
          ].map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
