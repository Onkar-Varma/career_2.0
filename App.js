import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import OrderPage from './pages/orderpage/OrderPage';
import CustomerPage from './pages/customer/CustomerPage';
import OrderDetails from './pages/order_details/OrderDetails';
import NewOrder from './pages/create_new_order/CreateNewOrder';
import NewCustomer from './pages/create_new_customer/CreateNewCustomer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<OrderPage />} />
          <Route path='customer' element={<CustomerPage />} />
          <Route path='details' element={<OrderDetails />} />
          <Route path='newOrder' element={<NewOrder />} />
          <Route path='newcustomer' element={<NewCustomer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
