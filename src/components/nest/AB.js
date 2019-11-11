import React from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import ABA from '@/components/nest/ABA'
import ABB from '@/components/nest/ABB'
class AB extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <h2>三级导航A-B</h2>

        <Link to="/A/AB/ABA">ABA</Link> | 
        <Link to="/A/AB/ABB">ABB</Link> 
        <hr/>
        <Switch>
          <Route path="/A/AB/ABA" component={ABA}/>
          <Route path="/A/AB/ABB" component={ABB}/>
        </Switch>
      </div>
    )
  }
}

export default AB;