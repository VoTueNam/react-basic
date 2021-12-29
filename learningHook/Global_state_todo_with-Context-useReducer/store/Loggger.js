function logger(reducer) {
    return (prevState, action) => {
       
        console.group(action.type)

        console.log('Prev State: ', prevState);
        console.log('Actions: ',action);
        
        const nextState = reducer(prevState, action)
        
        console.log('Next State: ', nextState);

        console.groupEnd()
        
        return nextState
    }
}

export default logger