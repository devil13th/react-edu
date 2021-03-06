import {showId} from '@/views/dva/basic/api/todoApi'
export default{
  //当前 Model 的名称。整个应用的 State，由多个小的 Model 的 State 以 namespace 为 key 合成
  namespace:'todoAppModel' ,
  // 该 Model 当前的状态。数据保存在这里，直接决定了视图层的输出
  state: {
    formData:{
      v:''
    },
    todos:[],
    visibilityFilter:'all',

  },
  //reducers: Action 处理器，处理同步动作，用来算出最新的 State
  reducers: {
    mergeState(state, { payload }) {
      //console.log(payload);
      return { ...state, ...payload }
    },
    setTodoName(state,{ payload }){ 
      console.log('reducer setTodoName() ')
      //reduces方法中调用reducers中的其他方法
      //state.dispatch({type:"mergeState",payload});
      return {...state,...payload};
    },
    visibilityFilter(state, { payload }) {
      console.log('reducer visibilityFilter() ')
      return {...state,...payload}
    },
    addTodo(state,{payload}){
      console.log('reducer addTodo() ')
      const newTodo = {name:state.formData.v,index:state.todos.length +1,completed:false};
      return {...state,todos:[...state.todos,newTodo]}
    },
    toggleTodo(state,{payload}){
      console.log(state);
      console.log('reducer toggleTodo() ')
      const newTodo = state.todos.map((todo,index) => {
        if((index+1) === payload){
          todo.completed = !todo.completed
        }
        return todo;
      })
      return {...state,todos:newTodo}
    },
    filterTodo(state,{payload}){
      return {...state,visibilityFilter:payload}
    }

     //add(state) { return state + 1 },
  },
  // effects：Action 处理器，处理异步动作
  effects: {

    //异步执行
    testEffects01(action, { call, put, select }) {
      console.log(action);
      showId(1,2000).then(function(r){
        alert("result1:" + r);
      })

      showId(2,1000).then(function(r){
        alert("result2:" + r);
      })
      /*
      call : 调用promise   
      例子：const data = yield call(getData, ids);

      put : 调用effects中的方法 或 reducers中的方法 
      例：yield put({ type: "queryList",payload:xxx});
      如果调用其他模块则需要在type中加入模块名称,例如
      yield put({type:"otherModel/queryList",payload:xxx})

      select : 选取state 
      例子：      
      payload = yield select((state) => { //state是全局state
        return {
            current: state.sysUser.current,
            pageSize: state.sysUser.pageSize,
            conditions: state.sysUser.queryCondition
        }
      });
      */



      //yield call(delay, 1000);
     // yield put({ type: 'add' });
    },
    //同步执行 - 使用generator函数实现同步函数
    *testEffects02(action, { call, put, select }) {
      const a = yield showId(1,2000)
      alert(a);
      const b = yield showId(2,1000)
      alert(b);
    }
  },
}