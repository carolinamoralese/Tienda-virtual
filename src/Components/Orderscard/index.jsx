import { TrashIcon } from "@heroicons/react/24/solid";

const OrdersCard = ({ totalPrice, totalProducts}) => {

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
        <p>
            <spna>01.02.2023</spna>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  );
};

export default OrdersCard;
