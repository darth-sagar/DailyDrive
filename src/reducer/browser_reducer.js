export const BrowserReducer=(state, actions)=>{
    switch (actions.type) {
        case "NAME":
            return {
                ...state,
                name:actions.payload
            }
        case "TIME":
            return {
                ...state,
                time:actions.payload
            }
        default :
            return state;

    }
}