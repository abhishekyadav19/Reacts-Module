import { Card, CardContent, Checkbox, Container, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import colors from './CheckboxProps';

const Checkboxes = ({ colorprops }) => {
    const [cchecked, setCchecked] = useState({
        Person1: false,
        Person2: false,
        Person3: false,
        Person4: false
    })
    const handlechange = (e) => {
        setCchecked({ ...cchecked, [e.target.name]: (e.target.checked) })
    }
    return (
        <>
            <Container maxWidth="lg">
                <Card variant="outlined">
                    <CardContent>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="Person1" checked={cchecked.Person1} onChange={handlechange} />}
                                label="Person 1" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            <FormControlLabel control={<Checkbox name="Person2" checked={cchecked.Person2} onChange={handlechange} color={colorprops.color1} />}
                                label="Person 2" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            <FormControlLabel control={<Checkbox name="Person3" checked={cchecked.Person3} onChange={handlechange} color={colorprops.color2} />}
                                label="Person 3" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                            <FormControlLabel control={<Checkbox name="Person4" checked={cchecked.Person4} onChange={handlechange} color={colorprops.color3} />}
                                label="Person 4" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                        </FormGroup>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Checkboxes

Checkboxes.defaultProps = {
    colorprops: {
        color1: "warning",
        color2: "warning",
        color3: "warning",
    }
}
