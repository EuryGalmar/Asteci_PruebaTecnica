import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import '../App.scss';
import { Link } from 'react-router-dom';

function Table() {
  const [dataTable, setDataTable] = useState(null);

  const getData = async () => {
    const {data} = await axios.get('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
    console.log(data)
    const result = data.results;
    
    setDataTable(result.slice(0, 10));
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="container">
      <table className='table'>
        <thead>
          <tr>
            <th>_id</th>
            <th>cityid</th>
            <th>name</th>
            <th>probability of precip</th>
            <th>relativehu midity</th>
            <th>Lastreporttime</th>
            <th>si cumple</th>
          </tr>
        </thead>

        <tbody>
          { dataTable ? (
            dataTable.map((_,index)=>(
              <tr key={index}>
                <th><Link to={`${_._id}`}>{_._id}</Link></th>
                <td>{_.cityid}</td>
                <td>{_.name}</td>
                <td>{_.probabilityofprecip}</td>
                <td>{_.relativehumidity}</td>
                <td>{_.lastreporttime}</td>
                <td>{_.probabilityofprecip > 60 || _.relativehumidity > 50 && 'LLUEVE'}</td>
              </tr>
            ))
          ): (
            <tr>
              Loading...
            </tr>
          )

          }
        </tbody>

      </table>

      <div className='containerTotal'>
        <span>Total de registros = {dataTable && dataTable.length}</span>
      </div>
    </div>
  );
}

export default Table;