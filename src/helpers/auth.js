export const auth = async (userInfo)=>{

  const response = await fetch( process.env.REACT_APP_BASE_API + "login",{
    method: "POST", 
    headers:{
      "Content-type": "application/json",
      "Authorization": process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify( userInfo )
  })

  return response

}