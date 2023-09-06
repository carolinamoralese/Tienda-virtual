import { useContext } from "react";
import {ShoppingCarConext} from"../../Context"
import { PlusIcon } from '@heroicons/react/24/solid'

const Card = (data) => {
    const context = useContext(ShoppingCarConext)//lee el contexto para que cuando le den en el + se acmbie el valor

    return (
    <div
    className="bg-white cursor-pointer w-60 h-65 rounded-lg"
    onClick={() => context.openProductDetail()}>
      <figure className="relative mb-4 w-full h-5/6 flex flex-col justify-center items-center">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0,5 mr-2 line-clamp-2">{data.data.category}</span>
        <img className="w-full h-full rounded-lg" src={data.data.image} alt={data.data.description} style={{ maxWidth: '80%', maxHeight: '90%' }} />
        <div
        className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
        onClick={()=> context.setCount(context.count + 1)}>
           <PlusIcon className="h-8 w-8 text-white"/>
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-xs font-light mr-2 line-clamp-2">{data.data.title}</span>
        <spa className="text-lg font-medium mr-2">${data.data.price}</spa>
      </p>
    </div>
  );
};

export default Card;
