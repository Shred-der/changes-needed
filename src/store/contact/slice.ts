import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IContact } from './types'
import { contactList } from './data'

export interface ContactState {
  list: IContact[]
}

const initialState: ContactState = {
  list: contactList
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IContact>) => {
      state.list = [
        {
          id: Date.now(),
          ...action.payload
        },
        ...state.list
      ]
    },
    update: (state, action: PayloadAction<{ id: string; data: IContact }>) => {
      state.list = state.list.map((i) => (i.id === action.payload.id ? action.payload.data : i))
    },
    remove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((i) => i.id !== action.payload)
    }
  }
})

export const { add, update, remove } = contactSlice.actions

export default contactSlice.reducer
