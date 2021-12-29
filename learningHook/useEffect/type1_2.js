// Cái này là file content.js của mấy cái form trong useState
import { useEffect } from 'react'
import { useState } from 'react'


//useEffect sẽ thực thi khi DOM đc render
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    //Viết thằng này trước để đảm bảo DOM đc render trước rồi mới tính toán logic sau
    useEffect(() => {
        // console.log('Re-render', title);
        // document.title = title;

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                setPosts(response)
            })
    },[])

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{ post.name }</li>
                ))}
            </ul>
        </div>
    )
}

export default Content