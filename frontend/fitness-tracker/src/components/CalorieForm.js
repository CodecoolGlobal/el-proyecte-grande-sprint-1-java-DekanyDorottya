import React, { useState } from 'react';
import Button from '@mui/material/Button';

const CaloriesForm = () => {
  const [calories, setCalories] = useState(0);

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/calories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ calories:calories }),
      });

      if (!response.ok) {
        throw new Error('Failed to post calories.');
      }

      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error posting calories:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="calories">Enter Calories:</label>
      <input type="number" id="calories" value={calories} onChange={handleCaloriesChange} />
      <Button variant="contained" type="submit">Post Calories</Button>
    </form>
  );
};

export default CaloriesForm;