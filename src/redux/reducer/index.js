const initialState = {
    navEject: false,
}



const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "TOGGLE_NAV":return{
            ...state, navEject: !state.navEject
        }

        default: return state
    }
}

export default reducer