import React from 'react';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-gray-100 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
