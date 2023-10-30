import React from "react";
import BookingForm from "./BookingForm";

// Booking component handles the form rendering
const Booking = (props) => {
    return (
        // Render the BookingForm component with props passed down
        <BookingForm
            availableTimes={props.availableTimes}
            dispatch={props.dispatch}
            submitForm={props.submitForm}
        />
    );
}

export default Booking;
