import React, { useState } from 'react'
import './Formulario.css'
import eliminarCita from './eliminarCita'


export default function Formulario({ pacientes, setPacientes }) {
    const [mascota, setMascota] = useState()
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
        <div class="mb-3">

            <h1 className='titulos'>Crear cita</h1>
            <form className='inputForm' action="">
                <label for="exampleFormControlInput1" class="form-label">Nombre Mascota</label>
                <input className='label' onChange={(e) => { setMascota(e.target.value) }} value={mascota} type="text" placeholder="Nombre" />
                <label className='tit' htmlFor="">Nombre Dueño</label>
                <input className='label' onChange={(e) => { setDueño(e.target.value) }} value={dueño} type="text" placeholder="Escribe tu nombre!" />
                <label className='tit' htmlFor="">Fecha</label>
                <input className='label' onChange={(e) => { setFecha(e.target.value) }} value={fecha} type="date" />
                <label className='tit' htmlFor="">Hora</label>
                <input className='label' onChange={(e) => { setHora(e.target.value) }} value={hora} type="time" />
                <label className='tit' htmlFor="">Sintomas</label>
                <textarea className='textarea' onChange={(e) => { setSintomas(e.target.value) }} value={sintomas} type="text" name="Sintomas" cols="30" rows="10"></textarea>
                <div className="btn">
                <button className='ov-btn-slide-left' onClick={agregarPaciente} type='button'>Agregar</button>
                <button className='ov-btn-slide-left btn_eliminar' onClick={eliminarCita}>ELIMINAR CITAS</button>
                </div>
            </form>
        </div>
    )
}