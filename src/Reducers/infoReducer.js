const infoReducer = (state=0, action) => {
    switch(action.type){
        case 'SET_PHONE':
            return action.payload;
        default:
            return state;
    }
}

export default infoReducer;