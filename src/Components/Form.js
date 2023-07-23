import React, { useState } from 'react';
import "./style.css";
import logo from "../img/lws-logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../redux/bookingsActions/action';

const locationOptions = ["Dhaka", "Sylhet", "Saidpur", "Chandpur", "Cox's Bazar"];
const guestOptions = [1, 2, 3, 4, 5];
const classOptions = ["Business", "Economy"];

const Form = () => {

    const [bookingValues, setBookingValues] = useState({
        from: locationOptions[0] || "", 
        to: locationOptions[1] || "", 
        date: "", 
        guests: guestOptions[0] || 1, 
        ticketClass: classOptions[0] || "",
    })


    const dispatch = useDispatch();

    const resetForm = () =>{
        setBookingValues({
            from: locationOptions[0] || "", 
            to: locationOptions[1] || "", 
            date: "", 
            guests: guestOptions[0] || 1, 
            ticketClass: classOptions[0] || "",
        })
    }

    const handleInputChange = (e) =>{
        setBookingValues({ ...bookingValues, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addBooking(bookingValues))
        resetForm()
    }

    return (
        <section>
            <header id="header">
                <div class="container">
                    <img src={logo} alt="logo" class="logo" />
                    <div class="flex items-center">
                        <a class="text-white min-w-[50px] font-medium" href="#">Home</a>
                        <button class="log-btn btn">Login</button>
                    </div>
                </div>
            </header>

            <div class="mt-[160px] mx-4 md:mt-[160px] relative">
                <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
                    <form class="first-hero lws-inputform" onSubmit={handleSubmit}>
                        {/* <!-- From --> */}
                         <div class="des-from">
                            <p>Destination From</p>
                            <div class="flex flex-row">
                                <img src="./img/icons/Frame.svg" alt="" />
                                <select  class="outline-none px-2 py-2 w-full" name="from" onChange={handleInputChange} value={bookingValues.from} id="lws-from" required>
                                    {
                                        locationOptions.map((option, index) =>{
                                            return (<option key={index} value={option}>{option}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        {/* <!-- To --> */}
                        <div class="des-from">
                            <p>Destination To</p>
                            <div class="flex flex-row">
                                <img src="./img/icons/Frame.svg" alt="" />
                                <select class="outline-none px-2 py-2 w-full" name="to" onChange={handleInputChange} value={bookingValues.to} id="lws-to" required>
                                    <option value="" hidden>Please Select</option>
                                    {
                                        locationOptions.map((option, index) =>{
                                            return (<option key={index} value={option}>{option}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        {/* <!-- Date --> */}
                        <div class="des-from">
                            <p>Journey Date</p>
                            <input type="date" class="outline-none px-2 py-2 w-full date" name="date" value={bookingValues.date} onChange={handleInputChange} id="lws-date" required />
                        </div>

                        {/* <!-- Guests --> */}
                        <div class="des-from">
                            <p>Guests</p>
                            <div class="flex flex-row">
                                <img src="./img/icons/Vector (1).svg" alt="" />
                                <select class="outline-none px-2 py-2 w-full" name="guests" onChange={handleInputChange} value={bookingValues.guests} id="lws-guests" required>
                                    {
                                        guestOptions.map((option, index) =>{
                                            return (<option key={index} value={option}>
                                                {option} {option > 1 ? "Persons" : "Person"}
                                            </option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        {/* <!-- Class --> */}
                        <div class="des-from !border-r-0">
                            <p>Class</p>
                            <div class="flex flex-row">
                                <img src="./img/icons/Vector (3).svg" alt="" />
                                <select class="outline-none px-2 py-2 w-full" name="ticketClass" onChange={handleInputChange} value={bookingValues.ticketClass} id="lws-ticketClass" required>
                                {
                                    classOptions.map((option, index) =>{
                                        return (
                                            (<option key={index} value={option}>
                                                {option}
                                            </option>)
                                        )
                                    })
                                }
                                </select>
                            </div>
                        </div>

                        <button class="addCity" type="submit" id="lws-addCity">
                            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span class="text-sm">Book</span>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Form;