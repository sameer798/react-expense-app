import React, { useRef, useState } from "react";
import Modal from "../modal/Modal";

// const key = AIzaSyBpQzti02j9pRYewe_6aVXcVTcuxoDsuxI;
const SignUp = () => {

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false)

  const [isPasswordCurrect, setIsPasswordCurrect] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const submitHandler = async(e) => {
    e.preventDefault();
    setIsLoading((prev)=> !prev);
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

   
    
    if (password !== confirmPassword) {
      setIsPasswordCurrect(false);
      setIsLoading((prev)=> !prev);
      setTimeout(() => {
        setIsPasswordCurrect(true);
      }, 2000);
      return;
    }

    try {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpQzti02j9pRYewe_6aVXcVTcuxoDsuxI',{
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                returnSecureToken : true
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        setIsLoading(true);
        if(!response.ok){
          setError(true)
            
        }
        const data = await response.json()
        if(response.ok){
            setSuccessMessage(true)
        }
        setIsLoading((prev)=> !prev);
        throw new Error(data.error.message)
    } catch (error) {
        setErrorMessage(error.message)
    }


  };


  return (
   <>
   {error && <Modal message={errorMessage} onCloseError={()=>setError(false)} success={successMessage}/>}
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 via-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Sign Up
        </h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              ref={emailInputRef}
              type="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              ref={passwordInputRef}
              type="password"
              name="password"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-gray-600">Confirm Password</label>
            <input
              ref={confirmPasswordInputRef}
              type="password"
              name="confirmPassword"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {!isPasswordCurrect && (
            <p className="text-red-400">
              password & confirmPassword is not same!
            </p>
          )}
          {isLoading && <p className="text-gray-500">Loading...</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-end hover:text-gray-700">
          <button className="mt-2 ">Have an acoount? Login</button>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;
