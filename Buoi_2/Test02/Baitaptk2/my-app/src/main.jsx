import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './exercise-1-class/App.jsx'
// import App from './exercise-1-functional/App.jsx'
// import App from './exercise-2-class/App.jsx'
// import App from './exercise-2-functional/App.jsx'
// import App from './exercise-3-class/App.jsx'
import App from './exercise-3-functional/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
