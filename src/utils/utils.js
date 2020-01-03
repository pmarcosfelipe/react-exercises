import React from 'react';

export function childComponentWithProps(props) {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, { ...props });
  });
}
