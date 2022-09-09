import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function CustomTabs({ icon, label, textcolor, indicatorcolor }) {
    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor={textcolor.textcolor2}
                indicatorColor={indicatorcolor.indicatorcolor2}
            >
                <Tab icon={icon.icon1} iconPosition="start" label={label.label1} />
                <Tab icon={icon.icon2} iconPosition="end" label={label.label2} />
                <Tab icon={icon.icon3} iconPosition="end" label={label.label3} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Tabs One Content
            </TabPanel>
            <TabPanel value={value} index={1}>
                Tabs Two Content
            </TabPanel>
            <TabPanel value={value} index={2}>
                Tabs Three Content
            </TabPanel>
        </Box>
    );
}
export default CustomTabs

CustomTabs.propTypes={
    label:PropTypes.shape({
        label1: PropTypes.string,
        label2: PropTypes.string,
        label3: PropTypes.string
      }),
    textcolor:PropTypes.shape({
        textcolor1: PropTypes.string,
        textcolor2: PropTypes.string,
        textcolor3: PropTypes.string
      }),
    indicatorcolor:PropTypes.shape({
        indicatorcolor1: PropTypes.string,
        indicatorcolor2: PropTypes.string,
        indicatorcolor3: PropTypes.string
      }),
}   