import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { coursesReducer } from "./coursesSlice";
import { userReducer } from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  courses: coursesReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: storage.default ? storage.default : storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customMiddleware = (store) => (next) => (action) => {
  return next(action);
};


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(customMiddleware),
});

export const persistor = persistStore(store);
