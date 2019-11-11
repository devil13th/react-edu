import React from 'react';
class Param extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <div>name:{this.props.match.params.name}</div>
      </div>
    )
  }
}

export default Param;