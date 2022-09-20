import { Card, CardContent, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import "../../../assests/css/common.css"

const ReactDatepicker = () => {
const [startDate, setStartDate] = useState(new Date())
const [endDate, setEndDate] = useState(addDays(new Date(), 1))


    return (
        <>
            <Container maxWidth="lg">
                <Card variant="outlined">
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                From : <DatePicker 
                                onChange={(e)=>setStartDate(e)}
                                selected={startDate}
                                minDate={new Date()}
                                maxDate={new Date()}
                                showWeekNumbers
                                />
                            </Grid>
                            <Grid item xs={12}>
                                To : <DatePicker 
                                selected={endDate}
                                onChange={(e)=>setEndDate(e)}
                                endDate={addDays(new Date(), 10)}
                                startDate={addDays(new Date(), 1)}
                                showWeekNumbers
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default ReactDatepicker