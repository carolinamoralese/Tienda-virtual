import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <CalendarDaysIcon className="h-6 w-6 text-black cursor-pointer" />
            <span className="font-light">01.02.23</span>
          </div>
          <div className="flex justify-between">
            <ShoppingBagIcon className="h-6 w-6 text-black cursor-pointer" />
          <span className="font-light">{totalProducts} Articulos</span>
          </div>
         
        </div>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
