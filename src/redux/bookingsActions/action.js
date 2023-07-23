import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes"

export const addBooking = (payload) =>{
    return{
        type: ADD_BOOKING,
        payload
    }
};

export const deleteBooking = (payload) =>{
    return{
        type: DELETE_BOOKING,
        payload
    }
};