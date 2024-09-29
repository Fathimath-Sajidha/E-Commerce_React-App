import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import LoginSlice from "./LoginSlice";
import { persistReducer, persistStore } from "redux-persist"; 
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "@reduxjs/toolkit";


const persistConfig = {
  key: 'root', 
  storage,     
};


const rootReducer = combineReducers({
  product: ProductSlice,
  cartData: CartSlice,
  login: LoginSlice
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,  // Use the persisted reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Disabling serializableCheck due to redux-persist
  }),
});

// Create the persistor, which is responsible for persisting the store
export const persistor = persistStore(store);