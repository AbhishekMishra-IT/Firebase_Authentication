import { ADD_DETAILS, REMOVE_DETAILS } from "../action/detailActionType";

const detailsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_DETAILS:
            return [...state, action.payload];

        case REMOVE_DETAILS: 
        const removeDetails = state.filter((item, index)=> {
            return (index !== action.payload);
        });

        // case UPDATE_DETAILS: 
        // const updateDetails = action.payload.filter((item, index)=> {
        //     return (index = action.payload);
        // });
        
        return removeDetails;
        default: 
        return state;
    }
}

export default detailsReducer;
