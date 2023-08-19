import React, { useState } from 'react';

import axios from 'axios';

const IncomeForm = () => {
  const [incomeData, setIncomeData] = useState({
    
    name: '',
    amount: '',
    date: '',
    categoriesincomes: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://saint-api-incomes-crud.onrender.com/Api/incomes', incomeData);

      if (response.status === 201) {
        } else {
         }
    } catch (error) {
    }
  };

  return (
    <div>
      <h2>Form Incomes</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Categories Incomes:</label>
          <input
            type="text"
            value={incomeData.categoriesincomes}
            onChange={(e) => setIncomeData({ ...incomeData, categoriesincomes: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={incomeData.name}
            onChange={(e) => setIncomeData({ ...incomeData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={incomeData.amount}
            onChange={(e) => setIncomeData({ ...incomeData, amount: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={incomeData.date}
            onChange={(e) => setIncomeData({ ...incomeData, date: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IncomeForm;
