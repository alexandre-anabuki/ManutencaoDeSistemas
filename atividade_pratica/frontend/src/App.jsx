import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./components/Cadastro.jsx"
import Login from "./components/Login.jsx"
import EsqueciSenha from "./components/EsqueciSenha.jsx"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/cadastro" element={<Cadastro/>} />
          <Route path ="/" element={<Login/>}/>
          <Route path="/esqueci_senha" element={<EsqueciSenha/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App