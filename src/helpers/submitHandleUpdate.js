import { update } from './update'

export const submitHandleUpdate = async (e, pix, updatedPix)=> {
  e.preventDefault()
  const { username, email, password,rpassword, name, power, info, lat, lng, isActive, isDeleted  } = e.currentTarget

  if( password.value !== rpassword.value ){
    alert('password does not match!')
    return 
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
    active:  isActive.value === 'true'? true : false,
    deleted: isDeleted.value === 'true'? true: false,
    pix: pix === null? null : updatedPix
  }

  const formData = new FormData()
  Object.keys(data).forEach( key => {
    if(typeof(data[key]) ==='object' && key !== 'pix'){
      formData.append(key, JSON.stringify(data[key]))
    }else{
      formData.append(key, data[key])
    }
  })

  const response = await  update(process.env.REACT_APP_BASE_API, formData)
  if(response.ok){
    return await response.json()
  }else{
    console.log(response)
  }
}