import { BrowserRouter, Route, Routes } from "react-router"
import Menu from "./Menu/Menu"
import Banner from "./Banner/Banner"
import Inicio from "./paginas/Inicio/Inicio"
import Esportes from "./paginas/Esportes/Esportes"
import Idolos from "./paginas/Idolos/Idolos"
import Rodape from "./Rodape/Rodape"

const App = () =>{
  return(
    <BrowserRouter>
    <Menu/>
    <Banner/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/esportes' element={<Esportes/>}/>
      <Route path='/idolos' element={<Idolos/>}/>
    </Routes>
    <Rodape/>
    </BrowserRouter>
  )

}

export default App