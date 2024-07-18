import React, { useState } from 'react';
import axios from 'axios';
import './OrderForm.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    malzemeler: [],
    ozel: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        malzemeler: checked
          ? [...prev.malzemeler, value]
          : prev.malzemeler.filter((m) => m !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.isim.length < 3 || !formData.boyut || formData.malzemeler.length < 4 || formData.malzemeler.length > 10) {
      alert('Lütfen tüm alanları doğru doldurun.');
      return;
    }
    try {
      const response = await axios.post('https://reqres.in/api/pizza', formData);
      console.log(response.data);
     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="order-form-container">
      <h1 className="order-form-title">Position Absolute Acı Pizza</h1>
      <form onSubmit={handleSubmit} className="order-form">
        <div>
          <label className="order-form-label">İsim:</label>
          <input
            type="text"
            name="isim"
            value={formData.isim}
            onChange={handleChange}
            className="order-form-input"
            required
          />
        </div>
          
          <div>
          <label className="order-form-label">Boyut Seç:</label>
          <div className="order-form-radio-group">
            <label>
              <input type="radio" name="boyut" value="Küçük" onChange={handleChange} /> Küçük
            </label>
            <label>
              <input type="radio" name="boyut" value="Orta" onChange={handleChange} /> Orta
            </label>
            <label>
              <input type="radio" name="boyut" value="Büyük" onChange={handleChange} /> Büyük
            </label>
          </div>
        </div>
        <div>
          <label className="order-form-label">Hamur Seç:</label>
          <select name="hamur" onChange={handleChange} className="order-form-select">
            <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
          
          </select>
        </div>
        
        <div>
          <label className="order-form-label">Ek Malzemeler:</label>
          <div className="order-form-checkbox-group">
            <label>
              <input type="checkbox" name="malzemeler" value="Pepperoni" onChange={handleChange} className="order-form-checkbox" /> Pepperoni
            </label>
            <label>
              <input type="checkbox" name="malzemeler" value="Sosis" onChange={handleChange} className="order-form-checkbox" /> Sosis
            </label>
          
          </div>
        </div>
        <div>
          <label className="order-form-label">Sipariş Notu:</label>
          <textarea
            name="ozel"
            value={formData.ozel}
            onChange={handleChange}
            className="order-form-textarea"
          />
        </div>
        <button
          type="submit"
          className="order-form-button"
          disabled={
            formData.isim.length < 3 ||
            !formData.boyut ||
            formData.malzemeler.length < 4 ||
            formData.malzemeler.length > 10
          }
        >
          Sipariş Ver
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
