import React from "react";
import { createPortal } from "react-dom";

function ForgotPasswordModal({ children }) {
  const forgotPasswordElement = document.getElementById("forgot-password");
  return createPortal(
    <div className="fixed flex justify-center items-center bg-gradient-to-r from-yellow-50 via-green-100 to-blue-100  z-10 inset-0">
      {children}
    </div>,
    forgotPasswordElement
  );
}

export default ForgotPasswordModal;
