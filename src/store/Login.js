import { create } from "zustand";

const initialState = {
    usuario: null,
    pswd: "",
    autorizado: false,
};

//Primero creo un hook useLogin, create es una funvion de ZUSTAND que permite crearlos.

export const useLogin = create((set) => ({
    ...initialState,
    actualizarEstado: (objActualizar) => set((state) => ({ ...objActualizar})),
    actualizarUsuario: (usuario) => set((state) => ({ ...state, usuario })),
    actualizarPswd: (pswd) => set((state) => ({ ...state, pswd})),
    actualizarAutorizado: (autorizado) => set((state) => ({ ...state, autorizado })),
}));



