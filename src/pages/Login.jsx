import React,{ useState } from 'react'
import './login.css'
import { Link, Redirect } from 'react-router-dom'
import { auth } from '../helpers/auth'


const Login = () => {
  const [ isAuth, setIsAuth] = useState( false )
  const [ userDetails, setUserDetails ] = useState({})
  const [ userInfo, setUserInfo ] = useState({})

  const submitHandle = async (e)=> {
    e.preventDefault()
    const response =  await auth( userInfo )
    
    if( response.ok ){
      const result = await response.json()
      setUserDetails( result )
      setIsAuth( true )
    }else{
      alert('Invalid information! Please check and try again.')
    }
  }

  if( isAuth ){
    return <Redirect to ={ {pathname:"/profile", state: isAuth,  userDetails: userDetails, userInfo: userInfo } }/>
  }

  return (
    <div className='login'>
      
      <div className="login-head">
        <h1>SPP</h1>
        <p>Solar Power Philippines</p>
      </div>

        <form onSubmit={(e)=> submitHandle(e)}>
          <div>
            <label htmlFor="username">User Name</label>
            <input type="text" 
                   id="username" 
                   name="username" 
                   placeholder="User Name (case sensitive)" 
                   onChange ={(e)=> setUserInfo( (current) => ({...current, username: e.target.value}) ) }
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" 
                   id="password" 
                   name="password" 
                   placeholder="Password (case sensitive)"
                   onChange={(e)=> setUserInfo( (current) => ({...current, password: e.target.value}) )} 
            />
          </div>

          <div className='login-buttons'>
            <button className="btn">Submit</button>
          </div>
        </form> 

        <div className='home'>
          <Link to='/' >Back to Map</Link>
        </div>

        
      
    </div>
  )
}

export default Login
