import { createContext } from "react"

const shoppingCarConext = createContext()

export const shoppingCarProvider = ({children}) =>{
    return(
        <shoppingCarConext.Provider>
            {children}
        </shoppingCarConext.Provider>
       
    )
}