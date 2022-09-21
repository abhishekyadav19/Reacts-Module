import React from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Card, CardContent, Container } from '@mui/material';
import "./image-preview.css"
import { Formik } from 'formik';
import * as yup from "yup";
import UploadPreview from './UploadPreview';

const ImageUpload = () => {

    return (

        <Formik
            initialValues={{ files: "" }}
            validationSchema={yup.object({
                files: yup.mixed().nullable().required("This field is required")
                    .test("FILE_SIZE", "Upload file is too big", (value) => !value || (value && value.size <= 1024 * 1024))
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>

                    <Container maxWidth="lg">
                        <Card variant="outlined">
                            <CardContent>
                                <div className="preview-wrapper">
                                    <div className="preview-bx">
                                        <input type="file" name="files" id="files" hidden onChange={(e) => formik.setFieldValue("files", e.target.files[0])} accept="image/*" />
                                        <UploadPreview image={formik.values.files} />
                                        <label htmlFor="files" className='images'>
                                            <PhotoCameraIcon />
                                        </label>
                                    </div>
                                    {formik.touched.files && formik.errors.files ? (
                                        <div>{formik.errors.files}</div>
                                    ) : null}
                                </div>
                                <button type='submit' variant="outlined" color="success">Submit</button>
                            </CardContent>
                        </Card>
                    </Container>
                </form>
            )}
        </Formik>

    )
}

export default ImageUpload

