
export const fetchData = async ()=> {
  try {
    const res = await fetch(process.env.REACT_APP_BASE_API,{
      headers:{
        'Content-type': 'application/json',
        'Authorization': process.env.REACT_APP_API_KEY
      }
    })
    return await res.json()
  } catch (error) {
    console.log( error )
  }
}