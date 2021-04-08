import asyncStorage from '@react-native-async-storage/async-storage'

export const login = (dataLogin) => {
    return async(dispatch) => {
        try{
            await asyncStorage.setItem('username', dataLogin.username)
            await asyncStorage.setItem('password',dataLogin.password)

            dispatch({
                type: "LOGIN",
                payload: dataLogin
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const keepLogin = () => {
    return async(dispatch) => {
        try{
            const username = await asyncStorage.getItem('username')
            const password =  await asyncStorage.getItem('password')


            const dataLogin = {username,password}
            if(!dataLogin) return
            console.log("Ada Data")

            dispatch({
                type: "LOGIN",
                payload: dataLogin
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        try{
            
            await asyncStorage.removeItem('username')
            await asyncStorage.removeItem('password')

            dispatch({
                type: "LOGOUT"
            })
        }
        catch(err){
            console.log(err)
        }
    }
}



