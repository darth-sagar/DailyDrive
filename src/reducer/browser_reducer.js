export const BrowserReducer=(state, actions)=>{
    switch (actions.type) {
        case "NAME":
            return {
                ...state,
                name:actions.payload
            }
<<<<<<< HEAD
        case "TIME":
            return {
                ...state,
                time:actions.payload
            }
=======
>>>>>>> d4b1d1c16c01e4ab1e5068de63227ed50961fb97
        default :
            return state;

    }
}