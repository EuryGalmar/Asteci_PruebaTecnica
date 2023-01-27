import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Details() {
    const [details, setDetails] = useState(null);

    const { id } = useParams();

  const getData = async () => {
    const {data} = await axios.get('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
    
    const result = data.results;
    
    setDetails(result.filter(res => res._id === id)[0]);
    console.log(result.filter(res => res._id === id)[0])
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className='containerDetails'>
        <h2>Details</h2>
        <div className='details'>
            {details ? (
                <>
                <p>_id: {details._id}</p>
                <p>cityid: {details.cityid}</p>
                <p>iconcode: {details.iconcode}</p>
                <p>date-insert: {details['date-insert']}</p>
                <p>lastreporttime: {details.lastreporttime}</p>
                <p>latitude: {details.latitude}</p>
                <p>longitude: {details.longitude}</p>
                <p>name: {details.name}</p>
                <p>probabilityofprecip: {details.probabilityofprecip}</p>
                <p>relativehumidity: {details.relativehumidity}</p>
                <p>skydescriptionlong: {details.skydescriptionlong}</p>
                <p>state: {details.state}</p>
                <p>stateabbr: {details.stateabbr}</p>
                <p>tempc: {details.tempc}</p>
                <p>validdateutc: {details.validdateutc}</p>
                <p>winddirectioncardinal: {details.winddirectioncardinal}</p>
                <p>windspeedkm: {details.windspeedkm}</p>
                </>
            ): (
                <p>Loading...</p>
            )

            }
        </div>
    </div>
  )
}
