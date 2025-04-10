import { useEffect, useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg('Failed to reach backend'));
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>WanderSpots</h1>
      <p>Backend says: {msg}</p>
    </main>
  );
}
