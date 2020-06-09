import { createStore ,applyMiddleware} from 'redux'
import todoApp from './reducers'


// 中间件
function logger({ dispatch,getState }) {
  return (next) => (action) => {
    console.log('>>>>>>>>>> will dispatch', action)
    console.log('>>>>>>>>>> state before dispatch', getState())
    // 调用 middleware 链中下一个 middleware 的 dispatch。

    console.log(dispatch)

    let returnValue = next(action)
    console.log('<<<<<<<<<< state after dispatch', getState())

    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}
let store = createStore(todoApp,applyMiddleware(logger))


export default store;