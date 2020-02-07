import React from 'react';
import Navbar from './Navbar';
import { AppProvider, AppState } from './AppContext';
import './App.css';

const App = () => {
  // collate into single default state
  const appState: AppState = { currentURL: undefined, loggedIn: false };
  return (
    <div className="App">
      <AppProvider value={appState}>
        <Navbar title="Navbar"/>
      </AppProvider>
    </div>
  );
}

export default App;
