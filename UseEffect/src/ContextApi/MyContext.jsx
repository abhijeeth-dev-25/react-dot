import { createContext, useState } from "react";

export const Mystore = createContext();

export const MyStoreProvider = ({ children }) => {

    const [count, setCount] = useState(0)


    return (
        <Mystore.Provider value={{ count, setCount }}>
            {children}
        </Mystore.Provider>
    )

}