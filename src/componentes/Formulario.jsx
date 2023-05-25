import React from 'react'

const Formulario = () => {
  return (

    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5'>
          <div>

            <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
              Nombre Mascota
            </label>

            <input 
              type="text"
              id='mascota'
              placeholder='Nombre de la mascota'
              className='border-2 w-full p-2 mt-10 placeholder-gray-400 rounded-md'
            />


          </div>
      </form>
    </div>


  )
}

export default Formulario