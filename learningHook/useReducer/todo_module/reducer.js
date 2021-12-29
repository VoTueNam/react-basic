import { DELETE_JOB, SET_JOB, ADD_JOB } from './constants'

export const initState = {
    job: '',
    listJob: []
}

const reducer = (state, action) => {
   
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                listJob: [...state.listJob, action.payload]
            };
        case DELETE_JOB:
            const newJob = [...state.listJob]
            newJob.splice(action.payload, 1)
            
            return {
                ...state,
                //splice đó là xóa đó
                listJob: newJob
            }
        default:
            throw new Error(`Invalid action`)
    }
}

export default reducer