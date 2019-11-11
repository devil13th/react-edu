import React from 'react';
import {Tag,Col,Row} from 'antd';
class Thd extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <Row>
        <Col span={24} style={{'textAlign':'right','marginBottom':'8px'}}>
          <div>ThirdteenDevil中搜索 <Tag color="#87d068">{this.props.msg}</Tag></div>
        </Col>
      </Row>
    )
  }
}
export default Thd;