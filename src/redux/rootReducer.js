import {combineReducers} from "redux"
import { bookingReducer } from "./bookingsActions/bookingReducer";

export const rootReducer = combineReducers({
    bookingReducer : bookingReducer     
});