import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { coursesReducer } from "./coursesSlice.jsx";
import { userReducer } from "./userSlice.jsx";

const rootReducer = combineReducers({
  courses: coursesReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
  },
  whitelist: ["courses", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);