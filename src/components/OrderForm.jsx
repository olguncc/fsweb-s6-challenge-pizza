import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    malzemeler: [],
    özel: ''
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const updatedMalzemeler = checked
          ? [...prevData.malzemeler, value]
          : prevData.malzemeler.filter((malzeme) => malzeme !== value);
        return { ...prevData, malzemeler: updatedMalzemeler };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/pizza', formData);
      console.log('Sipariş Özeti:', response.data);
    } catch (error) {
      console.error('Sipariş gönderilirken bir hata oluştu:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="isim"
        value={formData.isim}
        onChange={handleChange}
        placeholder="İsim"
        required
        minLength={3}
      />
      <div>
        <label>
          <input type="radio" name="boyut" value="Küçük" onChange={handleChange} required />
          Küçük
        </label>
        <label>
          <input type="radio" name="boyut" value="Orta" onChange={handleChange} required />
          Orta
        </label>
        <label>
          <input type="radio" name="boyut" value="Büyük" onChange={handleChange} required />
          Büyük
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="malzemeler" value="Mozzarella" onChange={handleChange} />
          Mozzarella
        </label>
        <label>
          <input type="checkbox" name="malzemeler" value="Pepperoni" onChange={handleChange} />
          Pepperoni
        </label>
        {/* Diğer malzemeler */}
      </div>
      <textarea
        name="özel"
        value={formData.özel}
        onChange={handleChange}
        placeholder="Notlar"
      ></textarea>
      <button type="submit">Sipariş Ver</button>
    </form>
  );
};

export default OrderForm;
