import { IoMdArrowDropdown } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { ProductList } from "../Redux/productRedux/productAction";
import { useEffect } from "react";
import { addToCart } from "../Redux/cartAction";
import { addToWishlist } from "../Redux/WhishlistRedux/WishAction";

const Product_Home = () => {

  return (
    <>
      <div className=" bg-white pt-10 px-16 ">
        <div className="md:flex md:justify-between">
          <div>
            <ul className="flex space-x-9 text-sm text-gray-400  font-medium ">
              <li className="text-black ">ALL</li>
              <li className=" hover:text-black">HOME DECOR</li>
              <li className=" hover:text-black">LIGHTING</li>
              <li className=" hover:text-black">DECORATION</li>
              <li className=" hover:text-black">VASES</li>
              <li className=" hover:text-black">BASICS</li>
            </ul>
          </div>
          <div className="flex space-x-2">
            <p className=" text-lg font-sm">Filter</p>{" "}
            <IoMdArrowDropdown className="mt-1 text-xl" />
          </div>
        </div>
        <Card_Home />
      </div>
    </>
  );
};

export const Card_Home = () => {
  const dispatch = useDispatch();
  const shopData = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(ProductList());
  }, []);

  return (
    <div className="grid grid-cols-1 place-items-center-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-5">
      {shopData
        .flat()
        .slice(0, 8)
        .map((item) => {
          return (
            <div key={item.id} className="box">
              <div className="relative group overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className=" w-full h-72 object-cover "
                />
                <div className="flex absolute bottom-0 w-full justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:-translate-y-0 group-hover:duration-300">
                  <h1 className="flex text-[12px] px-4 bg-black text-white justify-center py-1 font-semibold">
                    QUICK LOOK
                  </h1>
                  <button className="bg-gray-500 p-1 " onClick={() => dispatch(addToWishlist(item))}>
                    <FaHeart className="text-white text-sm" />
                  </button>
                </div>
              </div>

              <h5 className="text-center mt-4 font-semibold">{item.title}</h5>

              <div className="flex justify-center pri">
                <p className="text-gray-400 text-lg ">${item.price}</p>
              </div>

              <div className="text-center flex justify-center">
                <button
                  className="text-gray-400 text-base font-medium mt-1 Add"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add To Card
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product_Home;
