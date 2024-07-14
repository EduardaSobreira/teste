import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import UserTable from './components/UserTable/UserTable';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/" element={<UserTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
