import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MachinePage from 'pages/MachinePage';
import DocumentPage from 'pages/DocumentPage';
import RequestServicePage from 'pages/RequestServicePage';
import MaintenancePage from 'pages/MaintenancePage';
import ContactSupportPage from 'pages/ContactSupportPage';
import AdminDashboardPage from 'admin/pages/AdminDashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MachinePage />} />
        <Route path="/documents" element={<DocumentPage />} />
        <Route path="/request-service" element={<RequestServicePage />} />
        <Route path="/service-history" element={<MaintenancePage />} />
        <Route path="/contact-support" element={<ContactSupportPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
