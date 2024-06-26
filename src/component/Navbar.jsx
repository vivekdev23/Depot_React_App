import img from "/src/assets/Logo_B.png";
import { FaRegUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";



const Navbar = () => {


  const cartdata = useSelector((state) => state.cart);
  const wishdata = useSelector((state) => state.wishlist);

  const amount =
  cartdata.length &&
  cartdata
    .map((item) => item.price * item.quantity)
    .reduce((prev, next) => (prev += next));
console.log("Cartamount", amount);

  return (
    <>
      <div className=" bg-white flex justify-between items-center p-7 tracking-wider sticky top-0 z-50">

      <div>
          <img src={img} alt="" className="h-5" />
        </div>

        <div>
          <ul className="flex space-x-10">
            <li className="">
              <Link
                to="/"
                className="text-black text-sm font-semibold hover:text-gray-500"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/Shop"
                className="text-black text-sm font-semibold  hover:text-gray-500"
              >
                SHOP
              </Link>
            </li>

            <div className="dropdown">
              <li>
                <Link
                  className="text-black text-sm font-semibold  hover:text-gray-500"
                >
                  PAGES
                </Link>
              </li>
              <div className="dropdown-content">
                <Link to="/About_us" href="">About Us</Link>
                <Link to="/Feq_page" href="">FEQ</Link>
                <Link to="/Contect_us" href="">Contect_us</Link>
              </div>
            </div>           
            <li>
              <Link
                to="/Wishlist"
                className="text-black text-sm font-semibold  hover:text-gray-500 flex mt-0.5 "
              >
                 WishList 

                 {
                   wishdata.length == 0 ? (
                   <CiHeart className=" text-lg ms-1"/>
                  ):(<>
                  <FaHeart className="text-red-500 text-sm ms-1 mt-0.5"/>
                  
                    </>  
                   )
                }
                
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="flex space-x-6">

          <div className="mt-1">
            <Link to='/Cart'>
            <button className="text-black text-sm  font-medium">
              CART <span className="text-xs font-sans text-gray-500 font-light">(${amount})</span>
            </button>
            </Link>
          </div>

          <div className="flex items-center space-x-1  hover:text-gray-500">

            <span className="">
              <FaRegUser />
            </span>
            <h3 className="font-medium text-sm mt-1">
              <button>LOGIN</button>
            </h3>

          </div>

          <div className="mt-2">
            <FaMagnifyingGlass />
          </div>

          <div className="mt-2">
           <AiOutlineMenu/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
