import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    fetch('/api/data')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App-header">
      <div className="card">
        <h1>Multi-Service App</h1>
        <p className="subtitle">React frontend • Node/Express backend</p>

        {loading && <div className="muted">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}

        {data && (
          <pre className="data-block">{JSON.stringify(data, null, 2)}</pre>
        )}

        <div className="controls">
          <button onClick={fetchData} className="btn">Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
