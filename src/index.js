import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <h1 className='text-center my-5'>Products</h1>
      <App />
    </div>
  </React.StrictMode>
);

