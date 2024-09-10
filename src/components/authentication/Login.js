import React, { useRef } from "react";
// import Modal from "../modal/Modal";

// const key = AIzaSyBpQzti02j9pRYewe_6aVXcVTcuxoDsuxI;
const Login = () => {

    
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const submitHandler = async(e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    try {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpQzti02j9pRYewe_6aVXcVTcuxoDsuxI', {
            method: "POST",
            body: JSON.stringify({
                email:email,
                password:password,
                returnSecureToken: true
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        console.log("R", response)
        const data = await response.json();
        console.log(data)
    } catch (error) {
        
    }
 


  };


  return (
   <>
  
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 via-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login
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
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="flex justify-end hover:text-gray-700">
          <button className="mt-2 ">Don't have an acoount? SignUp</button>
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;
