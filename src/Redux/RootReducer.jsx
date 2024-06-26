import cartReducer from "./cartReducer";
import productReducer from "./productRedux/productReducer";
import wishlistReducer from "./WhishlistRedux/WishReducer";
import {combineReducers} from 'redux'


const rootReducer  = combineReducers({
    cart:cartReducer,
    product:productReducer,
    wishlist:wishlistReducer
})

export default rootReducer