
import './App.css'
import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filter from './components/filterComponent';
import Table from './components/tableComponent';
import Header from './components/UI/header';
import { distributions } from './service/mockApi';
import DistributionDetails from './pages/distributionDetails';
import Dashboard from './pages/dashboard';

const statusOptions = ['Planned', 'Ongoing', 'Completed'];
const regionOptions = Array.from(new Set(distributions.map((d: { region: string }) => d.region)));

function MainPage() {
  const [status, setStatus] = useState('');
  const [region, setRegion] = useState('');

  const handleStatusChange = useCallback((value: string) => setStatus(value), []);
  const handleRegionChange = useCallback((value: string) => setRegion(value), []);

  return (
    <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">
      <div className="flex flex-col gap-4 mb-4 sm:flex-row">
        <Filter label="Status" value={status} options={statusOptions} onChange={handleStatusChange} />
        <Filter label="Region" value={region} options={regionOptions} onChange={handleRegionChange} />
      </div>
      <Table status={status} region={region} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/distribution/:id" element={<DistributionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
