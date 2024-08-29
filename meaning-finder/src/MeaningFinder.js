import React, { useState } from 'react';

const MeaningFinder = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Meaning Finder</h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Enter a name" 
      />
      <button onClick={fetchData}>Find Meaning</button>
    </div>
  );
};

export default MeaningFinder;
