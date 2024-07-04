import { FaStar } from "react-icons/fa";
// import Shop_Product from "../../shop.json"
import { useSelector , useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import {ProductList} from '../Redux/productRedux/productAction'
import { useEffect } from "react"
import { addToCart } from '../Redux/cartAction'
import {addToWishlist} from '../Redux/WhishlistRedux/WishAction'

const LeftSide = () => {

  const dispatch = useDispatch()
  const ProductData = useSelector(state => state.product)

  useEffect(()=>{
    dispatch (ProductList());
  } , [])

  return (
    <div>
      <div className=" bg-gray-50 py-9">
        <div className="">
          <div className=" flex text-gray-400 ml-5 ">
            <a href="/">
              <span>Home</span>
            </a>
            <a href="">
              <span> / with Sidebar</span>
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="p-12 text-md text-gray-500 hidden sm:hidden md:block w-3/12">
          <h2 className="text-md text-black ">COLOR</h2>
          <ul className="mt-4 space-y-1">
            <li className="hover:text-black">Beige (15)</li>
            <li className="hover:text-black">Black (14)</li>
            <li className="hover:text-black">Brown (5)</li>
            <li className="hover:text-black">Gold (7)</li>
            <li className="hover:text-black">Gery (8)</li>
            <li className="hover:text-black">Orange (3)</li>
            <li className="hover:text-black">Rose (5)</li>
            <li className="hover:text-black">White (17)</li>
          </ul>
          <div className="mt-28">
            <h2 className="hover:underline text-md text-sans text-black">
              MATERIAL
            </h2>
            <div className="mt-4 ">
              <ul className="space-y-1">
                <li className="hover:text-black">Chrome (14)</li>
                <li className="hover:text-black">Concrete(11)</li>
                <li className="hover:text-black">Glass (1)</li>
                <li className="hover:text-black">Metal (9)</li>
                <li className="hover:text-black">Steel (2)</li>
                <li className="hover:text-black">Wood (30)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-12 text-gray-500 text-lg ">
          <div>
            {/* heading option  */}

            <div className="flex justify-between items-center">
              <h2>Showing 1-12 of 57 results</h2>
              <div className="border border-gray-400 py-2 px-2">
                <select name="" id="">
                  <option value="">DeFult sorting</option>
                  <option value="">sort by popularity</option>
                  <option value="">sort by average rating</option>
                  <option value="">sort by latest</option>
                  <option value="">sort by price: low to high</option>
                  <option value="">sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* card stating  */}

            <div className="grid grid-cols-1 place-items-center-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-10 ">
              {/* Map Method  */}

              {
              ProductData.flat().map((item) => {
                return (
                  <div key={item.id} className="box reletive">
                    <div className="relative group overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full  md:h-72 object-cover"
                      />
                      <div className="flex absolute bottom-0 w-full justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:-translate-y-0 group-hover:duration-300 ">
                        <h1 className="flex text-[12px] px-3 bg-black text-white justify-center  font-semibold">
                          QUICK LOOK
                        </h1>
                        <button className="bg-gray-500 p-1" onClick={() => dispatch(addToWishlist(item))}>
                          <FaHeart className="text-white text-sm active:text-red-600" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-center mt-4 font-semibold">
                        {item.title}
                      </h5>

                      <div className="flex justify-center space-x-1">
                        <FaStar className="text-yellow-400 size-3" />
                        <FaStar className="text-yellow-400 size-3" />
                        <FaStar className="text-yellow-400 size-3" />
                        <FaStar className="text-yellow-400 size-3" />
                        <FaStar className="text-yellow-400 size-3" />
                      </div>

                      <p className="text-gray-400 text-lg text-center mt-1 pri ">
                        ${item.price}
                      </p>

                      <div className="text-center flex justify-center">
                        <button className="text-gray-400 text-base font-medium mt-1  Add" onClick={() => dispatch(addToCart(item))}>
                          Add To Card
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Map Ending  */}
            </div>

            {/* card stating  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
