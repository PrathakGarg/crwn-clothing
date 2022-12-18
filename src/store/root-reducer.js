import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

const rootPersistConfig = {
    key: "root",
    storage,
    blacklist: ["user", "cart"],
};

const cartPersistConfig = {
    key: "cart",
    storage,
    blacklist: ["toggled"],
}

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
})

export const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);
