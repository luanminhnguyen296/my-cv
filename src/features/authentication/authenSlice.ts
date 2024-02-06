import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthenState {
   token: string | null
}

const initialState: AuthenState = {
   token: null,
}

export const authenSlice = createSlice({
   name: 'authen',
   initialState,
   reducers: {
      remove: (state) => {
         state.token = null
      },
      setToken: (state, action: PayloadAction<string>) => {
         state.token = action.payload
      },
   },
})

// Action creators are generated for each case reducer function
export const { remove, setToken } = authenSlice.actions

export default authenSlice.reducer
export const selectAuthen = (state: any) => state.authen.token