import { createContext, useState } from "react"

export const ShoppingCarConext = createContext()

export const ShoppingCarProvider = ({children}) =>{
    //Product detail incremen quantity
    const [count, setCount] = useState(0);
   
    //Product detail open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    }

    //Product detail - show product
    const[productToShow,setProductToShow]= useState({})

    return(
        <ShoppingCarConext.Provider value={{
            count,//se manda el valor a leer y el valor a modificar a todos los hijos
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCarConext.Provider>
       
    )
}