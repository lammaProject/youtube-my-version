import axios from "axios";

export const http = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/`,
});

// http.interceptors.request.use(
//   (config) => {
//     if (config.url === "/auth/login") {
//       config.headers.Authorization = "";
//       return config;
//     }
//     config.headers.Authorization = `Bearer qerklqer`;
//     return config;
//   },
//   (error) => {
//     console.log("ERROR CONFIG");
//     return Promise.reject(error);
//   },
// );
http.interceptors.response.use(
  (response) => {
    console.log(response, "response");
    return response;
  },
  (error) => {
    console.log(error, "ERROR RESPONSE");
    if (error.code === "ERR_NETWORK") {
      alert("Ошибка подключения");
    }

    if (error.response.status === 401) {
      console.log(`Ошибка аутентификации`);
    }
    console.log(`Ошибка ${error.response.status}`);
    // store.dispatch(
    //   addErrors({
    //     code: error.response.status,
    //     message: error.response.data.message,
    //   }),
    // );
    return Promise.reject(error);
  },
);
