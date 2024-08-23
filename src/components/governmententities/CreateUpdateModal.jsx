import React, { useState, useEffect } from 'react';
import { saveEntity } from '../../services/api';

function CreateUpdateModal({ isOpen, onClose, entity, onSave }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    address: '',
    phoneNumber: '',
    website: ''
  });

  useEffect(() => {
    if (entity) {
      setFormData({
        id: entity.id || '',
        name: entity.name || '',
        address: entity.address || '',
        phoneNumber: entity.phoneNumber || '',
        website: entity.website || ''
      });
    } else {
      setFormData({
        id: '',
        name: '',
        address: '',
        phoneNumber: '',
        website: ''
      });
    }
  }, [entity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveEntity(formData); 
      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving entity:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md">
        <div className="relative w-full max-w-full flex-grow flex-1">
          <h3 className="mb-4 font-semibold text-base text-blueGray-700">{formData.id ? 'Actualizar Entidad' : 'Agregar Entidad'}</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          <div className="flex justify-end">
            <button className="bg-gray-500 hover:bg-gray-600 text-white active:bg-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={onClose}  >Cancelar</button>

            {formData.id ? 
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white active:bg-yellow-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">Actualizar</button>
            :
            <button className="bg-custom-dark-blue hover:bg-custom-dark-blue-hover text-white active:bg-red-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" >Guardar</button>
            }
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUpdateModal;
