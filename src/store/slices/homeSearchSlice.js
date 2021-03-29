import { createSlice } from '@reduxjs/toolkit'

export const homeSearchSlice = createSlice({
  name: 'homeSearch',
  initialState: {
    searchTerm: []
  },
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateSearchTerm } = homeSearchSlice.actions

export default homeSearchSlice.reducer