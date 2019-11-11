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
class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
    const {dispatch} = this.props;
    this.addTodo = this.addTodo.bind(this);
    this.setTodoName = this.setTodoName.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  render(){
    const _this = this;
    return(
    <div>
      todo context：
      <input type="text" onChange={this.setTodoName}/>
      <input type="button" value="add todo" onClick={this.addTodo}/>
      <hr/>
      {
        _this.props.todos.map((item,idx) => {
        return (<div key={idx} onClick={function(){_this.toggleTodo(idx)}}>{idx+1}.{item.name} | {item.completed}</div>)
        })
      }
    </div>
    );
  }
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

}
//connect入口参数是函数,
//函数的形参代表redux中的全局state，
//函数体返回的是绑定到组件props的属性,通常返回的是model的namespace
export default connect((state)=>{return state.todoAppModel})(TodoApp);







