import React from 'react'; 
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './account.css';

export default function AccountPage() {
  const { t } = useTranslation(); // Use the useTranslation hook
  return (
    <div class="account-container bg-white p-6">
  <h1 class="title">{t('common.Your Account')}</h1>
  <br></br>
  <div class="grid grid-cols-3 gap-4">
    <div class="item">
      <PackageIcon class="icon" />
      <Link to="/order-history" class="link">
        <h2 class="subtitle">{t('common.Your Orders')}</h2>
      </Link>
      <p class="description">Track, return, or buy things again</p>
    </div>
    <div class="item">
      <ShieldIcon class="icon" />
      <Link to="/ls" class="link">
        <h2 class="subtitle">{t('common.Login & security')}</h2>
      </Link>
      <p class="description">Edit login, name, and mobile number</p>
    </div>
    <div class="item">
      <LocateIcon class="icon" />
      <Link to="/address" class="link">
        <h2 class="subtitle">{t('common.Your Addresses')}</h2>
      </Link>
      <p class="description">Edit addresses for orders and gifts</p>
    </div>
    <div class="item">
      <PhoneIcon class="icon" />
      <Link to="/contact" class="link">
        <h2 class="subtitle">{t('common.Contact Us')}</h2>
      </Link>
      <p class="description">Get help with your order</p>
    </div>
    <div class="item">
      <PrivacyIcon class="icon" />
      <Link to="/privacy" class="link">
        <h2 class="subtitle">{t('common.Data and Privacy')}</h2>
      </Link>
      <p class="description">Request Your Information</p>
      <p class="description">Privacy Notice</p>
    </div>
  </div>
</div>
);
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PrivacyIcon(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg"  
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round" 
    >
      <path d="M12 3c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10S6.486 3 12 3M12 15a3 3 0 1 0 0-6 3 3 0 1 0 0 6" />
    </svg>
  );
}