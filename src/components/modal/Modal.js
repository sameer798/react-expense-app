import React from "react";
import { createPortal } from "react-dom";

const Backdrop = () => {
  return <div className="fixed  bg-gray-500 bg-opacity-40  z-10 inset-0"></div>;
};


const MOdalOverlay = ({ message, onCloseError, successMessage }) => {
console.log(successMessage)
  
  const closeModal = ()=>{
    onCloseError()
  }

  return (
    <div className="fixed max-w-sm max-h-36 rounded-lg m-auto inset-0 bg-white z-40 p-4">
      <div className="flex flex-col">
        <p className="font-medium ">There was an issue with your request.</p>
        <p className="text-red-500">{successMessage ? "You have successfully logged in." : message}</p>
        <div className="absolute right-2 bottom-2">
          <button className="bg-blue-500 rounded-md px-4 py-1 text-white hover:bg-blue-600" onClick={closeModal}>Try again</button>
        </div>
      </div>
    </div>
  );
};

const modalElement = document.getElementById("modal");
const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, modalElement)}
      {createPortal(<MOdalOverlay message={props.message} onCloseError={props.onCloseError} successMessage={props.success}/>, modalElement)}
    </>
  );
};

export default Modal;
