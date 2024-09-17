import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Confirmacioncom from './Confirmacion-com.jsx'
import EstatusDePedido from './Estatus-de-pedido.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   <Confirmacioncom/>
  const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Confirmacion-com" element={<Confirmacioncom />} />
        <Route path="/Estatus-de-pedido" element={<EstatusDePedido />} />
        
      </Routes>
    </Router>
  </StrictMode>
);



