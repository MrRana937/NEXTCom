import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

import cartReducer from './features/cartSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
})


const config = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(config, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // We only disable serializableCheck because of Redux Persist
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
