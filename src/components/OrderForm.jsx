import React, { useState } from 'react';
import axios from 'axios';

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
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold my-8">Position Absolute Acı Pizza</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-3/4 max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700">İsim:</label>
          <input
            type="text"
            name="isim"
            value={formData.isim}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Boyut Seç:</label>
          <div>
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
        <div className="mb-4">
          <label className="block text-gray-700">Hamur Seç:</label>
          <select name="hamur" onChange={handleChange} className="mt-1 p-2 w-full border rounded">
            <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
            {/* Diğer seçenekler */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ek Malzemeler:</label>
          <div>
            {/* Malzeme seçeneklerini checkbox olarak ekle */}
            <label>
              <input type="checkbox" name="malzemeler" value="Pepperoni" onChange={handleChange} /> Pepperoni
            </label>
            <label>
              <input type="checkbox" name="malzemeler" value="Sosis" onChange={handleChange} /> Sosis
            </label>
            {/* Diğer malzemeler */}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sipariş Notu:</label>
          <textarea
            name="ozel"
            value={formData.ozel}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-black py-2 px-4 rounded"
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
