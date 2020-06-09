// import React from 'react'
// import { connect } from 'dva';
// const ToDoApp = () => (
//   <div>
//     hello
//   </div>
// )
// export default connect(({ToDoApp,loading }) => ({
//   ToDoApp,
//   loading 
// }))(ToDoApp);
import React from 'react';
import {connect} from 'dva';
import Todo from '@/views/dva/basic/components/ToDo';
import TodoFilter from '@/views/dva/basic/components/TodoFilter';
import logo from '@/views/dva/basic/components/logo.png';
class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
    const {dispatch} = this.props;
    this.addTodo = this.addTodo.bind(this);
    this.setTodoName = this.setTodoName.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.filterTodo = this.filterTodo.bind(this);
  }
  
  // 通过this.props.dispatch调用model中的effects方法或reducers方法

  addTodo(){
    //获取全局state中的内容 , 需要结合最后export 的 connect
    console.log(this.props)
    this.props.dispatch({type:'todoAppModel/addTodo',payload:"xxx"})
  }
  setTodoName(evt){
    this.props.dispatch({type:'todoAppModel/setTodoName',payload:{formData:{v:evt.target.value}}})
  }
  toggleTodo(idx){
    this.props.dispatch({type:'todoAppModel/toggleTodo',payload:idx})
  }
  filterTodo(state){
    this.props.dispatch({type:'todoAppModel/filterTodo',payload:state})
  }
  testEffect01 = () => {
    this.props.dispatch({type:'todoAppModel/testEffects01',payload:1})
  }
  testEffect02 = () => {
    this.props.dispatch({type:'todoAppModel/testEffects02',payload:1})
  }


  render(){
    const _this = this;
    return(
    <div>
      <img src={logo}/><br/>
      todo context：
      
      <input type="text" onChange={this.setTodoName}/>
      <input type="button" value="add todo" onClick={this.addTodo}/>
      <hr/>
      {
        _this.props.todos.map((item,idx) => {
        return (<Todo key={item.index} item={item} toggleTodoFn={this.toggleTodo} visibilityFilter={this.props.visibilityFilter}></Todo>)
        })
      }
      <hr/>
      {this.props.visibilityFilter}
      <TodoFilter filterTodoFn={this.filterTodo} visibilityFilter={this.props.visibilityFilter}></TodoFilter>
      <input type="button" onClick={this.testEffect01} value="异步执行"/>
      <input type="button" onClick={this.testEffect02} value="同步执行"/>
    </div>
    );
  }
  

}
//connect入口参数是函数,
//函数的形参代表redux中的全局state，
//函数体返回的是绑定到组件props的属性,通常返回的是model的namespace
//jsx调用例子：{this.props.todos}
export default connect((state)=>{return state.todoAppModel})(TodoApp);







