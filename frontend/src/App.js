import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="App-header">Loading...</div>;
  if (!data) return <div className="App-header">Error loading data</div>;

  return (
    <div className="App-header">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
        <h1>Multi-Service App</h1>
        <p style={{ color: '#cfcfcf' }}>A small demo of a React frontend consuming a Node/Express API.</p>
        <div className="card">
          <h3>API response</h3>
          <pre style={{ textAlign: 'left' }}>{JSON.stringify(data, null, 2)}</pre>
          <div style={{ marginTop: 12 }}>
            <button onClick={() => window.location.reload()}>Refresh</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
