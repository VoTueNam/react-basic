import { useState, useRef } from 'react'



function Content() {
    const [count, setCount] = useState(60)

    //thằng này luôn trả về là 1 object, có key tên là: 'current'
    //Đặt nó bằng useRef để nó tránh bị khai báo lại mỗi khi function chính gọi và render lại
    const timeId = useRef()

    //Lấy đc DOM element luôn
    const nameRef = useRef()

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prev => prev -1)
        },1000)
    }

    const handleStop = () => {
        clearInterval(timeId.current)
    }

    return (
        <div>
            <h1
            ref={nameRef}
            >
                {count}
            </h1>
            <button onClick={handleStart}>Star</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Content