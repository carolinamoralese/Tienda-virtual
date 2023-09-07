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


      //checkoutside menu open/close
      const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
      const openCheckoutSideMenu = () => {
          setIsCheckoutSideMenu(true)
      }
      const closeCheckoutSideMenu = () => {
          setIsCheckoutSideMenu(false)
      }

    //Product detail - show product
    const[productToShow,setProductToShow]= useState({})


    //shopping car- add products to carr
    const[carProducts,setCarProducts]= useState([])


    return(
        <ShoppingCarConext.Provider value={{
            count,//se manda el valor a leer y el valor a modificar a todos los hijos
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            carProducts,
            setCarProducts,
            isCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            {children}
        </ShoppingCarConext.Provider>
       
    )
}