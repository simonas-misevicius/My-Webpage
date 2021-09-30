import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  About
} from './pages';

  
export default function MakeInput(){
  var [repeat,repeater] = useState('empty');
  return (
  <>
  <input type="text" id="lname1" name="lname1" onInput={event => repeater(event.target.value)} />
  <br></br>
  <p>{repeat}</p>
  <input type="text" id="lname1" name="lname1" value={repeat} readOnly />
  <Switch>
  <Route path='/' >
  <Home />
  </Route>
  <Route path='/about' >
  <About />
  </Route>
  </Switch>
  </>
  );
}