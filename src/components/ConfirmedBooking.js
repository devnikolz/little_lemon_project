import React, { useState, useEffect } from "react";

const ConfirmedBooking = () => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        // set showAlert to true when the booking is confirmed
        // For now, let's simulate it after a delay
        const confirmationTimeout = setTimeout(() => {
            setShowAlert(true);
        }, 3000); // Simulate a 3-second delay
        return () => clearTimeout(confirmationTimeout);
    }, []);

    return (
        <header>
            <section>
                {showAlert ? (
                    <div className="alert-box">
                        <h1>Booking has been confirmed!</h1>
                    </div>
                ) : (
                    <h1>Confirming your booking...please wait...</h1>
                )}
            </section>
        </header>
    );
}

export default ConfirmedBooking;
