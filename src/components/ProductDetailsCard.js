import React from "react";


import { useLocation} from "react-router-dom";

const ProductDetailsCard = ({product}) => {

  const {pathname} = useLocation();

  return (
    <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900">
      {pathname.includes("cart") && (
        <div className="rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold ">
          <p> {product?.quantity} </p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, i) => {
            return (
              <li key={i} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
  
    </div>
  );
};

export default ProductDetailsCard;
