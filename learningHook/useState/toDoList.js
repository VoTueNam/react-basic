import { useState } from 'react'

function App() {

  const [job, setJob] = useState('')

  // toán tử ?? đó: Nếu trước nó là null hoặc Undefined thì sẽ lấy giá trị sau
  const [jobs, setJobs] = useState(() => {
    var storageJob = localStorage.getItem('json') //cái json đó là tên key tự đặt

    //Đổi json thành mảng để JS có thể đọc đc
    storageJob = JSON.parse(storageJob)
    return storageJob ?? []
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      //stringify là chuyển đổi sang dạng JSON
      const jsonJob = JSON.stringify(newJobs)
      localStorage.setItem('json', jsonJob)

      return newJobs
    })
    setJob('')
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <input
        value={job}
        onChange={e => {
          setJob(e.target.value)
        }}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) =>
        (
          <li key={index}>{job}</li>
        )
        )}
      </ul>
    </div>
  );
}

export default App;
