<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
=======
import React from 'react';

import Menu1 from './pages/menusucursal';

function App() {
  return (
    <main className="w-full h-dvh">
      <Menu1 />
    </main>
  );
}

export default App;
>>>>>>> 436b045ffe8ec1ef1d910251204b0da86e1e52b1
