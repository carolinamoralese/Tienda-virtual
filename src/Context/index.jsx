import { createContext, useState, useEffect } from "react";

export const ShoppingCarConext = createContext();

export const ShoppingCarProvider = ({ children }) => {
  //Product detail incremen quantity
  const [count, setCount] = useState(0);

  //Product detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  //checkoutside menu open/close
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenu(true);
  };
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenu(false);
  };

  //Product detail - show product
  const [productToShow, setProductToShow] = useState({});

  //shopping car- add products to carr
  const [carProducts, setCarProducts] = useState([]);

  //shoping car
  const [order, setOrder] = useState([]);

  // get productos
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  return (
    <ShoppingCarConext.Provider
      value={{
        count, //se manda el valor a leer y el valor a modificar a todos los hijos
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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems
      }}
    >
      {children}
    </ShoppingCarConext.Provider>
  );
};
