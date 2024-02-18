import { create } from "zustand";

const initialState = {
    enviado:false
};

//Primero creo un hook useFormulario, create es una funcion de ZUSTAND que permite crearlos.

export const useFormulario = create((set) => ({
    ...initialState,
    actualizarEnviado: (enviado) => set((state) => ({ ...state,enviado }))
}));