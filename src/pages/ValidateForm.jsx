import { useLogin } from "../store/Login";
import { useFormulario } from "../store/Formulario";
import { Navigate } from "react-router-dom";

function ValidateForm() {

    const { actualizarEstado, autorizado} = useLogin((state) => state);
    const  { enviado} = useFormulario((state) => state.enviado);



    const login = () => {

        console.log("login");
        const objUser = {
            usuario: "Janeth",
            psw: "1234",
            autorizado: true,
        };
        actualizarEstado(objUser);
    }


    return (
        <>
            {autorizado && !enviado && <Navigate to="/form" />}           
            <h5>Registra tus credenciales aqui para ingresar al formulario </h5>
            <button onClick={login} > Ingresar </button>
        </>
    )
}

export default ValidateForm;