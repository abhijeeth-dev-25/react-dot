import { createContext, useState } from "react";

export const AuthStore = createContext();


export const AuthContextProvider = ({children}) => {

    const [signupUsers, setSignupUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);

    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loginUsers")));

    // console.log("from login",loginUser)
       console.log("from signup",signupUsers)



    return <AuthStore.Provider value={{
        signupUsers, setSignupUsers, loggedUser, setLoggedUser
    }}>
        {children}
    </AuthStore.Provider>
}