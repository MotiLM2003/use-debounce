import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const App = () => {
  const [value, setValue] = useState('');
  const [dbSave, setDbSave] = useState('');
  const callback = useDebounce((nextValue) => setDbSave(nextValue), 1000);
  const handleValeChange = (e) => {
    const nextValue = e.target.value;
    setValue(nextValue);
    callback(nextValue);
    console.log(nextValue);
  };

  return (
    <div>
      <h1>Decouncing hook example</h1>
      <div>
        <input tpye='text' value={value} onChange={handleValeChange} />
      </div>
      <div>sending request: {dbSave}</div>
    </div>
  );
};

export default App;
