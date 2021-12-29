import { useReducer } from 'react'

/**
 * useState
 * 1. init state: 0
 * 2. Actions: Up (state + 1 ) / Down (state -1)
 */

/**
 * useReducer
 * 1. init state: 0
 * 2. Actions: Up (state + 1 ) / Down (state -1)
 * 3. Reducer
 * 4. Dispatch
 */

//todo - Ứng dụng useReducer - so sánh với useState

// 1. init state
const initState = 0

// 2. Actions
const UP_ACTION = 'UP'
const DOWN_ACTION = 'DOWN_ACTION'

// 3. Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error(`Invalid action`)
            //break;
    }
}

function Content() {
    //useState
    //const [count, setCount] = useState(0)

    //useReducer - 4. dispatch
    //Tham số đầu vào: function và init state
    //dispatch sẽ ko chạy trong lần đầu tiên và sẽ chạy mỗi khi đc gọi
    const [count, dispatch] = useReducer(reducer,initState)




    return (
        <div>
            <h1>{count}</h1>
            <button
                //onClick={() => setCount(count - 1)}
                onClick={() => dispatch(UP_ACTION)}
            >
                Down
            </button>
            <button
                //onClick={() => setCount(count + 1)}
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Up
            </button>
        </div>
    )
}

export default Content