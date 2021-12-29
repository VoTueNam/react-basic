import { useReducer, useRef } from 'react'

import reducer, { initState } from './reducer'
import { addJob, deleteJob, setJob } from './action'

function Content() {

    const inputRef = useRef()

    const [state, dispatch] = useReducer(reducer, initState)

    const { job, listJob } = state

    //Chổ này để thằng dispatch thẳng ở dưới sẽ bị infinite loop
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        //sau khi add xong thì nó sẽ focus vào khung nhập tiếp
        inputRef.current.focus()
    }

    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo ..."
                onChange={e => {
                    const payload = e.target.value
                    dispatch(setJob(payload))
                }}
            />
            <button
                onClick={handleSubmit}
            >Add</button>
            <ul>
                {listJob.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content