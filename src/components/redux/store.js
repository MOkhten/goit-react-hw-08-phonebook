import { configureStore, combineReducers } from '@reduxjs/toolkit';
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



// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//     auth: persistReducer(authPersistConfig, authReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

const persistConfig = {
    key: 'auth',
  storage,
    whitelist: ['token'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

const persistor = persistStore(store);

export { store, persistor };