

export const  submit = async (formData)=> {
  
  const res = await fetch(process.env.REACT_APP_BASE_API + 'register',{
    method: "POST",
    headers: {
      'Authorization': process.env.REACT_APP_API_KEY
    },
    body: formData
  })

  return res
} 