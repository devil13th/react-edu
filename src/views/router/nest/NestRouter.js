import React from 'react';
import {Link, Switch,Route} from 'react-router-dom';
import A from '@/components/nest/A'
import B from '@/components/nest/B'
class NestRouter extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <h1>一级导航</h1>
        <Link to="/A">A</Link> | 
        <Link to="/B">B</Link> 

        <Switch>
          <Route path="/A" component={A}/>
          <Route path="/B" component={B}/>
        </Switch>
      </div>
    )
  }
}

export default NestRouter; 