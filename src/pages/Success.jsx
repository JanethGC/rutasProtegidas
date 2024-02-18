import { useFormulario } from "../store/Formulario";



function Success() {

    const { enviado } = useFormulario((state) => state);

    return (
    <>
        {enviado && 
        (
            <> Completaste el formulario de forma correcta</>
        )
        }
    </>
    )
}

export default Success;