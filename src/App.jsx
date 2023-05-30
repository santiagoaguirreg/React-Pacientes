import { useState } from "react"
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import ListadoPacientes from "./componentes/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
   <div className="container mx-auto mt-20">
    <Header
      
    />

    <div className="mt-12 md:flex">
    <Formulario
    pacientes={pacientes}
    setPacientes={setPacientes}
    />
    <ListadoPacientes />
    </div>

    </div>
  )
}

export default App
