import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product/slice'
import contactReducer from './contact/slice'
import orderReducer from './order/slice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    contact: contactReducer,
    order: orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
