import React from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import BA from '@/components/nest/BA'
import BB from '@/components/nest/BB'
class B extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <h1>二级导航组件B</h1>
        <Link to="/B/BA">BA</Link> | 
        <Link to="/B/BB">BB</Link> 
        <hr/>
        <Switch>
          <Route path="/B/BA" component={BA}/>
          <Route path="/B/BB" component={BB}/>
        </Switch>
      </div>
    )
  }
}

export default B;