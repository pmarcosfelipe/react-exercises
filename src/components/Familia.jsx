import React from 'react';

import { childComponentWithProps } from '../utils/utils.js';

export default props => (
  <div>
    <h1>Família</h1>
    {childComponentWithProps(props)}
    {/* {React.Children.map(props.children, child => {
      return React.cloneElement(child, { ...props });
    })} */}
    {/* {React.cloneElement(props.children, { surname: props.surname })} */}
    {/* {React.cloneElement(props.children, { ...props })} */}
    {/* {props.children} */}
  </div>
);
