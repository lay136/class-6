
import {
    CHANGE_ITEM,
    ADD_ITEM,
    DEL_ITEM,
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

