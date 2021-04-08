import Axios from 'axios'

export const getLocalData = () => {
    return async (dispatch) => {
        try{
            const res = await Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')

            dispatch({
                type: 'GET_LOCAL',
                payload: res.data.Countries
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const getGlobalData = () => {
    return async (dispatch) => {
        try{
            const res = await Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')

            dispatch({
                type: 'GET_GLOBAL',
                payload: res.data.Global
            })
        }
        catch(err){
            console.log(err)
        }
    }
}