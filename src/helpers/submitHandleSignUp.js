import { submit } from './submit'

export const submitHandleSignUp = (e, userData)=> {
  e.preventDefault()
  const { username, email, password,rpassword, name, power, info, lat, lng, pix  } = userData

  if( password !== rpassword ){
    alert('password does not match!')
    return null
  }

  const data = {
    username: username,
    email: email,
    passcode: password,
    details:{
      name: name,
      power: power,
      info: info,
    },
    position: {
      lat: lat,
      lng: lng
    },
    active: true,
    deleted: false,
    registeredDate: new Date(),
    pix: pix
  }

  const formData = new FormData()
  Object.keys(data).forEach( key => {
    if(typeof(data[key]) ==='object' && key !== 'pix') {
      formData.append(key, JSON.stringify(data[key]))
    }else{
      formData.append(key, data[key])
    }
  })

  submit(formData)
    .then( response => response.json())
    .then ( result => {
      console.log( result ) 
      if(result.name !=='success'){
        console.log( result.name )
        alert(`Entry - ${JSON.stringify(result.keyValue)} alreay exist!`)
      }else{
        console.log( result.name )
        alert('Thank you for singing up. Go Solar PHilippines User!')
      }
    } ).catch(error => {
      console.log( error )
    }) 
}