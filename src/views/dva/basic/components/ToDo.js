import React from 'react';
class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  //如果使用箭头函数就不用再构造函数中执行this.toggleTodo = this.toggleTodo.bind(this);
  toggleTodo(){
    this.props.toggleTodoFn(this.props.item.index);
  }

  render(){
    let todoItem = null;
    
    if(
      this.props.visibilityFilter === 'all' ||
      (this.props.visibilityFilter === 'finish' && this.props.item.completed ) ||
      (this.props.visibilityFilter === 'unfinish' && !this.props.item.completed)
    ){
      todoItem = (
        <div >
          {this.props.item.index}.{this.props.item.name} | <input onClick={this.toggleTodo} type="button" value={this.props.item.completed ? '已完成':'未完成'}/>
        </div>
      )
    }

    
    return todoItem;
  }
}

export default Todo;