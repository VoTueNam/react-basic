import { useEffect } from 'react'
import { useState } from 'react'



function Content() {
    const [width, setWidth] =useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        //cleanup func
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    return (
        <div>
            <h1>{ width }</h1>
        </div>
    )
}

export default Content