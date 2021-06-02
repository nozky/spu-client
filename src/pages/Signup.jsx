import React,{ useEffect,useState }from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

import { submitHandleSignUp } from '../helpers/submitHandleSignUp'
import { searchLatLng } from '../helpers/searchLatLng'

import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { FcSearch } from 'react-icons/fc';
import  solarActive from '../icons/solarActive.png'
 

const point = new L.Icon({
  iconUrl: solarActive,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Signup = () => {

const [ currPosition, setCurrPosition ] = useState({lat: 12.8797, lng: 121.7740})
const [ zoom, setZoom ] = useState(10)
const [ map, setMap ] = useState(null)
const [ searchStr, setSearchStr ] = useState(null)

  useEffect( ()=>{
    try {
      navigator.geolocation.getCurrentPosition((data, err)=>{
        if(err) { return null }
          setZoom(8)
          setCurrPosition( current => current = { lat: data.coords.latitude, lng: data.coords.longitude }  )
        })
    } catch (error) {
      console.log( error )
    }
  },[])

  useEffect(()=>{
    try {
      if(map=== null ) return null
    map.flyTo({lat: currPosition.lat, lng: currPosition.lng}, map.getZoom(),[currPosition])
    } catch (error) {
      console.log( error )
    }
  },[currPosition,map])

  const getLatLng = (searchStr)=> {
    searchLatLng(searchStr).then( (result ) =>  {
      if(result){  
        setCurrPosition((current) => current = result)
      }
   })
  }
  

  return (
    <div className='signup'>
      
      <div className='signup-head'>
      <h2>Sign Up</h2>
      <p>Solar Power Philippines</p>
        {/* <div className='google-signin'>
          <p>Sign in with google</p>
          <button >Sign In</button>
        </div> */}
      </div>

      <div className='map-wrapper'>

        <div className='searchPlace'>
          <label htmlFor="searchPlace">Search place</label>
          <input type="text" name="searchPlace" id="searchPlace" className='searchPlace' onChange={e => setSearchStr((current => current = e.target.value))}/>
          <i onClick={()=> getLatLng(searchStr)}><FcSearch/></i>
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
      

        <form onSubmit={(e)=> submitHandleSignUp(e)} className='form-info'>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username' required/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' required/>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' required placeholder='Do not use your email password' />
          </div>

          <div>
            <label htmlFor="rpassword">Repeat Password</label>
            <input type="password" name='rpassword' id='rpassword' required/>
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' required placeholder=" (System name)"/>
          </div>

          <div>
            <label htmlFor="power">Power(kw)</label>
            <input type="number" step="any" name='power' id='power' required placeholder=' (Number)'/>
          </div>

          <div>
            <label htmlFor="info">More Info</label>
            <textarea name="info" id="info" cols="40" rows="2" placeholder='(Optional)'></textarea>
          </div>

          <div>
            <label htmlFor="lat">Latitude</label>
            <input type="number" 
                   step='any' 
                   name='lat' 
                   id='lat' 
                   value={currPosition.lat} 
                   onChange={(e)=> setCurrPosition((current)=>  ( {...current, lat: e.target.value} ) )} 
                   required
            />
          </div>

          <div>
            <label htmlFor="lng">Longitude</label>
            <input type="number" 
                   step='any' 
                   name='lng' 
                   id='lng' 
                   value={currPosition.lng}  
                   onChange={(e)=> setCurrPosition((current)=> ( {...current, lng: e.target.value} ) )} 
                   required
            />
          </div>

          <div className='submit-btn'>
              <button type='submit'>Submit</button>
              <button type='reset'>Clear</button>
          </div>
        
        </form>

        <div className='footer'>
          <p className='back'><Link to="/">Back to Map</Link></p>
        </div>
      </div>
      

    </div>
    // end signup
  
  )
}

export default Signup
