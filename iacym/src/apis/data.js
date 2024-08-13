import { generalApi } from "./Index.js";

// Función genérica para obtener datos de una API
const obtenerDatosApi = async (endpoint) => {
    try {
        const respuesta = await generalApi.get(endpoint);
        return respuesta.data;
    } catch (error) {
        console.error(`Error al obtener datos de ${endpoint}:`, error);
    }
};

export const obtenerMinisteriosApi = () => obtenerDatosApi('ministerios/');
export const obtenerEventosApi = () => obtenerDatosApi('eventos/');
export const obtenerCursosApi = () => obtenerDatosApi('cursos/');
export const obtenerCuentasBancariasApi = () => obtenerDatosApi('cuentas-bancarias/');
