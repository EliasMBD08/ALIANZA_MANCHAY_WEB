import { getGeneralApi } from "./Index.js";

// Función genérica para obtener datos de una API
const obtenerDatosApi = async (endpoint) => {
    if (!getGeneralApi) {
        console.error("generalApi no está disponible.");
        return;
    }

    try {
        const api = await getGeneralApi();
        const respuesta = await api.get(endpoint);
        return respuesta.data;
    } catch (error) {
        console.error(`Error al obtener datos de ${endpoint}:`, error);
    }
};

export const obtenerMinisteriosApi = () => obtenerDatosApi('ministerios/');
export const obtenerEventosApi = () => obtenerDatosApi('eventos/');
export const obtenerCursosApi = () => obtenerDatosApi('cursos/');
export const obtenerCuentasBancariasApi = () => obtenerDatosApi('cuentas-bancarias/');
