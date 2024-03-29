import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre ] = useState('');
  const [propietario, setPropietario ] = useState('');
  const [email, setEmail ] = useState('');
  const [alta, setAlta ] = useState('');
  const [sintomas, setSintomas ] = useState('');

  const [error, setError ] = useState(false);
  const [validpaciente, setValidpaciente ] = useState(true);
  const [edicionpaciente, setEdicionpaciente ] = useState(false);

  useEffect(() => {
   if(Object.keys(paciente).length > 0) {
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setAlta(paciente.alta)
    setSintomas(paciente.sintomas)

    setValidpaciente(false);
    setEdicionpaciente(true);
   } 

  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      if([nombre, propietario, email, alta, sintomas].includes("")) {
        setError(true);

        return;
      }

      setError(false);

      const objetoPaciente = {
        nombre, 
        propietario,
        email, 
        alta,
        sintomas,
      }


      if(edicionpaciente == false) {
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente])
      } else {
        objetoPaciente.id = paciente.id;

        const pacientesactualizado = pacientes.map( 
          (pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState 
          )

        setPacientes(pacientesactualizado)
        setPaciente({})
        setValidpaciente(true)
        setEdicionpaciente(false);
      }

      setNombre('')
      setPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')

    
  }

  return (

    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

        { error &&  <Error
         mensaje={"Error de validación"}
        />}
          <div className='mb-5'>
            <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
              Nombre Mascota
            </label>

            <input 
              type="text"
              id='mascota'
              placeholder='Nombre de la mascota'
              className='border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

          </div>

          <div className='mb-5'>

            <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
              Nombre Propietario
            </label>

            <input 
              type="text"
              id='propietario'
              placeholder='Nombre del propietario'
              className='border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md'
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />

          </div>

          <div className='mb-5'>

            <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
              Email
            </label>

            <input 
              type="email"
              id='email'
              placeholder='Email Contacto'
              className='border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

        <div className='mb-5'>

            <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
             Alta
            </label>

            <input 
              type="date"
              id='alta'
              className='border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md'
              value={alta}
              onChange={(e) => setAlta(e.target.value)}
            />

       </div>

       <div className='mb-5'>

            <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
             Sintomas
            </label>

          <textarea 
          id='sintomas'
          className='border-2 w-full p-2 mt-3 placeholder-gray-400 rounded-md'
          placeholder='Describe los Síntomas'
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          
          />
       </div>

       <input
        type="submit"
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
        value={validpaciente ? "Agregar paciente" : "Editar paciente"}
       />
      </form>
    </div>


  )
}

export default Formulario