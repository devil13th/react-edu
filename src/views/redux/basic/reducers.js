import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

// 过滤待办相关操作
function visibilityFilter(state = SHOW_ALL, action) {
  console.log('reducer visibilityFilter() ')
  switch (action.type) {
    case SET_VISIBILITY_FILTER: //过滤待办
      return action.filter
    default:
      return state
  }
}

// 待办列表相关操作
function todos(state = [], action) {
  console.log('reducer todos() ')
  switch (action.type) { 
    case ADD_TODO: // 添加待办
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO: // 修改待办状态
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp