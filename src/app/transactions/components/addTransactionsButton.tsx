'use client';

import React,{useState}from 'react';
import Modal from './Modal';

function AddTransactionButton() {

  const [showModal, setShowModal] = useState(false)

  function handleClick() {
    setShowModal(true);
  }

  return (
    <>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600" onClick={handleClick}>
        Add Transaction
      </button>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </>
  )
}

export default AddTransactionButton;
