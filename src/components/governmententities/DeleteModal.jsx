import React, { Component } from 'react';

class DeleteModal extends Component {
  render() {
    const { isOpen, onClose, onConfirm } = this.props;
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h3 class="mb-4 font-semibold text-base text-blueGray-700">Emilinar Entidad</h3>
          </div>
          <p>¿Estás seguro de eliminar esta Entidad?</p>
          <div className="flex justify-end mt-4">
            <button class="bg-gray-500 hover:bg-gray-600 text-white active:bg-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={onClose}>Cancelar</button>
            <button class="bg-red-500 hover:bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={onConfirm}>Eliminar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
