import React, { useState } from 'react'
import authContext from './auth-context'



function AuthContextProvider({children}) {

    const [userAuth, setUseeAuth] = useState({
        token: '',
        user_email: '',
      
        isLoggedIn: false
    })

const addUserIdHandler = (id, email)=>{
    setUseeAuth({
        token:id,
   
        user_email:email,
        isLoggedIn:true
    })
}

const value = {
    token : userAuth.token,
  
    isLoggedIn: !!userAuth.token,
    user_email:userAuth.user_email,
    addUserAuth:addUserIdHandler
}

  return (
    <authContext.Provider value={value}>{children}</authContext.Provider>
  )
}

export default AuthContextProvider