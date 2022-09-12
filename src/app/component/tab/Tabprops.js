import React from 'react'
import CustomTabs from './CustomTab'
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

const Tabprops = () => {
    const icons = {
        icon1: <PhoneMissedIcon />,
        icon2: <FavoriteIcon />,
        icon3: <PersonPinIcon />
    }
    const labels = {
        label1: 5,
        label2: "Tab2",
        label3: "Tab3"
    }
    const textcolors = {
        textcolor1: "primary",
        textcolor2: "secondary",
    }
    const indicatorcolors = {
        indicatorcolor1: "primary",
        indicatorcolor2: "secondary"
    }
    return (
        <>
            <CustomTabs icon={icons} label={labels} textcolor={textcolors} indicatorcolor={indicatorcolors} />
        </>
    )
}

export default Tabprops