import { forwardRef, useImperativeHandle, useRef } from 'react'
import video from './video.mp4'

function Video(props, ref) {

    const videoRef = useRef()

    //Đối số thứ 2 là 1 callback trả về 1 Obj
    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return (
        <video
            ref={videoRef}
            src={video}
            width={100}
        />
    )
}

export default forwardRef(Video)