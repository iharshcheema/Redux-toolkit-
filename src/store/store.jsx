import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter-slice'
// redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// define config for persistReducer
const persistConfig = {
  key: 'root',
  storage,
}

// wrap the counterReducer with the persistReducer function, passing in the persistConfig object
const persistedReducer = persistReducer(persistConfig, counterReducer)

// Update the store configuration to use the persisted reducer
export const store = configureStore({
  reducer: { counter: persistedReducer },
})

// created a persistor instance using the persistStore function, passing in the store instance
export const persistor = persistStore(store)
