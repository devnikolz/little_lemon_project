import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";

const BookingForm = (props) => {
    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState(0);
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id="book-date"
                                label="Choose Date"
                                type="date"
                                value={date}
                                onChange={handleChange}
                                required
                                fullWidth
                                InputLabelProps={{ shrink: true }} // Display the label inside the input field
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="book-time-label">Choose Time</InputLabel>
                                <Select
                                    labelId="book-time-label"
                                    id="book-time"
                                    value={times}
                                    onChange={(e) => setTimes(e.target.value)}
                                    required
                                >
                                    <MenuItem value="">
                                        <em>Select a Time</em>
                                    </MenuItem>
                                    {props.availableTimes.availableTimes.map((availableTime) => (
                                        <MenuItem key={availableTime} value={availableTime}>
                                            {availableTime}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="book-guests"
                                label="Number of Guests"
                                type="number"
                                inputProps={{ min: 1, max: 10 }}
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                required
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="book-occasion-label">Occasion</InputLabel>
                                <Select
                                    labelId="book-occasion-label"
                                    id="book-occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    required
                                >
                                    <MenuItem value="">
                                        <em>Select an Option</em>
                                    </MenuItem>
                                    <MenuItem value="Birthday Party">Birthday Party</MenuItem>
                                    <MenuItem value="Anniversary Party">Anniversary Party</MenuItem>
                                    <MenuItem value="Graduation Party">Graduation Party</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success" // Change the button color to "yellow-green"
                                fullWidth
                            >
                                Make Your Reservation
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
