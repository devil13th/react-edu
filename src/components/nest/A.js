import React from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import AA from '@/components/nest/AA'
import AB from '@/components/nest/AB'
class A extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <h1>二级导航组件A</h1>
        <Link to="/A/AA">AA</Link> | 
        <Link to="/A/AB">AB</Link> 

        <hr/>
        <Switch>
          <Route path="/A/AA" component={AA}/>
          <Route path="/A/AB" component={AB}/>
        </Switch>
      </div>
    )
  }
}

export default A;