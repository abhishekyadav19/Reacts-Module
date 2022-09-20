import React, { useRef, useState } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import ReactGoogleAutocomplete from "react-google-autocomplete";

const Autocomplete = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef();
    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            console.log(place.formatted_address)
            console.log(place.geometry.location.lat())
            console.log(place.geometry.location.lng())
        }
    }

    return (
        <div>
            <ReactGoogleAutocomplete
                apiKey="AIzaSyD7DlZcPkmlKMruqZK1PUO-USJKa7dmhsQ"
                onPlaceSelected={(place) => console.log(place)}
            />
            {/* <GooglePlacesAutocomplete
                selectProps={{                                      
                    value,
                    onChange: setValue,
                }}
                apikey="AIzaSyD7DlZcPkmlKMruqZK1PUO-USJKa7dmhsQ"
            /> */}
        </div>
    );
};

export default Autocomplete;
