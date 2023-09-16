import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCarConext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
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

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.carProducts,
      totalProducts: context.carProducts.length,
      totalPrice: totalPrice(context.carProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCarProducts([])
    context.setSearchByTitle(null)
  }


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
      <div className="px-6 overflow-y-scroll flex-1">
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
      <div className="px-6 mb-6">
          <p className="flex justify-between items-center mb-2">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">${totalPrice(context.carProducts)}</span>
          </p>
          <Link to='/my-orders/last'>
          <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
          </Link>
          
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
