import { useEffect } from 'react'
import { useState } from 'react'

const lessons = [
    {
        id: 1,
        name: 'lap trinh'
    },
    {
        id: 2,
        name: 'alo 1234'
    },
    {
        id: 3,
        name: 'arrow'
    }
]

function Content() {
    const [lessonID, setLessonID] = useState(1)

    function handleComment( {detail} ) {
        console.log(detail);
    }

    useEffect(() => {

        window.addEventListener(`lesson-${lessonID}`, handleComment)
        
        return (() => {
            window.removeEventListener(`lesson-${lessonID}`, handleComment)
        })

    },[lessonID])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonID === lesson.id ?
                                'red' :
                                'black'
                        }}
                        onClick={()=> setLessonID(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content