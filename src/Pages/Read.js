import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {

    const [data, setData] = useState([]);

    // vai pegar o id enviado na URL ( <Link to={`/read/${d.id}`}... ), tipo oq era o props:
    const {id} = useParams();

    // buscando o filme com aquele id
    useEffect( () => {
        axios.get('https://671a3195acf9aa94f6a98dcc.mockapi.io/films/' + id)
            .then( res => setData(res.data) )
            .catch( err => console.log(err) );
    }, [] );
    // ^^ Array de dependência vazio: só vai executar uma vez, na renderização inicial do componente.
    // Nao será chamado em renderizações subsequentes do componente. (ex se atualizar algo dentro da pagina, ou a propria pagina)

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
                <h3>Detalhes do filme</h3>
                
                <div className='mb-2'>
                    <strong>Nome: {data.name}</strong>
                </div>

                <div className='mb-2'>
                    <strong>Genero: {data.genero}</strong>
                </div>

                <div className='mb-3'>
                    <strong>Ano: {data.ano}</strong>
                </div>

                <Link to="/" className='btn btn-dark ms-3'> Voltar </Link>
            </div>
        </div>
    )
}

export default Read;