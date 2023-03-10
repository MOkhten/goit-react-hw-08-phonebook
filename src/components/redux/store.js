import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer}  from './/contactSlice';
import { filterReducer } from "./filterSlice";
import { authReducer } from './auth/auth-slice';
import {
    persistStore,  
    persistReducer,
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage';



const authPersistConfig = {
    key: 'auth',
  storage,
    whitelist: ['token'],
};


const store = configureStore({
    reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };