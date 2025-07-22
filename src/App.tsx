
import './App.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filter from './components/filterComponent';
import Table from './components/tableComponent';
import Header from './components/UI/header';
import { distributions } from './service/mockApi';
import DistributionDetails from './components/DistributionDetails';

const statusOptions = ['Planned', 'Ongoing', 'Completed'];
const regionOptions = Array.from(new Set((distributions as any[]).map(d => d.region)));

function MainPage() {
  const [status, setStatus] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <Header />
      <div className="flex gap-4 mb-4">
        <Filter label="Status" value={status} options={statusOptions} onChange={setStatus} />
        <Filter label="Region" value={region} options={regionOptions} onChange={setRegion} />
      </div>
      <Table status={status} region={region} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/distribution/:id" element={<DistributionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
