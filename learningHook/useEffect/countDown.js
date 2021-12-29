import { useEffect } from 'react'
import { useState } from 'react'



function Content() {
    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(countDown => countDown-1);
        }, 1000)
        
        return ()=> clearInterval(timerId)
    },[])
   
    return (
        <div>
            <h1>{ countDown }</h1>
        </div>
    )
}

export default Content