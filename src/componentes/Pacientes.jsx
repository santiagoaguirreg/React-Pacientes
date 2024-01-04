

const Pacientes = ({paciente, setPaciente, setPacientes, pacientes}) => {


   const{nombre, propietario, email, alta, sintomas, id } = paciente;

   const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");

    if(respuesta) { 
        const pacientesactualizado = pacientes.filter( (pacienteState) => pacienteState.id !== id )
        setPacientes(pacientesactualizado)
       
    }
  
   }
   
  return (

    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 my- text-gray-700 uppercase'> Nombre: {''}
      <span className='font-normal normal-case'>{nombre}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
      <span className='font-normal normal-case'>{propietario}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
      <span className='font-normal normal-case'>{email}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha Alta: {''}
      <span className='font-normal normal-case'>{alta}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'> Síntomas: {''}
      <span className='font-normal normal-case'>{sintomas}.</span>
    </p>

    <div className="flex justify-between mt-5">

    <button
    type="button"
    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
    onClick={() => setPaciente(paciente) }
    >
     Editar
    </button>

    <button
    type="button"
    className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
    onClick={handleEliminar}
    >
      Eliminar
    </button>

    </div>


   </div>
  )
}

export default Pacientes