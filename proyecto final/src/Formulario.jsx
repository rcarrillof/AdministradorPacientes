import React, { useState } from 'react'
import './Formulario.css'

export default function Formulario() {
    const [pacientes, setPacientes] = useState([])
    const [mascota, setMascota] = useState("")
    const [dueño, setDueño] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    function agregarPaciente() {
        const informacion = {
            mascota,
            dueño,
            fecha,
            hora,
            sintomas
        }
        setPacientes([...pacientes, informacion])
        setMascota("")
        setDueño("")
        setFecha("")
        setHora("")
        setSintomas("")
    }
    return (
        <div>
            <h1 className='titulos'>CREAR CITA</h1>
            <form className='inputForm' action="">
                <label className='tit' htmlFor="">Nombre Mascota</label>
                <input className='label' onChange={(e) => { setMascota(e.target.value) }} value={mascota} type="text" />
                <label className='tit' htmlFor="">Nombre Dueño</label>
                <input className='label' onChange={(e) => { setDueño(e.target.value) }} value={dueño} type="text" />
                <label className='tit' htmlFor="">Fecha</label>
                <input className='label' onChange={(e) => { setFecha(e.target.value) }} value={fecha} type="date" />
                <label className='tit' htmlFor="">Hora</label>
                <input className='label' onChange={(e) => { setHora(e.target.value) }} value={hora} type="time" />
                <label className='tit' htmlFor="">Sintomas</label>
                <textarea className='label' onChange={(e) => { setSintomas(e.target.value) }} value={sintomas} name="Sintomas" cols="30" rows="10"></textarea>
                <button className='Submit' onClick={agregarPaciente} type='button'>Agregar</button>
            </form>
        </div>
    )
}