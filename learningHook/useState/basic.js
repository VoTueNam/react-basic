// đem cái này qua file App.js để test

import { useState } from 'react'

function App() {

  //khởi tạo là 1 nên counter là 1
  const [counter, setCounter] = useState(1)

  //? const [counter, setCounter] = useState(()=>{
    //tính toán ở trong này rồi return lại
  //? })

  //khi event onClick thì sẽ thực thi hàm này
  const handleIncrease = () => {
    //sau đó gọi lài hàm của useState và set lại giá trị cho counter
    setCounter(counter + 1)

    //Đoạn là là dùng callback --> và làm như vầy có thể set lại nhiều lần- ở trên ko thể làm như vầy vì App() chỉ render 1 lần khi có event thôi

    // setCounter(prevState => prevState + 1)
    // setCounter(prevState => prevState +1)
    // setCounter(prevState => prevState +1)
  }


  const [info, setInfo] = useState({
    name: 'namvt',
    age: 22,
    address: 'VL'
  })

  // biến prevState muốn đặt gì cũng đc, nó là tham số nhận về giá trị đang lưu thôi - ở đây nó là info
  const handleUpdate = (prevState => {
    // ... tính toán logic ở đây

    return {
      ...prevState, //cái này là dùng Spread để thêm cái củ vô và update lại object
      description: 'he is hand some'
    }
  })

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
