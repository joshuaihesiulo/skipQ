import { useState, useRef } from 'react';

const WAITLIST_EMAIL = 'skipq.org@gmail.com';

export default function Waitlist() {
  const [msg, setMsg] = useState('');
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const whatsappRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const d = {
      name: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      whatsapp: whatsappRef.current.value.trim(),
      at: Date.now(),
    };

    if (
      !d.name ||
      !/^\S+@\S+\.\S+$/.test(d.email) ||
      d.whatsapp.replace(/\D/g, '').length < 10
    ) {
      setMsg('Please enter your name, a valid email and your WhatsApp number.');
      return;
    }

    setMsg('Sending...');

    // Save locally as backup
    try {
      const stored = JSON.parse(localStorage.getItem('skipq_waitlist') || '[]');
      stored.push(d);
      localStorage.setItem('skipq_waitlist', JSON.stringify(stored));
    } catch (x) {
      // ignore localStorage errors
    }

    // Build and open mailto link to send waitlist submission to SkipQ
    const subject = encodeURIComponent('New SkipQ Waitlist Signup');
    const body = encodeURIComponent(
      `New waitlist signup:\n\nName: ${d.name}\nEmail: ${d.email}\nWhatsApp: ${d.whatsapp}\nDate: ${new Date(d.at).toLocaleString()}`
    );
    window.location.href = `mailto:${WAITLIST_EMAIL}?subject=${subject}&body=${body}`;

    setMsg('Your email client has opened to send your waitlist details to skipq.org@gmail.com.');
    formRef.current.reset();
  };

  return (
    <section className="sec" id="waitlist">
      <div className="cta">
        <div>
          <h2 className="h" style={{ fontSize: 'clamp(34px,5vw,54px)' }}>
            Join the barber waitlist
          </h2>
          <p
            style={{
              lineHeight: '1.7',
              color: 'var(--mut)',
              marginTop: '16px',
              fontSize: '17px',
            }}
          >
            Be among the first barbers to get access to SkipQ. Leave your details and we will contact
            you with updates.
          </p>
        </div>
        <form ref={formRef} id="f" noValidate onSubmit={handleSubmit}>
          <div>
            <label htmlFor="n">Full name</label>
            <input ref={nameRef} autoComplete="name" id="n" required />
          </div>
          <div>
            <label htmlFor="e">Email</label>
            <input ref={emailRef} autoComplete="email" id="e" required type="email" />
          </div>
          <div>
            <label htmlFor="w">WhatsApp number</label>
            <input
              ref={whatsappRef}
              autoComplete="tel"
              id="w"
              placeholder="+234 ..."
              required
              type="tel"
            />
          </div>
          <button className="btn" style={{ background: '#05602a', color: '#fff' }} type="submit">
            Join the waitlist
          </button>
          <p id="msg" role="status" style={{ fontSize: '14px', minHeight: '20px' }}>
            {msg}
          </p>
        </form>
      </div>
    </section>
  );
}
