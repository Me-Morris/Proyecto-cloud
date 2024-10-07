"use client"

import React, { useState } from 'react'

function Addcontact() {
    const [fullname, setfullname] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactos`, {
            method: "POST",
            body: JSON.stringify({ nombre: fullname, numero: number }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.ok) {
            console.log("Contacto creado");
            setfullname(''); // Limpiar el input
            setNumber(''); // Limpiar el input
        } else {
            console.log("Error al crear contacto");
        }
    }

    return (
        <div className="flex justify-center bg-red-400">
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='py-4'>
                    <label htmlFor='fullname'>Nombre del contacto: </label>
                    <input
                        type="text"
                        name="fullname"
                        className='border-yellow-600 border-2'
                        value={fullname} // Añade value para controlar el input
                        onChange={e => setfullname(e.target.value)}
                    />
                </div>
                <div className='py-4'>
                    <label htmlFor='number'>Número de teléfono:</label>
                    <input
                        type="text"
                        name="number"
                        className='border-yellow-600 border-2'
                        value={number} // Añade value para controlar el input
                        onChange={e => setNumber(e.target.value)}
                    />
                </div>
                <button className='bg-cyan-200 border-2'>Enviar</button>
            </form>
        </div>
    )
}

export default Addcontact;
