import { update } from './update'

export const submitHandleUpdate = async (e)=> {
  e.preventDefault()
 
  const { username, email, password,rpassword, name, power, info, lat, lng, isActive, isDeleted   } = e.currentTarget

  if( password.value !== rpassword.value ){
    alert('password does not match!')
    return null
  }

  const data = {
    username: username.value,
    email: email.value,
    passcode: password.value,
    details:{
      name: name.value,
      power: power.value,
      info: info.value,
    },
    position: {
      lat: lat.value,
      lng: lng.value
    },
    active: isActive.value,
    deleted: isDeleted.value,
    registeredDate: new Date()
  }

  const response = await  update(process.env.REACT_APP_BASE_API, data)
  if ( response.ok ){
    alert( `Update successful!`)
  }
    
    
}