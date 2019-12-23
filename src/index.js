import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from '../src/components/FirstComponent';
import { CompA, CompB as B } from './components/TwoComponents';

const element = document.getElementById('root');
ReactDOM.render(
  <div>
    {/* <FirstComponent valor="Testing Props" />  */}
    <CompA valor="Componente A!" />
    <B valor="Componente B!" />
  </div>,
  element
);
