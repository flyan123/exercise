import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./style.less"
// 配置路由
import AppRouter from './router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRouter/>
  // 去除严格模式
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <AppRouter/>
  //   {/* Hello */}
  // </React.StrictMode>
);


