import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardStats from './components/DashboardStats';
import Guide from './components/Guide';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<DashboardStats />} />
            <Route path="/guide" element={<Guide />} />
            {/* Other routes will be added as we create more components */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;