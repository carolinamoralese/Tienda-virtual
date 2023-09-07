import { useContext } from "react";
import { ShoppingCarConext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import "./ProductDetail.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCarConext);

  const handleClose = () => {
    context.closeProductDetail();
  };

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg  bg-white`}
      style={{
        width: "380px",
        height: "600px",
        margin: "20px",
        overflowY: "scroll",
      }}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detalles del producto</h2>
        <div onClick={handleClose}>
          <XCircleIcon className="h-8 w-8 text-black-500 cursor-pointer" />
        </div>
      </div>
      <figure className="px-6" >
        <img
          className="w-full h-full object-cover rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <div className="flex flex-col p-6" >
        <p>
          <span className="font-medium text-2xl mb-2">$ {context.productToShow.price}</span>
        </p>
        <p className="font-medium text-md">
          {context.productToShow.title}
        </p>
        <p className="font-light text-sm">
          {context.productToShow.description}
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
