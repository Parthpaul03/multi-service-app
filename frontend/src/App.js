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
    <div className="App-header">
      <div className="hero">
        <div className="hero-content">
          <h1>Multi-Service App</h1>
          <p className="lead">A polished demo with React frontend, Node/Express backend, and Nginx + Docker Compose.</p>
          <div className="hero-cta">
            <button onClick={fetchData} className="btn primary">Refresh Data</button>
            <a href="#demo" className="btn outline">View Data</a>
          </div>
        </div>
      </div>

      <main className="container" id="demo">
        <div className="card">
          <h2>Live API Response</h2>
          {loading && <div className="muted">Loading...</div>}
          {error && <div className="error">Error: {error}</div>}
          {data && <pre className="data-block">{JSON.stringify(data, null, 2)}</pre>}
        </div>
      </main>
    </div>
  );
}

export default App;

