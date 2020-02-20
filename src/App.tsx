import React from 'react';
import Navbar from './Navbar';
import { AppProvider, AppState } from './AppContext';
import './App.css';

// TODO split out into Layout component that handles all the main UI elems
const App = () => {
  // collate into single default state
  const appState: AppState = { currentURL: undefined, loggedIn: false };
  return (
    <div className="App">
      <AppProvider value={appState}>
        <Navbar/>
      </AppProvider>
    </div>
  );
}

export default App;
