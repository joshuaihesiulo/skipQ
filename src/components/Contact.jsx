export default function Contact({ whatsappHref = '#contact', emailHref = '#contact' }) {
  return (
    <section className="sec" id="contact" style={{ paddingBottom: '96px' }}>
      <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
        <h2 className="h" style={{ fontSize: 'clamp(30px,4vw,44px)' }}>
          Prefer to talk first?
        </h2>
        <p className="sub" style={{ margin: '14px 0 28px' }}>
          Reach the SkipQ team directly.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a className="btn" href={whatsappHref} id="cw">
            WhatsApp us
          </a>
          <a className="btn" href={emailHref} id="ce" style={{ background: 'var(--soft)' }}>
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
