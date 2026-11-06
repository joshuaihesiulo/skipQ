const FEATURES = [
  {
    num: '01',
    title: 'Booking & schedule manager',
    body: 'Manage reservations, see who is booked and when they are expected, and keep your day organised in one clear view.',
  },
  {
    num: '02',
    title: 'Earn from bookings',
    body: 'Earn when customers reserve through SkipQ, creating another way to generate income from the services you provide.',
  },
  {
    num: '03',
    title: 'Your prices stay yours',
    body: 'Add your own services and set your own prices. SkipQ takes a commission on bookings made through the platform.',
  },
  {
    num: '04',
    title: 'Customer CRM',
    pill: 'Add-on',
    body: 'Keep customer names, phone numbers and contact details organised. Use your customer list to support automated customer care, appointment reminders and follow-up messages.',
  },
  {
    num: '05',
    title: 'In-app shop',
    pill: 'Add-on',
    body: 'Access a dedicated in-app store to showcase and sell products, with room for future SkipQ updates, tools and features.',
  },
  {
    num: '06',
    title: 'Flexible booking slots',
    body: 'Set available slots and organise your time and capacity around the way your shop operates.',
  },
];

export default function Why() {
  return (
    <section className="sec" id="why">
      <div className="head">
        <h2 className="h">Your time. Your shop. Better organised.</h2>
        <p className="sub">
          SkipQ gives barbers a practical way to manage appointments, keep their day structured and earn from reservations made
          through the platform—all with the tools to run their shop in one place.
        </p>
      </div>
      <div className="grid">
        {FEATURES.map((feature) => (
          <div key={feature.num} className={`card soft ${feature.pill ? '' : ''}`}>
            <div className="num">{feature.num}</div>
            <h3>
              {feature.title}
              {feature.pill && <span className="pill">{feature.pill}</span>}
            </h3>
            <p>{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
