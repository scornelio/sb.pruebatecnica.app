import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Inicio</h1>
      <div>
        <button 
          className="bg-custom-dark-blue text-white px-4 py-2 rounded hover:bg-opacity-80" 
          onClick={handleLogout}
        >
          Salir
        </button>
      </div>
    </header>
  );
}

export default Header;
