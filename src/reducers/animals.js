const animalsReducer= (state=[], action)=>{
    switch(action.type){
        case 'SET_ANIMALS': //cases are actions basically
            return action.payload;
            case 'ADD_ANIMAL': //cases are actions basically
            return [...state, action.payload];
        default:
            return state;
    }
}

export default animalsReducer