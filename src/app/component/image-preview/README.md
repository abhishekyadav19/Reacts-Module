# React Image Upload Component: with Upload Preview and Full image Preview and formik validation

## Features:
1. Profile Image (any types)Upload in react(component:ImageUpload.js).
2. Formik validation on submitting the Profile image(component:ImageUpload.js)
3. Get Image Preview before uploading in react(Component:UploadPreview.js)
4. Get Image Full Preview on onclick after uploading it.(Component:UploadPreview.js)

 ## How it works:
- we are going to be covering how to allow a user to upload images to your application, and then how we can preview those images on your application ,full preview and validation on submit.
- First lets create a way for our user to upload images in ImageUpload component.
- Fromik/yup validation has been used for validate the upload file (required,size and type) on submitting.
- Then for image preview before uploading ,ImageUpload component Pass image props to the child  component UploadPreview.js
- UploadPreview component Read props inside the its component and get the url of this this image by usimg FileReader.
- Path of this image props can be extracted by FileReader and used in img src for preview the image.
- At last there is implemented onclick function on preview image box and popup has been opened on it ,that will show full preview of uploaded image.


## Files Directory:
- /src/app/component/image-preview/image-preview.css
- /src/app/component/image-preview/ImageUpload.js
- /src/app/component/image-preview/UploadPreview.js

## Installation:
- npm i formik (For Validation)
- npm i yup (For Validation)
- npm install @mui/icons-material @mui/material @emotion/styled @emotion/react(For Ui)

## Compatibility:
 React
- It is compatible  with almost all  the version of React.




