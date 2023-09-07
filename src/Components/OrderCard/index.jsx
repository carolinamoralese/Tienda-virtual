import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = ({title, imageUrl, price}) => {
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-ful rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <TrashIcon className="h-5 w-5 text-black-500 cursor-pointer" />
            </div>
        </div>
    )
    
}

export default OrderCard