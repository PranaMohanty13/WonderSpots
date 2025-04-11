import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main style={{ padding: '2rem' }}>
        <h1>WanderSpots</h1>
        <p>Helping you discover unexpected places during your free time.</p>
      </main>
    </>
  );
}
