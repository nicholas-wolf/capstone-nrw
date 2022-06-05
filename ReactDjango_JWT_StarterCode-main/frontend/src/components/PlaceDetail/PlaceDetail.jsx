

// const placeDetails {
//     PLACE_DETAIL_FIELDS = [
//         "address_components",
//         "adr_address",
//         "formatted_address",
//         "formatted_phone_number",
//         "geometry",
//         "icon",
//         "international_phone_number",
//         "name",
//         "opening_hours",
//         "photos",
//         "place_id",
//         "plus_code",
//         "price_level",
//         "rating",
//         "types",
//         "url",
//         "website",
//         "user_ratings_total",
//         "vicinity",
//         "permanently_closed",
//     ];


//     const getPlaceDetails = async (fields = PLACE_DETAIL_FIELDS) => {
//         try{
//             let response =await axios.get(
//               `https://maps.googleapis.com/maps/api/place/details/json`,
//               {
//                 params: {
//                   key: process.env.REACT_APP_GOOGLE_API_KEY,
//                   fields: fields.join(",")
      
//                 }
//               })
//                 return response
//              } catch (error) {
//                     console.log(error.message);
//         }
//     }
// }