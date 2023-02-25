import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// function AppOne() {
//   return (
//     <div>App One</div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> - loading gender first then the name because useEffects loads twice 
    <App/>
  // </React.StrictMode>
);
