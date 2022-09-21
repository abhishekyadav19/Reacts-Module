import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const UploadPreview = ({ image }) => {
    const [preview, setPreview] = useState("https://source.unsplash.com/user/c_v_r/100x100")

    if (image) {
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = () => {
            setPreview(reader.result)
        }
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <img src={preview} className='username' onClick={handleClickOpen} alt="upload-preview" />
            <div>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar sx={{ justifyContent: 'end' }}>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                    <img src={preview} className='fullimg' onClick={handleClickOpen} alt="upload-preview" />
                </Dialog>
            </div>
        </>
    )
}

export default UploadPreview