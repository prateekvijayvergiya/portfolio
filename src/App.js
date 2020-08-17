import React from 'react';
import './App.css';
import Header from './components/header'
import ThemeProvider from './theme/themeProvider'

function App() {
  return (
    <ThemeProvider>
      <Header/>
    </ThemeProvider>
  );
}

export default App;
