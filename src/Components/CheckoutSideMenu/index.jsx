import { useContext } from "react";
import { ShoppingCarConext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import OrderCard from "../../Components/OrderCard";
import "./CheckoutSideMenu.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCarConext);

  const handDelete = (id) => {
    const filterProducts = context.carProducts.filter(product => product.id != id)
    context.setCarProducts(filterProducts)
    context.setCount(context.count-1)
  
   
  };

  const handleClose = () => {
    context.closeCheckoutSideMenu();
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenu ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed top-20 right-0 border border-black rounded-lg  bg-white`}
      style={{
        width: "380px",
        height: "600px",
        margin: "20px",
      }}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi orden</h2>
        <div onClick={handleClose}>
          <XCircleIcon className="h-8 w-8 text-black-500 cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.carProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handDelete={handDelete}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
