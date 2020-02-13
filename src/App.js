import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <Navigation />
    <route path="/"  exact component={Home} />
    <route path="/about"  exact component={About} />
    <route path="/contact"  exact component={Contact} />
  </div>
);

export default App;
