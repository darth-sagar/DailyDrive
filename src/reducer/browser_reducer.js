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
        case "MESSAGE":
            return {
                ...state,
                message:actions.payload>=0 && actions.payload<12 ? "Good Morning" : actions.payload>=12 && actions.payload<18 ? "Good Afternoon" : "Good Evening"
            }
        case "TASK":
            return {
                ...state,
                task:actions.payload
            }
        default :
            return state;

    }
}
