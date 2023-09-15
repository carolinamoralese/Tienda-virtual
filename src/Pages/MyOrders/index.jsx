import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/Orderscard";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCarConext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingCarConext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1>My MyOrders</h1>
      </div>

      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
