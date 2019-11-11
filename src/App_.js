import React from 'react';
import Hello from './Hello'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('App constructed');
    this.state = { showHello: false };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
      </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
      </a>
          <Hello name="devil13th"></Hello>
          <button onClick={this.dynamicImportModule}> 动态加载 </button>
          {this.state.showHello? 1 : 0}
        </header>
      </div>
    )
  }

  dynamicImportModule = () => {
    import('./DynamicImport').then(({DymicImpt}) => {
      // 在这里面可以使用模块A
      this.setState({showHello:true})
      DymicImpt('devil13th')
    }).catch(err => {
      alert(err)
      console.log(err)
    })
  }
}

export default App;
