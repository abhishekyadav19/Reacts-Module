import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'

const MapContainer = () => {
  const [selected, setSelected] = useState({})
  const [currentPosition, setCurrentPosition] = useState({})
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 41.3954,
        lng: 2.162
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  const onselect = (item) => {
    setSelected(item)
  }
  // const success = (position) => {
  //   const currentPosition = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   }
  //   setCurrentPosition(currentPosition)
  // }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success)
  // }, [])

  // const onMarkerDragEnd = (position) => {
  //   const lat = position.latLng.lat();
  //   const lng = position.latLng.lng();
  //   setCurrentPosition({ lat, lng })
  // }

  return (
    <>
      <LoadScript
        googleMapsApikey="AIzaSyD7DlZcPkmlKMruqZK1PUO-USJKa7dmhsQ">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {/* {
            currentPosition.lat ?
              (
                <Marker position={currentPosition}
                  draggable={true}
                  onDragEnd={(e) => onMarkerDragEnd(e)}
                  onClick={(e)=>onselect(e)} />
              ) : null
          } */}
          {
            locations.map(item => {
              return (
                <Marker key={item.name} position={item.location} onClick={()=>onselect(item)} />
              )
            })
          }
          {
            selected.location &&
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
              > 
              <p>{selected.name}</p>
              </InfoWindow>
            )
          }

        </GoogleMap>
      </LoadScript>

    </>
  )
}

export default MapContainer