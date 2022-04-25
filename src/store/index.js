import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = { systemDetected: false }
const systemSlice = createSlice({
  name: 'systemDetected',
  initialState: initialState,
  reducers: {
    setTrue(state) {
      state.systemDetected = true
    },
    setFalse(state) {
      state.systemDetected = false
    },
  },
})

const store = configureStore({
  reducer: systemSlice.reducer,
})

export const systemActions = systemSlice.actions

export default store
