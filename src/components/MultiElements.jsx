import React from 'react';

// 1ª Solução
// export default props => (
//   <div>
//     <h1>Parte 1</h1> <h2>Parte 2</h2>
//   </div>
// );

// 2ª Solução
// export default props => (
//   <React.Fragment>
//     <h1>Parte 1</h1> <h2>Parte 2</h2>
//   </React.Fragment>
// );

// 3ª Solução
export default props => [<h1>Parte 1</h1>, <h2>Parte 2</h2>];
