const userReducer= (state={
    user: '',
    admin: '',
    editor: ''
}, action)=>{
    switch(action.type){
        case 'SET_USER': //cases are actions basically
            return {...state, user: action.payload};
            case 'SET_ADMIN':
            return {...state, admin: action.payload};
        default:
            return state;
    }
}

export default userReducer