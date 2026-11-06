const STEPS = [
  {
    num: '1',
    title: 'Set up your services',
    body: 'Add your services, set your prices and choose the times you are available.',
  },
  {
    num: '2',
    title: 'Customers reserve a slot',
    body: 'Customers choose an available time and make a reservation with your shop.',
  },
  {
    num: '3',
    title: 'Run your day and earn',
    body: 'Work from your organised schedule, serve your booked customers and earn from reservations. SkipQ takes a commission on bookings.',
  },
];

export default function How() {
  return (
    <section className="sec" id="how">
      <div className="head">
        <h2 className="h">How it works</h2>
        <p className="sub">
          You stay in control of your availability while customers reserve a time that works for them.
        </p>
      </div>
      <div className="grid">
        {STEPS.map((step) => (
          <div key={step.num} className="card">
            <div className="num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
