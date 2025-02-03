import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider as JotaiProvider } from 'jotai';
import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import QuantumMindmap from './pages/QuantumMindmap';
import SecurityPolicy from './pages/SecurityPolicy';
import Layout from './components/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/mindmap" element={<QuantumMindmap />} />
              <Route path="/security" element={<SecurityPolicy />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </JotaiProvider>
  );
}

export default App;