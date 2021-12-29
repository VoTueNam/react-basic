import { useEffect, useRef } from 'react'
import Video from './video/video'

function App() {

  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef);
  })

  const handPlay = () => {
    videoRef.current.play()
  }

  const handPause = () => {
    videoRef.current.pause()
  }

  return (
    <div>
      <p>Nothing</p>
      <div>
        <button onClick={handPlay}>Play</button>
        <button onClick={handPause}>Pause</button>
        <Video ref={videoRef} />
      </div>
    </div>
  );
}

export default App;
