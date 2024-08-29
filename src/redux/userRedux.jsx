import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        mesError: ''
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
            state.mesError = ''
            state.error = false
        },
        loginFailure: (state, action) => {
            state.isFetching = false
            state.mesError = action.payload
            state.error = true
        },
        logoutSucess:(state) => {
            state.currentUser = null
            state.isFetching = false
            state.error = false
            state.mesError = ''
        },
        updateUser:(state, action) => {
            state.currentUser = { ...state.currentUser, ...action.payload }
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logoutSucess, updateUser } = userSlice.actions
export default userSlice.reducer