import { createSlice } from "@reduxjs/toolkit"

const initAuth = {
    isAuth: false,
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initAuth,
    reducers: {
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        },
    }
})

export default authenticationSlice