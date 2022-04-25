import { configureStore, createSlice } from '@reduxjs/toolkit'

const systemSlice = createSlice({
  name: 'systemDetected',
  initialState: { systemDetected: false },
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
