import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from './Components/HomePage.js'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
