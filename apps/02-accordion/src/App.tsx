import { useState } from 'react';
import { Accordion } from './components/Accordion';
import { data } from './components/data';

export const App = () => {
  const [isMultiMode, setIsMultiMode] = useState(false);

  return (
    <div className="app-container">
      <button onClick={() => setIsMultiMode((prev) => !prev)}>
        Mode: {isMultiMode ? 'Multiple' : 'Unique'}
      </button>
      <h1>Accordion</h1>
      <Accordion data={data} enableMultiData={isMultiMode} />
    </div>
  );
};
