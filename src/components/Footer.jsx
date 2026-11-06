export default function Footer() {
  return (
    <footer
      className="sec"
      style={{
        paddingBottom: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        borderTop: '1px solid var(--line)',
        paddingTop: '24px',
        marginTop: '0',
      }}
    >
      <img alt="SkipQ" className="logo-img" src="/logo.png" />
    </footer>
  );
}
