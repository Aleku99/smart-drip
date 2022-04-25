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
const authSlice = createSlice({
  name: 'authenticated',
  initialState: { authenticated: false },
  reducers: {
    setTrue(state) {
      state.authenticated = true
    },
    setFalse(state) {
      state.authenticated = false
    },
  },
})

const store = configureStore({
  reducer: { system: systemSlice.reducer, auth: authSlice.reducer },
})

export const systemActions = systemSlice.actions
export const authActions = authSlice.actions

export default store
