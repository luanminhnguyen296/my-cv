import { IAuthState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: IAuthState = {
   token: undefined,
   loading: false,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      remove: (state) => {
         state.token = null
      },
      setToken: (state, action: PayloadAction<string | null | undefined>) => {
         state.token = action.payload
      },
      setLoading: (state, action: PayloadAction<boolean>) => {
         state.loading = action.payload
      },
      setState: (state, action: PayloadAction<IAuthState>) => {
         state.token = action.payload.token
         state.loading = action.payload.loading
      },
   },
})

// Action creators are generated for each case reducer function
export const { remove, setToken, setLoading, setState } = authSlice.actions
export const selectAuth = (state: any): IAuthState => state.auth
export default authSlice.reducer