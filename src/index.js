import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from '../src/components/FirstComponent';
// import { CompA, CompB as B } from './components/TwoComponents';
// import MultiElements from './components/MultiElements';
import FamiliaSilva from './components/FamiliaSilva';

const element = document.getElementById('root');
ReactDOM.render(
  <div>
    <FamiliaSilva />
    {/* <FirstComponent valor="Testing Props" /> 
    <CompA valor="Componente A!" />
    <B valor="Componente B!" /> */}
    {/* <MultiElements /> */}
  </div>,
  element
);
