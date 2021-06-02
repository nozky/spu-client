
export const fetchData = async ()=> {
  const res = await fetch(process.env.REACT_APP_BASE_API,{
    
    headers:{
      'Content-type': 'application/json',
      'Authorization': process.env.REACT_APP_API_KEY
    }
  })

  const result = await res.json()
  return result
}