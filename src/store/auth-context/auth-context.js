import { createContext } from "react";

const authContext = createContext({
    token: '',
    isLoggedIn:false,
    user_email:"",
    addUserAuth:(id, email)=>{}
})

export default authContext