import { useState } from "react"
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesactualizado = pacientes.filter( (pacienteState) => pacienteState.id !== id )

    setPacientes(pacientesactualizado)
   }


  return (
   <div className="container mx-auto mt-20">
    <Header
      
    />

    <div className="mt-12 md:flex">
    <Formulario
    pacientes={pacientes}
    setPacientes={setPacientes}
    paciente={paciente}
    setPaciente={setPaciente}
    />
    <ListadoPacientes 
    
    pacientes={pacientes}
    setPaciente={setPaciente}
    eliminarPaciente={eliminarPaciente}
    />
    </div>

    </div>
  )
}

export default App
