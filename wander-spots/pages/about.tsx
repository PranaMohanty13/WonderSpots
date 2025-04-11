import NavBar from '../components/NavBar';

export default function About() {
  return (
    <>
      <NavBar />
      <main style={{ padding: '2rem' }}>
        <h1>About WanderSpots</h1>
        <p>
          WanderSpots is being built to help travelers discover the unexpected — from hidden bookstores to public art to offbeat experiences that don't show up on typical tourist maps.
        </p>
        <p>
          This page will grow as the project grows — but for now, it’s a place to say hello 👋
        </p>
      </main>
    </>
  );
}
