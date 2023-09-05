import { createContext, useState } from "react"

export const ShoppingCarConext = createContext()

export const ShoppingCarProvider = ({children}) =>{
    const [count, setCount] = useState(0);
    return(
        <ShoppingCarConext.Provider value={{
            count,//se manda el valor a leer y el valor a modificar a todos los hijos
            setCount
        }}>
            {children}
        </ShoppingCarConext.Provider>
       
    )
}