import React from 'react';
import { render } from 'react-dom';
import MakeInput from './components/MakeInput';
import { BrowserRouter as Router } from 'react-router-dom';
  
render(<Router>
    <MakeInput/>
  </Router>,
  document.getElementById('root'));
