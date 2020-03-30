import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import GlobalState from './Context/GlobalState';
import AppContext from './Context/app-context';

export default () => {
  return (
    <div className="App">
      <GlobalState>
        <AppContext.Consumer>
          {() => (
            <HomePage />
          )}
        </AppContext.Consumer>
      </GlobalState>
    </div>
  );
};
