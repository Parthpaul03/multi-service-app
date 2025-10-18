import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/data');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App-root">
      <header className="hero">
        <div className="hero-inner">
          <h1>Multi-Service App</h1>
          <p className="subtitle">React frontend • Node/Express backend • Docker Compose</p>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h2>API response</h2>

          {loading && <div className="muted">Loading...</div>}
          {error && <div className="error">Error: {error}</div>}

          {data && <pre className="data-block">{JSON.stringify(data, null, 2)}</pre>}

          <div className="controls">
            <button onClick={fetchData} className="btn">Refresh</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
