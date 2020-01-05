import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from '../src/components/FirstComponent';
// import { CompA, CompB as B } from './components/TwoComponents';
// import MultiElements from './components/MultiElements';
// import FamiliaSilva from './components/FamiliaSilva';
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import ComponentWithFunction from './components/ComponentWithFunction';
import Pai from './components/Pai';

const element = document.getElementById('root');
ReactDOM.render(
  <div>
    <Pai />
    {/* <ComponentWithFunction /> */}
    {/* <Familia surname="Pereira">
      <Membro name="João"></Membro>
      <Membro name="Marcos"></Membro>
    </Familia> */}
    {/* <FamiliaSilva /> */}
    {/* <FirstComponent valor="Testing Props" /> 
    <CompA valor="Componente A!" />
    <B valor="Componente B!" /> */}
    {/* <MultiElements /> */}
  </div>,
  element
);
