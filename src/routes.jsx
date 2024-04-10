import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sobre from "./assets/Sobre/Index"
import Inicio from "./assets/inicio/Index"
import Menu from "./assets/Menu/Index"
import Rodape from "./assets/Rodape/Index"
import PaginaPadrao from "./assets/PaginaPadrao"
import Post from "./assets/Post/Index"
import NaoEncontrada from "./assets/NaoEncontrada"
import ScrollToTop from "./assets/ScrollToTop"



function AppRoutes() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />


      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>

        <Route path="posts/:id/*" element={<Post/>}/>

        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
