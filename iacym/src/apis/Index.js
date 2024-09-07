import axios from "axios";

const fetchBaseUrl = async () => {
  try {
    const response = await axios.get("/config/config_json.json");
    return response.data.back_url;
  } catch (error) {
    console.error("Error al obtener el archivo JSON:", error);
    throw error;
  }
};

const createApiInstance = async () => {
  const baseURL = await fetchBaseUrl();
  const instance = axios.create({
    baseURL: `${baseURL}/api/v2/`,
  });

  return instance;
};

const createMediaApiInstance = async () => {
  const baseURL = await fetchBaseUrl();
  const instance = axios.create({
    baseURL: `${baseURL}`,
  });

  return instance;
};



// Inicializar las instancias de Axios y exportarlas
const initializeApis = async () => {
  const generalApi = await createApiInstance();
  const generalMediaApi = await createMediaApiInstance();
  
  return {
    generalApi,
    generalMediaApi
  };
};

let apisPromise = initializeApis();

// Exportar las instancias de Axios
// let apis;
// initializeApis().then(initializedApis => {
//   apis = initializedApis;
// });

// export const generalApi = () => apis.generalApi;
// export const generalMediaApi = () => apis.generalMediaApi;


export const getGeneralApi = async () => {
  const apis = await apisPromise;
  return apis.generalApi;
};

// Función para obtener la instancia de generalMediaApi
export const getGeneralMediaApi = async () => {
  const apis = await apisPromise;
  return apis.generalMediaApi;
};