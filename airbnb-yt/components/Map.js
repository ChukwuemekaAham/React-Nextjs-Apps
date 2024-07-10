import { useState } from 'react'
import ReactMapGl, { Marker, Popup }  from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})

  // Transform searchResults
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  console.log(coordinates)
  const center = getCenter(coordinates)

  const key = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  console.log({"key": key})

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return ( 
    <ReactMapGl
      mapStyle="mapbox://styles/ahamchukwuemeka/cl1qivf4n000o14mx8ohc8ux6"
      mapboxAccessToken={key}
      // mapLib={import('mapbox-gl')}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="animate-bounce cursor-pointer text-2xl"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedLocation?.long === result.long && (
            <Popup
              onClose={() => setSelectedLocation(null)}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGl>
  )
}

export default Map
