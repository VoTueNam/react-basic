import { useState } from 'react'

const course = [
  {
    name: 'JS',
    id: 18
  },
  {
    name: 'Java',
    id: 22
  },
  {
    name: 'python',
    id: 21
  }
]


function App() {

  const [checked, setChecked]= useState([])

  function handleCheck(id) {
    setChecked((prev) => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        //dùng filter lặp qua toàn bộ và so sánh lại
        return checked.filter(item => item != id)
      } else {
        return [...prev, id]
      } 
    })
  }
  console.log(`${checked} type of ${typeof checked}`);

  function handleSubmit() {
    //call API
    console.log(checked);
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {course.map(cou => (
        <div key={cou.id}>
          <input
            type="checkBox"
            checked={checked.includes(cou.id)}
            onChange={()=>handleCheck(cou.id)}
          />
          {cou.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
}

export default App;
