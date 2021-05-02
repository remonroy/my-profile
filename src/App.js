import React from 'react'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SectionAdd from './Componet/SectionPlace/SectionAdd/SectionAdd';
import About from './Componet/SectionPlace/About/About';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <SectionAdd></SectionAdd>
          </Route>
          <Route path="/about">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
