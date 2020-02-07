import React from 'react';

export interface AppState {
  currentURL?: string;
  loggedIn: boolean;
};

// TODO preload this with PWA storage when that feature gets implemented
const AppContext = React.createContext({});

// Consider splitting out context
// Especially UserContext (login, user settings, etc)
// Possibly ClipsContext (current clip, clips metadata, lists, tags, etc)
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;

