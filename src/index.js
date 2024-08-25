import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { authReducer, loginReducer, registrationReducer } from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from './theme/index'

const combinedReducers = combineReducers({
  auth: authReducer,
  login: loginReducer,
  registration: registrationReducer,
})

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraBaseProvider>
  </React.StrictMode>
);