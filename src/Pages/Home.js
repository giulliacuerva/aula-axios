import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {

    const [data, setData] = useState([])

    useEffect( () => {
       axios.get('https://671a3195acf9aa94f6a98dcc.mockapi.io/films')
           .then( res => setData(res.data) )
           .catch( err => console.log(err) );
   }, [] );

    const handleDelete = (id) => {
        const confirm = window.confirm("Quer mesmo apagar este filme?");
        if(confirm) {
   
            axios.delete(`https://671a3195acf9aa94f6a98dcc.mockapi.io/films/${id}`)
                .then(() => {
                    setData( prevData => prevData.filter(user => user.id !== id) );
                })
                .catch(err => console.log(err));
        }
    }

   return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <div className='rounded bg-white border shadow p-4'>
            <div className='table-responsive'>
                <div>
                    <table className='table table-striped table-bordered w-auto rounded'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => (
                                <tr key={i}>
                                    <td>
                                        <Link to={`/read/${d.id}`} style={{ color: 'inherit' }}> {d.id} </Link>
                                    </td>
                                    <td>
                                        <Link to={`/read/${d.id}`} style={{ color: 'inherit' }}>{d.name}</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
   )
}
export default Home;