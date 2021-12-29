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

  const [checked, setChecked]= useState()

  
  function handleSubmit() {
    //call API
    console.log(({id:checked}));
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {course.map(cou => (
        <div key={cou.id}>
          <input
            type="radio"
            checked={checked ===cou.id}
            onChange={()=> setChecked(cou.id)}
          />
          {cou.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
}

export default App;
