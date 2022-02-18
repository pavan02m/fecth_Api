import './App.css';
import React, { useState } from 'react';
import { Loader } from './components/Loader';
import Navbar from './components/Navbar';
import Users from './components/User';
import { apifetch } from './components/Configration';

function App() {
  const [personData, setpersonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState({ minPage: 0, maxPage: 1 });

  const getpersonData = async minPage => {
    if (personData.length !== 0 && minPage === 1) {
      return;
    }
    setLoading(true);
    const users = await apifetch(minPage);
    setPage({ minPage, maxPage: personData.total_pages });

    setLoading(false);
    setpersonData([...personData, ...users.data]);

  };

  return (
    <div className="App">
      <Navbar getpersonData={getpersonData} />

      {loading && (
        <Loader />
      )}

      {!loading && personData && <Users personData={personData} />}

    </div>
  );
}

export default App;
