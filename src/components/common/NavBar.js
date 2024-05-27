import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideMenu from '../views/SlideMenu';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './NavBar.css';

const NavBar = () => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-color">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-10">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              <span className="nav-link" onClick={toggleSidebar}>&#9776; All</span>
              <Link className="nav-link" to="/deals">
              {t('common.Today\'s Deals')}
              </Link>
              <Link className="nav-link" to="/electronics">
              {t('common.Electronics')} 
              </Link> 
              <Link className="nav-link" to="/men">
              {t('common.Men')}
              </Link>
              <Link className="nav-link" to="/women">
              {t('common.Women')}
              </Link>   
              <Link className="nav-link" to="/jewelery">
              {t('common.Jewellery')}  
              </Link>           
              <Link className="nav-link" to="/giftIdeas">
              {t('common.Gift Ideas')}
              </Link>
              <Link className="nav-link" to="/order-history">
              {t('common.Order History')}
              </Link>
              <Link className="nav-link" to="/contact">
              {t('common.Customer Service')}
              </Link>                          
            </div>
          </div>
        </div>
        </div>
        {isSidebarOpen && <SlideMenu toggleSidebar={toggleSidebar} />}
    </nav>
  );
};

export default NavBar;
