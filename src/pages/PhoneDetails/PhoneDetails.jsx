import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Buttons from "../../components/shared/Buttons/Buttons";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCart, addToLSFavoritePhones, getCart } from "../../utils/utils";
import { CartContext } from "../../providers/CartContext";
const PhoneDetails = () => {
  const {setCart} = useContext(CartContext)
  const phonesData = useLoaderData();
  const { id } = useParams();
  const phones = phonesData.find((p) => p.id === parseInt(id));
  const {
    name,
    image,
    model,
    brand,
    storage,
    price,
    camera_info,
    description,
  } = phones;

  const handleAddToFavorite = phones =>{
    addToLSFavoritePhones(phones)
  }

  const handleCart = ()=>{
    addToCart(phones)
    setCart(getCart)
  }
  return (
    <>
      <div className="py-8">
        <img className="w-auto mx-auto rounded-2xl" src={image} alt="" />
      </div>
      <div className="container mx-auto py-12 flex">
        <div className="space-y-4 flex-1">
          <h1 className="text-5xl font-semibold ">{name}</h1>
          <h1 className="text-5xl font-thin  my-10">Details: </h1>
          <div className="space-y-4">
            <p>
              <b>Brand: </b> {brand}
            </p>
            <p>
              <b>Model: </b> {model}
            </p>
            <p>
              <b>Storage: </b>{" "}
              {storage.map((s) => {
                s;
              })}
            </p>
            <p>
              <b>Price: </b>{" "}
              {Object.entries(price).map((p) => {
                p;
              })}
            </p>
            <p>
              <b>Camera_Info: </b> {camera_info}
            </p>
            <p>
              <b>Descriptions: </b> {description}
            </p>
          </div>
        </div>
        <div>
          <button
          onClick={handleCart}
          className="relative mr-3 inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">
                <MdAddShoppingCart />
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
          <button
          onClick={()=>handleAddToFavorite(phones)}
          className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">
                <MdCollectionsBookmark />
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PhoneDetails;
