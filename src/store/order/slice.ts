import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IOrder } from './types'
import { orderList } from './data'

export interface OrderState {
  list: IOrder[]
}

const initialState: OrderState = {
  list: orderList
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IOrder>) => {
      state.list = [
        {
          id: Date.now(),
          ...action.payload
        },
        ...state.list
      ]
    },
    update: (state, action: PayloadAction<{ id: string; data: IOrder }>) => {
      state.list = state.list.map((i) => (i.id === action.payload.id ? action.payload.data : i))
    },
    remove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((i) => i.id !== action.payload)
    }
  }
})

export const { add, update, remove } = orderSlice.actions

export default orderSlice.reducer
