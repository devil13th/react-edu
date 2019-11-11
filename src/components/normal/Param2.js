import React from 'react';
class Param2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <div>name:{this.props.location.search}</div>
      </div>
    )
  }
}

export default Param2;