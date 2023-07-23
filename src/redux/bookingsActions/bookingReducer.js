import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";
import { initialState } from "./initialState";

const nextBookingId = (bookings) =>{
    const maxId = bookings.reduce((maxId, booking) => Math.max(booking.id, maxId), -1);
    return maxId + 1
};

export const bookingReducer = (state = initialState, actions) =>{
    switch (actions.type) {
        case ADD_BOOKING:
            if(state.length > 3){
                return state;
            }
            return[...state, {id: nextBookingId(state), ...actions.payload}]

        case DELETE_BOOKING:
            return state.filter((booking) => booking.id !== actions.payload)
    
        default:
           return state;
    }
};