import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = ({ id, title, imageUrl, price, handDelete }) => {
  let renderTrasIcon;

  if (handDelete) {
    renderTrasIcon = (
      <TrashIcon
        onClick={() => handDelete(id)}
        className="h-5 w-5 text-black-500 cursor-pointer"
      />
    );
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-ful rounded-lg object-cove"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {renderTrasIcon}
      </div>
    </div>
  );
};

export default OrderCard;
