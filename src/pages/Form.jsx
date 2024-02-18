import { useLogin } from "../store/Login";
import { useFormulario } from "../store/Formulario";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Form() {

    const [terminar, setTerminar] = useState(false);
    const { actualizarEnviado, enviado } = useFormulario((state) => state);


    const handleClickTerminar = () => {
        setTerminar(true);
        actualizarEnviado(true);
    }

    return (
        <>
            {terminar && (
                <>
                    <Navigate to="/success" />
                </>
            )}

            {!enviado ? <>

                <h5> Debes llenar el siguiente formulario con informacion veraz </h5>
                <button onClick={handleClickTerminar} > Ingresar </button>

            </> :
                <>
                    <Navigate to="/success" />
                </>

            }

        </>
    )
}

export default Form;