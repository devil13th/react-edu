import React from 'react';
import { DatePicker } from 'antd';
class Hello extends React.Component{
  constructor(props){
    super(props);
    console.log('Hello constructed');
  }
  render(){
    return(
      <div>
        Hello {this.props.name} !
        <DatePicker></DatePicker>
      </div>
    )
  }
}
export default Hello;