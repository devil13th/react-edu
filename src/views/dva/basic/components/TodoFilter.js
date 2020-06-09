import React from 'react';
class TodoFilter extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
   
  }

  
  showUnFinish = () => {
    this.props.filterTodoFn('unfinish');
  }
  showFinish = () => {
    this.props.filterTodoFn('finish');
  }
  showAll = () => {
    this.props.filterTodoFn('all');
  }

  render(){
    return(
      <div >
        [{this.props.visibilityFilter}]
        显示：
        <a href="#" style={{fontWeight : this.props.visibilityFilter === 'finish' ? 'bold' : '100'}} onClick={this.showFinish}>已完成</a> |
        <a href="#" style={{fontWeight : this.props.visibilityFilter === 'unfinish' ? 'bold' : '100'}} onClick={this.showUnFinish}>未完成</a> |
        <a href="#" style={{fontWeight : this.props.visibilityFilter === 'all' ? 'bold' : '100'}}  onClick={this.showAll}>全部</a>
      </div>
    )
  }
}

export default TodoFilter;