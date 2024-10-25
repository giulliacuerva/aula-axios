import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({ name: '', genero: '', ano: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://671a3195acf9aa94f6a98dcc.mockapi.io/films', values)
            .then(res => {
                setSuccessMessage('Sucesso! Filme adicionado.');
                setTimeout(() => {
                    navigate('/');
                }, 2000); // Aguarda 2 segundos antes de redirecionar
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Adicionar Filme</h1>

                {successMessage && (
                    <div className="alert alert-success" role="alert">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="name"> Nome: </label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            placeholder='Nome'
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="genero"> Gênero: </label>
                        <input
                            type="text"
                            name='genero'
                            className='form-control'
                            placeholder='Gênero'
                            onChange={e => setValues({ ...values, genero: e.target.value })}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="ano"> Ano: </label>
                        <input
                            type="text"
                            name='ano'
                            className='form-control'
                            placeholder='Ano'
                            onChange={e => setValues({ ...values, ano: e.target.value })}
                        />
                    </div>

                    <button className='btn btn-success'>Enviar</button>

                    <Link to="/" className='btn btn-dark ms-3'> Voltar </Link>
                </form>
            </div>
        </div>
    );
}

export default Create;