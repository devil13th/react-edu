import React from 'react'
import dva from 'dva';
import todoAppModel from '@/views/dva/basic/models/todoAppModel'
import TodoApp from '@/views/dva/basic/components/ToDoApp'
/*
const App = () => <div>Hello dva</div>;
// 创建应用
const app = dva();
// 注册视图
app.router(() => <App/>);
// 启动应用
app.start('#root'); 
*/




const app = dva();

app.model(todoAppModel);
app.router(() => <TodoApp />);
app.start('#root'); 