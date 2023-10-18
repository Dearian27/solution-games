import React, { useState, useEffect } from 'react';

const Component = () => {
  // Створюємо стан для зберігання ref'ів
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    // При кожній зміні довжини масиву ref'ів, оновлюємо його значення
    setRefs(prevRefs => Array({length: 5}).map((_, i) => prevRefs[i] || React.createRef()));
  }, []);

  return (
    <div>
      {refs.map((ref, index) => (
        <div key={index} ref={ref}>
          Елемент {index}
        </div>
      ))}
    </div>
  );
};

export default Component;