
import React, { useState } from 'react';

const Connectionform = ({ onSubmit }) => {
  const [offering, setOffering] = useState('');
  const [seeking, setSeeking] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, offering, seeking); // Passing name, offering, and seeking to the parent
    setName('');     // Resetting the name field
    setOffering(''); // Resetting the offering field
    setSeeking('');  // Resetting the seeking field
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>What are you offering?</label>
        <input 
          type="text" 
          value={offering} 
          onChange={(e) => setOffering(e.target.value)} 
        />
      </div>
      <div>
        <label>What are you seeking?</label>
        <input 
          type="text" 
          value={seeking} 
          onChange={(e) => setSeeking(e.target.value)} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Connectionform;
