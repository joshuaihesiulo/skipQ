export default function Hero() {
  return (
    <section className="dark hero" id="top">
      <div className="hero-in">
        <h1 className="h" style={{ fontSize: 'clamp(42px,7vw,82px)', margin: '26px 0 0' }}>
          Make More From <span style={{ color: 'var(--lime)' }}>Every Chair.</span>
        </h1>
        <p
          style={{
            fontSize: '19px',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '22px auto 0',
            color: 'var(--mut)',
          }}
        >
          SkipQ helps salons earn more from every customer at every available hour. Customers can book
          ahead, pay for the convenience, and arrive at their chosen time, while you can also sell hair
          products, accessories, and more through your own digital storefront.
        </p>
        <p className="hero-slogan">More bookings. More retail. More from every hour.</p>
        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '36px',
          }}
        >
          <a className="btn" href="#waitlist">
            Join the waitlist
          </a>
          <a className="btn o" href="#contact">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
