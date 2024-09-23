import React, {useRef} from "react";
import ForgotPasswordModal from "./components/modal/ForgotPasswordModal";
import image from "../src/assets/forgot.png";
import { Link } from "react-router-dom";


function ForgotPassword() {

const enteredEmail = useRef();


  const resetPasswordHandler = async(e)=>{
    e.preventDefault();
    const email = enteredEmail.current.value;
    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBpQzti02j9pRYewe_6aVXcVTcuxoDsuxI',{
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email : email
        })
      })
      // console.log(response)
      if(!response.ok){
        const data = await response.json();
        // console.log(data)
        throw new Error(data.error.message)
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ForgotPasswordModal>
      <div className="bg-white flex h-96 w-3/4 mx-auto ">
        <img src={image} alt="pic" className="h-full w-1/2 object-cover border-r-2 border-purple-500" />
        <div className="flex flex-col justify-center items-start w-1/2 p-6 space-y-4">
          <p>Enter the email with which you have registered.</p>
          <form className="w-full">
            <input
            ref={enteredEmail}
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button onClick={resetPasswordHandler}
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Send Link
            </button>
          </form>
          <Link to="/login"><button className="text-blue-500">Already a user? Login</button></Link>
        </div>
      </div>
    </ForgotPasswordModal>
  );
}

export default ForgotPassword;
