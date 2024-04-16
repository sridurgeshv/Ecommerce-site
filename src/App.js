import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import Account from "./components/account";
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductDisplay from './components/ProductDisplay';
import Modal from './components/Modal';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; 
import TodayDeals from './components/TodayDeals';
import Men from './components/Men'; 
import Women from './components/Women';
import Books from './components/Books';
import GiftIdeas from "./components/GiftIdeas";
import OrderHistory from './components/OrderHistory';
import ContactPage from "./components/ContactPage";// Import OrderHistory component
import './App.css';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showModal, setShowModal] = useState(false);

  // Assuming you have orders state from your backend
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      let updatedItems = [];
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        updatedItems = prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...prevItems, { ...product, quantity: 1 }];
      }
      sessionStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
    setShowModal(true);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const closeModal = () => setShowModal(false);

  return (
    <UserContext.Provider value={{ profile: userProfile, setProfile: setUserProfile }}>
      <Router>
        <div className="App">
          <Header />     
          <NavBar />     
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ProductDisplay addToCart={addToCart} />
                  {showModal && <Modal closeModal={closeModal} />}
                </>
              }
            />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/checkout" element={<Checkout clearCart={clearCart} />} />
            <Route path="/account" element={<Account />} />
            <Route path="/deals" element={<TodayDeals addToCart={addToCart}/>}/>
            <Route path="/men" element={<Men addToCart={addToCart} />} />
            <Route path="/women" element={<Women addToCart={addToCart} />} />            
            <Route path="/books" element={<Books />} />
            <Route path="/giftIdeas" element={<GiftIdeas addToCart={addToCart} />} />               
            <Route path="/order-history" element={<OrderHistory orders={orders} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
