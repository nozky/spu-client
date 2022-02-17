import React,{ useState, useEffect } from 'react'
import './profile.css'
import { Link } from 'react-router-dom'

import { searchLatLng } from '../helpers/searchLatLng'
import { submitHandleUpdate } from '../helpers/submitHandleUpdate'


import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { FaSearchLocation } from 'react-icons/fa';
import  solarActive from '../icons/solarActive.png'

const Profile = ( {location, ...rest} ) => {

  const { username, email, details, position, active, deleted } = location.userDetails

  const [ currPosition, setCurrPosition ] = useState({lat: position.lat, lng: position.lng})
  const [ zoom, setZoom ] = useState(8)
  const [ map, setMap ] = useState(null)
  const [ searchStr, setSearchStr ] = useState(null)
  const [ isActive, setIsActive ] = useState( active )
  const [ isDeleted, setIsDeleted ] = useState( deleted )
  const [ deleteMsg, setDeleteMsg ] = useState('')

  const point = new L.Icon({
    iconUrl: solarActive,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(()=>{
    try {
      if(map=== null ) return null
        setZoom(8)
        map.flyTo({lat: currPosition.lat, lng: currPosition.lng}, map.getZoom(),[currPosition])
    } catch (error) {
        console.log( error )
    }
  },[currPosition,map])


  useEffect(()=>{
    if(isDeleted){
      setDeleteMsg("This account will be deleted after a few days and you can no longer recover.")
    }else{
      setDeleteMsg("")
    }
  }, [isDeleted])


  const getLatLng = (searchStr)=> {
   searchLatLng(searchStr).then( (result ) =>  {
    if(result){  
      setCurrPosition((current) => current = result)
    }
   })
  }

  
  return (

    <div className='profile'>
      
      <div className='profile-head'>
        <h2>Update Profile</h2>
        <p>Solar Power Philippines</p>
      </div>

      <div className='map-wrapper'>

        <div className='searchPlace'>
          <input type="text" name="searchPlace" id="searchPlace" className='searchPlace' onChange={e => setSearchStr((current => current = e.target.value))} placeholder='Search: Street City Province Country'/>
          <i onClick={()=> getLatLng(searchStr)}><FaSearchLocation/></i>
        </div>

        <div className='form-map'>
            <MapContainer 
                style={{width: '100%', height: '100%'}} 
                zoom={zoom} 
                center={[currPosition.lat, currPosition.lng]} 
                scrollWheelZoom={true}
                whenCreated={(map)=>  setMap( map )}
              >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                <Marker position={[currPosition.lat, currPosition.lng]} icon={ point }>
                  <Popup>Your Selected Location here!</Popup>
                </Marker>
            </MapContainer>
        </div> 
      

        <form onSubmit={(e)=> submitHandleUpdate(e)} className='form-info'>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username' value={username} readOnly/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' defaultValue={email} required/>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' defaultValue={location.userInfo.password} />
          </div>

          <div>
            <label htmlFor="rpassword">Repeat Password</label>
            <input type="password" name='rpassword' id='rpassword' required/>
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' defaultValue={details.name} required placeholder=" (System name)"/>
          </div>

          <div>
            <label htmlFor="power">Power(kw)</label>
            <input type="number" step="any" name='power' id='power' defaultValue={details.power} required placeholder=' (Number: 0.000)'/>
          </div>

          <div>
            <label htmlFor="info">More Info</label>
            <textarea name="info" id="info" cols="40" rows="2" defaultValue={details.info}  placeholder='(Optional)'></textarea>
          </div>

          <div>
            <label htmlFor="lat">Latitude</label>
            <input type="number" step='any' name='lat' id='lat' value={ currPosition.lat } onChange={(e)=> setCurrPosition((current)=> ({...current, lat: e.target.value}) )} required/>
          </div>

          <div>
            <label htmlFor="lng">Longitude</label>
            <input type="number" step='any' name='lng' id='lng' value={ currPosition.lng } onChange={(e)=> setCurrPosition((current)=> ({...current, lat: e.target.value}) )} required/>
          </div>

          <div className='delete-message' style={{color: 'red'}}  >{deleteMsg}</div>
          <div className='submit-btn'>
              <button id="submit" name="submit" type='submit'>Update</button>
              <button id="isActive" name="isActive" type="button" value={isActive} onClick={()=>setIsActive(!isActive)} >{ isActive? "Deactivate" : "Activate" }</button>
              <button id="isDeleted" name="isDeleted" type="button" value={isDeleted} style={{color: 'red'}} onClick={()=> setIsDeleted(!isDeleted)} >{ isDeleted? "Undo Del" : "Delete" }</button>
          </div>
        
          <div className='footer'>
            <Link to='/'>Back to Map</Link>
          </div>

        </form>
      </div>
      

    </div>
  )
}

export default Profile
