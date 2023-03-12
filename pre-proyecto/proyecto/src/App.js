import Registro from "./components/Registro";
import Home from "./components/Home";
import PanelAdmin from "./components/PanelAdmin";
import Editar from "./components/Editar";
import AgregarUser from "./components/AgregarUser";
import Entrada from "./components/Entrada";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="fondo">
      <BrowserRouter>
        <div>
          
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Registro" element={<Registro/>}></Route>
          <Route path="/Entrada" element={<Entrada/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/PanelAdmin" element={<PanelAdmin/>}></Route>
          <Route path="/Editar" element={<Editar/>}></Route>
          <Route path="/AgregarUser" element={<AgregarUser/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
