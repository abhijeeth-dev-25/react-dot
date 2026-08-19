import { createContext, useState } from "react";


/*It creates a direct connection between:

The Provider Component (which injects and holds the data value)

Any Descendant Consumer Component (which calls useContext to listen to that channel and read the data)*/






//Consumer
export const StoreContext = createContext();

//Provider
export const StoreContextProvider = ({ children }) => {

    const [toggle, setToggle] = useState(true)

    const [cartItems, setCartItems] = useState([])


    return (
        <StoreContext.Provider value={{toggle, setToggle, cartItems, setCartItems}} >
            {children}
        </StoreContext.Provider>
    )
}

