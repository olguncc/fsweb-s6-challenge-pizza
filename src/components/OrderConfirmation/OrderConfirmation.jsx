import React from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  return (
    <div className="confirmation-container">
      <h1 className="confirmation-header">Teknolojik Yemekler</h1>
      <p className="confirmation-message">TEBRİKLER! SİPARİŞİNİZ ALINDI!</p>
      <button className="confirmation-button">Yeni Sipariş Ver</button>
    </div>
  );
};

export default OrderConfirmation;
