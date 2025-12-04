import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './features/auth/components/Login';
import SellerDashboard from './features/seller/components/SellerDashboard';
import MyOrders from './features/seller/components/MyOrders';
import MyIncome from './features/seller/components/MyIncome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/income" element={<MyIncome />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

