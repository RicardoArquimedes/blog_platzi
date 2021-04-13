const INITIAL_STATE =  {
    users: [1,2,3]
};


const combineReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'bring_users':
            return { ...state, users: action.payload}

            default: return state;
    }
}

export default combineReducers;