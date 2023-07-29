export const update = async ( url, data )=>{
  const res = await fetch(url + 'update',{
    method: "PUT",
    headers: {
      'Authorization': process.env.REACT_APP_API_KEY
    },
    body: data
  })

  return res
}