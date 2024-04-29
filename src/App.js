import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OrderProvider } from './contexts/OrderContext'; // Import OrderProvider
import AccountPage from "./components/views/accountpage";
import UserContext from './contexts/UserContext'; // Import UserContext
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import ProductDisplay from './components/products/ProductDisplay';
import Modal from './components/common/Modal';
import Cart from './components/views/Cart';
import Checkout from './components/views/Checkout';
import TodayDeals from './components/products/TodayDeals';
import Electronics from './components/products/Electronics';
import Jewelery from './components/products/Jewelery';
import Men from './components/products/Men'; 
import Women from './components/products/Women';
import GiftIdeas from "./components/products/GiftIdeas";
import OrderHistory from './components/views/OrderHistory';
import ContactPage from "./components/views/ContactPage";// Import OrderHistory component
import Privacy from "./components/views/privacy";
import Register from './components/auth/Register'; // Import the Register component
import Login from './components/auth/login'; // Import the Register component
import Ls from './components/auth/ls'; // Import the ls component with correct casing
import Address from './components/views/Address';
import SearchResults from './components/services/SearchResults';
import SearchResultsPage from './components/services/SearchResultsPage';
import './App.css';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showModal, setShowModal] = useState(false);

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
      return updatedItems
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
          <Route path="/checkout" element={<Checkout clearCart={clearCart}/>} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/deals" element={<TodayDeals addToCart={addToCart}/>}/>
          <Route path="/electronics" element={<Electronics addToCart={addToCart} />} />
          <Route path="/jewelery" element={<Jewelery addToCart={addToCart} />} />
          <Route path="/men" element={<Men addToCart={addToCart} />} />
          <Route path="/women" element={<Women addToCart={addToCart} />} />            
          <Route path="/giftIdeas" element={<GiftIdeas addToCart={addToCart} />} />               
          <Route path="/order-history" element={<OrderHistory />} /> {/* Removed unnecessary prop */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/address" element={<Address />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/ls" element={<Ls />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </UserContext.Provider>
  );
}

const WrappedApp = () => (
  <OrderProvider> {/* Wrap App with OrderProvider */}
    <App />
  </OrderProvider>
);

export default WrappedApp;