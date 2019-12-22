import React from 'react';
import ReactDOM from 'react-dom';

import FirstComponent from '../src/components/FirstComponent';

const element = document.getElementById('root');
ReactDOM.render(<FirstComponent valor="Testing Props" />, element);
