import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCarConext } from "../../Context";
import OrdersCard from "../../Components/Orderscard";



function MyOrders() {
  const context = useContext(ShoppingCarConext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl p-4">My MyOrders</h1>
      </div>

      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice.toString()} // Convierte a cadena si es necesario
      totalProducts={order.totalProducts.toString()} // Convierte a cadena si es necesario
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
