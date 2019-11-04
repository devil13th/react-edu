import React from 'react';
class Hello extends React.Component{
  constructor(props){
    super(props);
    console.log('Hello constructed');
  }
  render(){
    return(
      <div>Hello {this.props.name} !</div>
    )
  }
}
export default Hello;