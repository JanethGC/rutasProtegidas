import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import ValidateForm from "./pages/ValidateForm.jsx";
import Form from "./pages/Form.jsx";
import Success from "./pages/Success.jsx";
import { useLogin } from "./store/Login.js";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ValidateForm />}></Route>
        <Route element={<Permited />}>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Route>
      </Routes>
    </>
  )
}

const Permited = () => {

  const { autorizado } = useLogin((state) => state);

  if (!autorizado) {
    return <Navigate to="/" />
  }

  return <Outlet />

}


export default App
