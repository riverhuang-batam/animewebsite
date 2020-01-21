const INITIAL_STATE = {
    search: null
}

const searchReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case (action.type):
            return{
                ...state,
                search:action.payload
            }
            default:
                return state
    }
}
export default searchReducer;