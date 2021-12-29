import { useEffect } from 'react'
import { useState } from 'react'



function Content() {
    const [avatar, setAvatar] = useState()
    
    useEffect(function () {
        return () => {
            //loại bỏ link cũ, để tránh bị rò rỉ bộ nhớ
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    
    function handlePreviewAvatar(e) {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
   
    return (
        <div>
            <input
                type="file"
                onChange ={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="800" />
            )}
        </div>
    )
}

export default Content