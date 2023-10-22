import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from './types'
import { productList } from './data'

export interface ProductState {
  list: IProduct[]
}

const initialState: ProductState = {
  list: productList
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProduct>) => {
      state.list = [
        {
          id: Date.now(),
          ...action.payload
        },
        ...state.list
      ]
    },
    update: (state, action: PayloadAction<{ id: string; data: IProduct }>) => {
      state.list = state.list.map((i) => (i.id === action.payload.id ? action.payload.data : i))
    },
    remove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((i) => i.id !== action.payload)
    }
  }
})

export const { add, update, remove } = productSlice.actions

export default productSlice.reducer
