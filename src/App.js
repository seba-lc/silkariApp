import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </>
  );
}

export default App;

//CON EL COMANDO RSC SE CREA EL FUNCTIONAL COMPONENT!!!!!!!!!!!!!!!!!!!!
