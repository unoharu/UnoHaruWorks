import React, { useState } from 'react';
import 'nes.css/css/nes.min.css'; 
import '../css/Style.css';

export const InputToDo = (props) => {
  const [text, setText] = useState('');

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault(); // ページのリロードを防ぐ
    if (!text.match(/\S/g)) return;
    props.onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-input'>
      <div className="nes-field form-wrap">
        <input
          className="nes-input form-input"
          type="text"
          placeholder="Enter to add"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className="nes-btn is-primary">Add</button>
      </div>
    </form>
  );
};

export default InputToDo;
