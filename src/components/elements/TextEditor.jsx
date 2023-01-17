import React, { useState } from 'react';

function TextEditor() {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [fontType, setFontType] = useState('Arial');
  const [bulletPoints, setBulletPoints] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [orderedList, setOrderedList] = useState(false);

  return (
    <div>
      <div>
        <select value={fontSize} onChange={e => setFontSize(e.target.value)}>
          <option value={12}>12</option>
          <option value={14}>14</option>
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
        </select>
        <select value={fontType} onChange={e => setFontType(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
        </select>
        <button onClick={() => setBulletPoints(!bulletPoints)}>
          {bulletPoints ? 'Remove Bullet Points' : 'Add Bullet Points'}
        </button>
        <button onClick={() => setOrderedList(!orderedList)}>
          {orderedList ? 'Remove Ordered List' : 'Add Ordered List'}
        </button>
        <button onClick={() => setBold(!bold)}>
          {bold ? 'Remove Bold' : 'Add Bold'}
        </button>
        <button onClick={() => setItalic(!italic)}>
          {italic ? 'Remove Italic' : 'Add Italic'}
        </button>
      </div>
      <br />
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: fontType,
          padding: bulletPoints ? '30px' : '',
          listStyleType: orderedList ? 'decimal' : '',
          fontWeight: bold ? 'bold' : 'normal',
          fontStyle: italic ? 'italic' : 'normal'
        }}
      />
      <br />
      <button onClick={() => setText('')}>Clear</button>
    </div>
  );
}

export default TextEditor;
