import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//fake comments - đây là cách custom event
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      //Cai đối số đầu tiên là tên event, cái thứ 2 là nội dung mà mình lắng nghe đc
      new CustomEvent(`lesson-${id}`, {
        detail:`Nội dung comments của lesson ${id}`
      })
    )
  },2000)
}

//Phát cái event này ra, ở trên mới khởi tạo thôi
emitComment(1)
emitComment(2)
emitComment(3)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
