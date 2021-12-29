import { useState } from 'react'
import Content from './content/Content'

// Mounted and Unmounted
function App() {

  const [show,setShow] = useState(false)//false là sai nên ở dưới có cái hàm so sánh nên nó sẽ là False nên ko render ra

  return (
    <div className="App" style={{ padding: 20 }}>
      <button onClick={() => {
        setShow(!show)
      }}>Toggle</button>

      {show && <Content/>}
      
    </div>
  );
}

export default App;
