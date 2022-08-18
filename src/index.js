import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.elements.name.value); // from elements property
  console.log(event.target.surname.value); // or directly
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
