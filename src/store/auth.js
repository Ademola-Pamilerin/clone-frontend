import { createSlice } from "@reduxjs/toolkit"

const AuthSlice = createSlice({
    name: "Auth Slice",
    initialState: {

    },
    reducers: {
        register() { },
        login() { }
    }
})

export const AuthReducer = AuthSlice.reducer

export default AuthSlice