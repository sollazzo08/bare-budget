import React from 'react';
import NewTransactionForm from './NewTransactionForm';

// Shape of the props that the Modal component expects received from the parent component. Returns void because the fucntion is intended perform an action and not return a value, such as closing the modal.
interface ModalProps {
  setShowModal: (show: boolean) => void;
}

function Modal({ setShowModal }: ModalProps) {

  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg z-50 xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-3/4 w-full">
        <NewTransactionForm />
        <div className="flex justify-end mt-4">
          <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Transaction</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
