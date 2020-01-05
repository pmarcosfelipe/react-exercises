import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from '../src/components/FirstComponent';
// import { CompA, CompB as B } from './components/TwoComponents';
// import MultiElements from './components/MultiElements';
// import FamiliaSilva from './components/FamiliaSilva';
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import ComponentWithFunction from './components/ComponentWithFunction';
// import Pai from './components/Pai';
// import ComponentClass from './components/ComponentClass';
// import Contador from './components/Contador';
import Hook from './components/Hook';

const element = document.getElementById('root');
ReactDOM.render(
  <div>
    <Hook />
    {/* <Contador numero={0} /> */}
    {/* <ComponentClass valor="Sou um Class Component"></ComponentClass> */}
    {/* <Pai /> */}
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
