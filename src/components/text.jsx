import React, { useState } from 'react';

function MyForm() {
  const [text, setText] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/text', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' },
    });
    const { status, message } = await response.json();
    if (status === true) {
      
      alert(message);
    }
    else{
      alert('try again')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
