import React, { useState, useEffect } from 'react';
import CreateUpdateModal from './CreateUpdateModal';
import DeleteModal from './DeleteModal';
import { fetchEntities, deleteEntity } from '../../services/api';

function GovernmentEntitiesList() {
  const [entities, setEntities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);

  const loadEntities = async () => {
    const fetchedEntities = await fetchEntities();
    setEntities(fetchedEntities);
  };

  useEffect(() => {
    loadEntities();
  }, []); 

  const handleEdit = (entity) => {
    setSelectedEntity(entity);
    setIsModalOpen(true);
  };

  const handleDelete = (entity) => {
    setSelectedEntity(entity);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedEntity) {
      await deleteEntity(selectedEntity.id);
      setIsDeleteModalOpen(false);
      setSelectedEntity(null);
      const updatedEntities = await fetchEntities();
      setEntities(updatedEntities);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEntity(null);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedEntity(null);
  };

  return (

<section class="py-1 bg-blueGray-50">
<div class="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Entidades Gubernamentales</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-custom-dark-blue hover:bg-custom-dark-blue-hover text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setIsModalOpen(true)}>Agregar Entidad</button>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Nombre
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Dirección
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Teléfono
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Sitio Web
                        </th>

          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

          </th>
          </tr>
        </thead>

        <tbody>
        {entities.map(entity => (
          <tr key={entity.id}>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
            {entity.name}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            {entity.address}
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {entity.phoneNumber}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {entity.website}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <button class="bg-yellow-500 hover:bg-yellow-600 text-white active:bg-yellow-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => handleEdit(entity)}>Actualizar</button>
            <button class="bg-red-500 hover:bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => handleDelete(entity)}>Eliminar</button>
            </td>
          </tr>
          ))}
        </tbody>

      </table>
      <CreateUpdateModal
        isOpen={isModalOpen}
        entity={selectedEntity}
        onClose={closeModal}
        onSave={async () => {
          closeModal();
          const updatedEntities = await fetchEntities();
          setEntities(updatedEntities);
        }}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  </div>
</div>
</section>
  );
}

export default GovernmentEntitiesList;