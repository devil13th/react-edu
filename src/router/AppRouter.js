import React from "react";
import IndexLayout from '../layout/IndexLayout'
import {Route} from 'react-router-dom'
class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Route path="/" component={IndexLayout}></Route>
      </div>
    )
  }
}

export default Router;