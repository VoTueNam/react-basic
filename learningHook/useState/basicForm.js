import { useState } from 'react'


function App() {

  const [name, setName]= useState('')
  const [email, setEmail]= useState('')

  //Code như vầy gọi là two-way binding
  function handleSubmit() {
    //call API
    console.log({
      name,
      email
    });
  }

  console.log(`${name} ${email}`);

  return (
    <div className="App" style={{ padding: 20 }}>
      <input type="text"
        // đặt giá trị mặt định cho biến, là khi nó render lại cũng sẽ thay đổi
        value ={name}
        onChange={e=> setName(e.target.value)}
      />
      <input type="text"
        value ={email}
        onChange={e=> setEmail(e.target.value)}
      />

      {/* tức là bấm nút là nó sẽ chuyển tên thành giá trị gán đó */}
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
}

export default App;
