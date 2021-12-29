import { useReducer, useRef } from 'react'

/**
 * useReducer
 * 1. init state: 0
 * 2. Actions: Up (state + 1 ) / Down (state -1)
 * 3. Reducer
 * 4. Dispatch
 */

// 1 init state
const initState = {
    job: '',
    listJob: []
}

// 2 actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload: payload
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload: payload
    }
}

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload: payload
    }
}

// 3 reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                listJob: [...state.listJob, action.payload]
            }
            break;
        case DELETE_JOB:
            const newJob = [...state.listJob]
            newJob.splice(action.payload, 1)
            
            newState = {
                ...state,
                //splice đó là xóa đó
                listJob: newJob
            }
            break
        default:
            throw new Error(`Invalid action`)
    }

    console.log('New state: ', newState);
    return newState;
}


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