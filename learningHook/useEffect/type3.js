import { useEffect } from 'react'
import { useState } from 'react'


const tabs = ['comments', 'albums', 'users']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGotoTop, setShowGotoTop] = useState(false)

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((response) => {
                setPosts(response)
            })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGotoTop(true)
            } else {
                setShowGotoTop(false)
            }
            //viết gọn lại = 
            //setShowGotoTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        //clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.name || post.title}
                    </li>
                ))}
            </ul>
            {showGotoTop && (
                <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }}
                >
                   Go on top
                </button>
            )}
        </div>
    )
}

export default Content