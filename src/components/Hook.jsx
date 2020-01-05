import React, { useState, useEffect } from 'react';

export default props => {
  const [contador, setContador] = useState(0);
  const [parOuImpar, setParOuImpar] = useState('Par');

  useEffect(() => {
    contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Ímpar');
  }, [contador]);

  return (
    <div>
      <h1>Número: {contador}</h1>
      <h1>Par ou Ímpar? {parOuImpar}</h1>
      <button onClick={() => setContador(contador + 1)}>Inc</button>
    </div>
  );
};
