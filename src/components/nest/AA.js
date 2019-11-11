import React from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import AAA from '@/components/nest/AAA'
import AAB from '@/components/nest/AAB'
class AA extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <h3>三级导航组件A-A</h3>

        <Link to="/A/AA/AAA">AAA</Link> | 
        <Link to="/A/AA/AAB">AAB</Link> 
        <hr/>
        <Switch>
          <Route path="/A/AA/AAA" component={AAA}/>
          <Route path="/A/AA/AAB" component={AAB}/>
        </Switch>

      </div>
    )
  }
}

export default AA;