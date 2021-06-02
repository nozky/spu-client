import React,{ useEffect, useState } from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './lmap.css'
import solarActive from '../icons/solarActive.png'
import solarInactive from '../icons/solarInactive.png'
import * as L from 'leaflet'

const activeIcon = new L.Icon({
  iconUrl: solarActive,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const inactiveIcon = new L.Icon({
  iconUrl: solarInactive,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


const Lmap = ({spu}) => {

  
  // center map to philippines
  const [mapCenter, setMapCenter] = useState([12.8797,121.7740])

  useEffect(()=>{ setMapCenter([12.8797,121.7740]) },[])


  if( !Array.isArray( spu ) ){
    return(
      <div style={{textAlign: 'center',padding: '3em'}}>
        <h2>Application is not authorize!</h2>
      </div>
    )
  }

  return (
    <MapContainer 
      style={{width: '100%', height: '100%'}}
      zoom={6} 
      center={mapCenter} 
      scrollWheelZoom={true} >
       <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />

      {spu.map((user)=>{

        let position = [user.position.lat, user.position.lng]

        if( user.deleted === true) return null 

        return(
          <Marker key={user._id} position={position} icon={ user.active? activeIcon : inactiveIcon  } >
            <Popup>
              <span style={{fontStyle:'italic', fontWeight: 'bold'}}>{ user.details.name }</span>  <br /> 
              <span style={{fontStyle:'italic', fontWeight: 'bold'}}>System power:</span> { user.details.power } kw <br /> 
              { user.details.info } <br />
              <span style={{fontStyle:'italic', fontWeight: 'bold'}}>Contact:</span> {user.email} <br />
              <span style={{fontStyle:'italic', fontWeight: 'bold'}}>active:</span> {user.active.toString() }
            </Popup>
        </Marker>
        )
      })}

    </MapContainer>
  )
}


export default Lmap
