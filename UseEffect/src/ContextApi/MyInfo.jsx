import { createContext, useState } from "react";

export const MyInfoContext = createContext()

export const MyContextProvider = ({children}) => {

        const [username, setUsername] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

    return (
        <MyInfoContext.Provider value={
            {username, setUsername,
             email, setEmail,
             password, setPassword}
        }>
            {children}
        </MyInfoContext.Provider> 
    )
}
