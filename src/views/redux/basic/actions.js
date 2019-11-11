/*
 * action 类型 - 要做什么事情
 */

// 添加待办
export const ADD_TODO = 'ADD_TODO' 
// 修改待办完成状态
export const TOGGLE_TODO = 'TOGGLE_TODO'
// 待办过滤规则
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  //显示所有待办
  SHOW_ALL: 'SHOW_ALL', 
  //显示完成的待办
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  //显示未完的待办
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creator
 */

//添加待办 text为待办内容
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

//修改待办状态 index为待办在待办列表中的序号
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

//过滤待办 filter是过滤规则(显示所有、显示未完成的待办、显示已完成的待办)
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}