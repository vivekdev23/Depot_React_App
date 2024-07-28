import React from "react";
import {
  removeToWishlist
} from "../Redux/WhishlistRedux/WishAction";
import { useSelector, useDispatch } from "react-redux";
// import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import {addToCart} from '../Redux/cartAction'
import Wish_img from '../assets/Empty_Wish.png'

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishdata = useSelector((state) => state.wishlist);
  const navigate = useNavigate(); 


  const WishlistAddToCart = (item) => {
    dispatch(addToCart(item)); 
    dispatch(removeToWishlist(item.id)); 
  };

  return (
    <div>
      <div className="mx-auto md:mx-0">
        <div className="flex justify-center items-center  bg-gray-100 h-96">
          <h1 className="text-5xl tracking-wider text-center text-black font-semibold">
            WISHLIST
          </h1>
        </div>
      </div>

      <div className="mx-8 mt-20 ">
        {
        wishdata.length == 0 ? (
          // empty cart here

          <div>
             <div className="flex justify-center">
              <img src={Wish_img} alt="" className="w-96" />
            </div>
            <div className="mt-5 border border-gray-200  py-5 ">
              <h1 className=" m-0 text-center rounded-md text-black font-semibold text-2xl mx-auto">
                YOUR WISHLIST IS CURRENTLY EMPTY.
              </h1>
            </div>
            <div className="text-center  mt-10  ">
              <button
                className="bg-black m-0  py-5 px-10 font-semibold text-sm text-white mx-auto tracking-wider "
                onClick={() => navigate("/shop")}
              >
                RETURN TO SHOP
              </button>
            </div>
          </div>

        ) : (

          // map function here
          <>
           
            <div className="gap-16">
              <div className="">
                <table className="table-fixed w-full">
                  <tbody>
                    {
                    wishdata.map((item) => {
                      return (
                        <>
                          <tr className="border-b-2 border-gray-200  font-semibold">
                            <td className="flex">
                              <button
                                onClick={() =>
                                  dispatch(removeToWishlist(item.id))
                                }
                              >
                                <IoCloseOutline className="text-xl stroke-gray-400" />
                              </button>
                              <img
                                className="size-28 mx-auto m-2 rounded-lg"
                                src={item.image}
                                alt=""
                              />
                            </td>
                            <td>
                              <p>{item.title}</p>
                            </td>

                            <td className="text-center font-normal text-gray-400">
                              <p>${item.price}</p>
                            </td>

                            <td className="text-center font-normal text-gray-400">
                              <p>In Stock</p>
                            </td>

                            <td className="text-center font-normal text-gray-400">
                              <button className=" rounded-md text-gray-600   font-medium mx-auto tracking-wider " onClick={() => WishlistAddToCart(item)}  >
                                ADD TO CART
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
