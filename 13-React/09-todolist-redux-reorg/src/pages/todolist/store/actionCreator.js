import axios from 'axios'

import {
    CHANGE_ITEM,
    ADD_ITEM,
    DEL_ITEM,
    LOAD_DATA
} from './actionType.js'


export const getChangeItemAction = (task)=>({
    type: CHANGE_ITEM,
    payload: task    
})

export const getAddItemAction = ()=>({
    type:ADD_ITEM
})

export const getDelItemAction = (index)=>({
    type: DEL_ITEM,
    payload: index   
})

const getLoadInitDataAction = (payload)=>({
    type:LOAD_DATA,
    payload
})


export const getRequestInitDataAction = (res)=>{
    return (dispatch,getState)=>{
        // res.header("Access-Control-Allow-Origin", "*");
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            // res.header("Access-Control-Allow-Origin", "*");
            dispatch(getLoadInitDataAction(result.data))
        })
        .catch(err=>{
            console.log(err)
        })        
    }
}



