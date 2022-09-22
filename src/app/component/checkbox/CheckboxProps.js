import React from 'react'
import Checkboxes from './Checkboxes'

const CheckboxProps = () => {
    const colors = {
        color1: "success",
        color2: "warning",
        color3: "primary",
    }
    return (
        <div>
            <Checkboxes colorprops={colors} />
        </div>
    )
}
export default CheckboxProps

// export const colors = {
//     color1: "success",
//     color2: "warning",
//     color3: "primary",
//     color4: "secondary"
// }