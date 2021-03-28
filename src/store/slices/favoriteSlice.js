import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    gifList: []
  },
  reducers: {
    addToFavorites: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.gifList = [...state.gifList, action.payload]
    },
    removeFromFavorites: (state, action) => {
      state.gifList = [
        ...state.gifList.slice(0, action.payload),
        ...state.gifList.slice(action.payload + 1, state.gifList.length)
      ]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer