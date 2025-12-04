import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyerLandingPage from './features/buyer/BuyerLandingPage';
import BuyerSignUp from './features/buyer/BuyerSignUp';
import BuyerLogIn from './features/buyer/BuyerLogIn';
import BuyerProductDetail from './features/buyer/BuyerProductDetail';
import BuyerAccount from './features/buyer/BuyerAccount';
import BuyerPurchase from './features/buyer/BuyerPurchase';

const App: React.FC = () => {
  console.log('App component rendering...');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyerLandingPage />} />
        <Route path="/signup" element={<BuyerSignUp />} />
        <Route path="/login" element={<BuyerLogIn />} />
        <Route path="/account" element={<BuyerAccount />} />
        <Route path="/purchase" element={<BuyerPurchase />} />
        <Route path="/product/:id" element={<BuyerProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

