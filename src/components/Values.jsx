const VALUES = [
  {
    title: 'Barbers first',
    body: 'We build tools that help barbers organise their work, manage customers and earn from their services.',
  },
  {
    title: 'Fair to both sides',
    body: 'We aim to make reservations clear and straightforward for both barbers and their customers.',
  },
  {
    title: 'Honest pricing',
    body: 'You choose your service prices. SkipQ earns through a commission on bookings made on the platform.',
  },
  {
    title: 'Built with you',
    body: 'We are building with barbers in mind and want the tools to solve real day-to-day shop needs.',
  },
];

export default function Values() {
  return (
    <section className="sec" id="values">
      <div className="head">
        <h2 className="h">Our values</h2>
      </div>
      <div className="grid">
        {VALUES.map((value) => (
          <div key={value.title} className="card soft">
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
