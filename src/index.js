import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ibcmLogoWhite from './ibcmImg/ibcm_white_nb.png'
import book_1 from './ibcmBooks/Accounting_101.png';
import book_2 from './ibcmBooks/Budgeting_101.png';
import book_3 from './ibcmBooks/DayTrading_101.png';
import book_4 from './ibcmBooks/Debt_101.png';
import book_5 from './ibcmBooks/Economics_101.png';
import book_6 from './ibcmBooks/Investing_101.png';
import book_7 from './ibcmBooks/Management_101.png';
import book_8 from './ibcmBooks/Negotiating_101.png';
import book_9 from './ibcmBooks/PersonalFinance_101.png';
import book_10 from './ibcmBooks/RealEstateInvesting_101.png';
import book_11 from './ibcmBooks/Sales_101.png';
import book_12 from './ibcmBooks/Statistics_101.png';
import book_13 from './ibcmBooks/StockMarket_101.png';

export { ibcmLogoWhite, book_1, book_2, book_3, book_4, book_5,
  book_6, book_7, book_8, book_9, book_10, book_11, book_12, book_13 }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
