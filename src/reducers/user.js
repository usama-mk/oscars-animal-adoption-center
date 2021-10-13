const userReducer= (state={
    user: '',
    admin: '',
    editor: ''
}, action)=>{
    switch(action.type){
        case 'SET_USER': //cases are actions basically
            return action.payload;
        default:
            return state;
    }
}

export default userReducer