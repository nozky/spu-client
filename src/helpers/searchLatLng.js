export const searchLatLng = async ( placeName ) => {
 const url = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${placeName}&format=json&limit=1` 

 try {
    const res = await fetch( url )
    const result = await res.json()
    const lat = parseFloat(result[0].lat)
    const lng = parseFloat(result[0].lon)
    return({lat,lng})
 } catch (error) {
    console.log( error )
    alert ("Cannot find address")
 }
}

