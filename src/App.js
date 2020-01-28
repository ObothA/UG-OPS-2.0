import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Sidebar from './components/sidebar';
import Welcome from './components/content/welcome';
import PageNotFound from './components/content/pageNotFound';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Welcome} />

        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
