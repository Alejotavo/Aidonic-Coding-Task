
import './App.css'
import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Filter } from './components/Filter';
import { TableContainer } from './components/Table';
import { Header } from './components/Header';
import { distributions } from './service/mockApi';
import { DistributionDetailsContainer } from './components/DistributionDetails';
import { Dashboard } from './components/Dashboard';

// Available filter options
const statusOptions = ['Planned', 'Ongoing', 'Completed'];
const regionOptions = Array.from(new Set(distributions.map((d: { region: string }) => d.region)));

/**
 * Main page component that displays the distribution list with filters
 * 
 * @returns JSX element representing the main page with filters and table
 */
function MainPage() {
  // Filter state management
  const [status, setStatus] = useState('');
  const [region, setRegion] = useState('');

  // Memoized callback handlers for filter changes
  const handleStatusChange = useCallback((value: string) => setStatus(value), []);
  const handleRegionChange = useCallback((value: string) => setRegion(value), []);

  return (
    <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">
      {/* Filter controls */}
      <div className="flex flex-col gap-4 mb-4 sm:flex-row">
        <Filter 
          label="Status" 
          value={status} 
          options={statusOptions} 
          onChange={handleStatusChange} 
        />
        <Filter 
          label="Region" 
          value={region} 
          options={regionOptions} 
          onChange={handleRegionChange} 
        />
      </div>
      
      {/* Distribution table */}
      <TableContainer status={status} region={region} />
    </div>
  );
}

/**
 * Main application component that sets up routing and layout
 * 
 * @returns JSX element representing the entire application
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/distribution/:id" element={<DistributionDetailsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
