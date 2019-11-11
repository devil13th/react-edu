import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter} from "react-router-dom";
import AppRouter from '@/router/AppRouter'
import IndexLayout from '@/layout/IndexLayout'
//import ReactRouterTest from './ReactRouterTest';
import BasicRouter from '@/views/router/basic/BasicRouter'
import BasicRouter2 from '@/views/router/basic/BasicRouter2'
import SwitchRouter from '@/views/router/switch/SwitchRouter'
import NestRouter from '@/views/router/nest/NestRouter'
import Exact from '@/views/router/exact/Exact'
import RedirectRouter from '@/views/router/redirect/RedirectRouter'
import RouterParam from '@/views/router/param/RouterParam'
import RouterParam2 from '@/views/router/param/RouterParam2'
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'antd/dist/antd.css';

//正式项目
//ReactDOM.render(<HashRouter><AppRouter/></HashRouter>, document.getElementById('root'));

// ========================  路由教程 =============================//
/**
 * 下面每一个注释都是路由的例子
 */
//基础路由 Route
//ReactDOM.render(<BrowserRouter><BasicRouter></BasicRouter></BrowserRouter>, document.getElementById('root'));

//基础路由2 Route 
//ReactDOM.render(<BrowserRouter><BasicRouter2></BasicRouter2></BrowserRouter>, document.getElementById('root'));

//switch路由
//ReactDOM.render(<BrowserRouter><SwitchRouter></SwitchRouter></BrowserRouter>, document.getElementById('root'));

//嵌套路由
// ReactDOM.render(<BrowserRouter><NestRouter></NestRouter></BrowserRouter>, document.getElementById('root'));

//HashRouter的使用 - 与BrowserRouter 区别就是'#'
//ReactDOM.render(<HashRouter><NestRouter></NestRouter></HashRouter>, document.getElementById('root'));

//路由的 exact属性
//ReactDOM.render(<BrowserRouter><Exact></Exact></BrowserRouter>, document.getElementById('root'));

//路由的redirect属性
//ReactDOM.render(<BrowserRouter><RedirectRouter></RedirectRouter></BrowserRouter>, document.getElementById('root'));

//路由接收参数 - restful
//ReactDOM.render(<BrowserRouter><RouterParam></RouterParam></BrowserRouter>, document.getElementById('root'));

//路由接收参数 通过?传递参数
//ReactDOM.render(<BrowserRouter><RouterParam2></RouterParam2></BrowserRouter>, document.getElementById('root'));


// ========================  redux 例子 =============================//

// 纯redux测试 - 该内容是立即执行的,查看console
//import './views/redux/basic/storeTest'

// 基础例子
//import '@/views/redux/basic/index'


// ========================  dva 例子 =============================//

//基础结构
import '@/views/dva/basic/index.js'


serviceWorker.unregister();