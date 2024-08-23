import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import GovernmentEntitiesList from '../components/governmententities/GovernmentEntitiesList';

function Home() {
  return (
    <AdminLayout>
      <GovernmentEntitiesList />
    </AdminLayout>
  );
}

export default Home;
