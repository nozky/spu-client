export const update = async ( url, data )=>{
  const res = await fetch(url + 'update',{
    method: "PUT",
    headers: {
      "Content-type" : "application/json",
      'Authorization': process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify(data)
  })

  return res
}