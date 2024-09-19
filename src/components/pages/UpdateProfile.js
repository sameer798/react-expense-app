import React,{useRef, useContext, useEffect} from "react";
import authContext from '../../store/auth-context/auth-context';


function UpdateProfile() {
const authCtx = useContext(authContext);

  const nameInputRef = useRef();
  const urlInputRef = useRef();

  useEffect(()=>{
    getData()
  },[])

  const getData = async()=>{
    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBpQzti02j9pRYewe_6aVXcVTcuxoDsuxI',{
        method: 'POST',
        body:JSON.stringify({
          idToken: authCtx.token
        })
      });
      const data = await response.json();
      console.log(data.users[0].displayName)
      console.log(data.users[0].photoUrl)
      // console.log(response)
      nameInputRef.current.value = data.users[0].displayName;
      urlInputRef.current.value = data.users[0].photoUrl

    } catch (error) {
      
    }

  }

  const updateHandler = async()=>{
    const user_name = nameInputRef.current.value;
    const photoUrl = urlInputRef.current.value;
   

    try {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBpQzti02j9pRYewe_6aVXcVTcuxoDsuxI",{
        method: "POST",
        body: JSON.stringify({
          idToken:authCtx.token,
          displayName:user_name,
          photoUrl: photoUrl,
          returnSecureToken: true
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })

      const data = await response.json();
      console.log(response)
      console.log(data)
      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        throw new Error(data.error.message || "Profile update failed.");
      }
    } catch (error) {
      console.error("Error updating profile", error.message);
    }
    
  }



const emailVarifyHandler =async()=>{
  try {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBpQzti02j9pRYewe_6aVXcVTcuxoDsuxI',{
      method: 'POST',
      body:JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken : authCtx.token
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })

    // const data = await response.json()
    // console.log(response)
    if(response.ok){
      alert("successfully sent to your registered email go to Gmail")
    }
    if(!response.ok){
      throw new Error("INVALID_ID_TOKEN: The user's credential is no longer valid. The user must sign in again.")
    }
  } catch (error) {
    console.log(error.message)
  }
}


  return (
    <>
      <div className="p-5 bg-green-300 border-b-4">
        <button className="bg-gray-400 p-1 rounded-sm text-white hover:bg-gray-500" onClick={emailVarifyHandler}>verify Email</button>
      </div>
      <div className=" max-w-5xl ml-auto mt-5 border-b-2 border-green-300 py-2">
        <div className="flex justify-between p-3">
          <h2 className="font-bold">Contact Details</h2>
          <button className=" border-2 px-2 rounded border-red-500 hover:bg-red-400 hover:text-white text-red-500">Cancel</button>
        </div>
        <div className="flex justify-around">
          <div className="flex justify-around items-center">
            <svg
              className="w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15C8.8299 15 6.01077 16.5306 4.21597 18.906C3.82968 19.4172 3.63653 19.6728 3.64285 20.0183C3.64773 20.2852 3.81533 20.6219 4.02534 20.7867C4.29716 21 4.67384 21 5.4272 21H18.5727C19.3261 21 19.7028 21 19.9746 20.7867C20.1846 20.6219 20.3522 20.2852 20.3571 20.0183C20.3634 19.6728 20.1703 19.4172 19.784 18.906C17.9892 16.5306 15.17 15 12 15Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51469 3 7.49997 5.01472 7.49997 7.5C7.49997 9.98528 9.51469 12 12 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <label className="ml-2 font-medium">Full Name:</label>
            <input className="ml-2 h-7 rounded border border-gray-500 " type="text" ref={nameInputRef}/>
          </div>
          <div className="flex justify-around items-center">
            <svg
              className="w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22M2.50002 9H21.5M2.5 15H21.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <label className="ml-2 font-medium ">Profile Photo URL:</label>
            <input className="ml-2 h-7 rounded border border-gray-500 " type="text" ref={urlInputRef}/>
          </div>
        </div>
        <div>
          <button className="bg-green-400 hover:bg-green-500 px-2 rounded text-white" onClick={updateHandler}>update</button>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
