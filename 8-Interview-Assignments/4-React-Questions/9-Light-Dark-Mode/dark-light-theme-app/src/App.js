import React, { createContext, useContext, useState } from 'react';
//import './App.css'
// Create a ThemeContext to manage the theme state
const ThemeContext = createContext();

// Custom hook to access the theme context
const useTheme = () => useContext(ThemeContext);

// Component to provide the theme context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Create the theme context value
  const themeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Dashboard component
const Dashboard = () => {
  const theme = useTheme();

  return (
    <div className={`dashboard ${theme}`}>
      <h1>Welcome to the Dashboard</h1>
      <p>This is a sample dashboard with a theme toggle button.</p>
      <button onClick={theme.toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
