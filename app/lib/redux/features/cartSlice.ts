import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        state.total -= item.price * item.quantity
        state.items = state.items.filter((item) => item.id !== action.payload)
      }
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
