import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from '../src/components/FirstComponent';
// import { CompA, CompB as B } from './components/TwoComponents';
// import MultiElements from './components/MultiElements';
// import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro';

const element = document.getElementById('root');
ReactDOM.render(
  <div>
    <Familia>
      <Membro name="João" surname="Pereira"></Membro>
      <Membro name="Marcos " surname="Pereira"></Membro>
    </Familia>
    {/* <FamiliaSilva /> */}
    {/* <FirstComponent valor="Testing Props" /> 
    <CompA valor="Componente A!" />
    <B valor="Componente B!" /> */}
    {/* <MultiElements /> */}
  </div>,
  element
);
