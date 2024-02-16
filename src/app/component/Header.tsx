export default function Header() {
  return (
    <header>
      <h1>{process.env.SITE_TITLE}</h1>
    </header>
  );
}