import { submit } from './submit'

export const submitHandleSignUp = (e)=> {
  e.preventDefault()

  const { username, email, password,rpassword, name, power, info, lat, lng  } = e.currentTarget

  if( password.value !== rpassword.value ){
    alert('password does not match!')
    return null
  }

  console.log('Build data...')

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
    active: true,
    deleted: false,
    registeredDate: new Date()
  }


  console.log( 'submitting data')
  submit(process.env.REACT_APP_BASE_API, data)
    .then( response => response.json())
    .then ( result => { 
      if(result.name !=='success'){
        console.log( result.name )
        alert(`Entry - ${JSON.stringify(result.keyValue)} alreay exist!`)
      }else{
        console.log( result.name )
        alert('Thank you for singing up. Go Solar PHilippines Users!')
      }
    } ) 
}