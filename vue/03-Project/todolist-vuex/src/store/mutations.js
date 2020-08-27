//唯一更改state的方法
//mutation必须是同步函数
import {ADD_TODO} from './types.js'

export default {
    [ADD_TODO](state,todo){
        state.todos.unshift(todo)
    }
            
}