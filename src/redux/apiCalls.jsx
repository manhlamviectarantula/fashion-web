import axios from "axios"
import { loginFailure, loginStart, loginSuccess, logoutSucess } from "./userRedux"

export const login = async (dispatch,user) =>{
    dispatch(loginStart())
    try{
        const res = await axios.post('http://localhost:8000/api/v0/auth/login-user', user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        console.log(err)
        const ErroMes = err.response.data.error
        dispatch(loginFailure(ErroMes))
    }
}

export const logout = async (dispatch) =>{
    try{
        const res = await axios.post('http://localhost:8000/api/v0/auth/logout-user')
        dispatch(logoutSucess())
    }catch(err){
        console.log(err)
    }
}