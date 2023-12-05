/* eslint-disable consistent-return */
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_ENDPOINT,
    timeout: 30000,
    headers: { Authorization: `Bearer ${localStorage.token_finance}` },
});

// Add a request interceptor
api.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // if (error?.response?.status === 401) {
        //     window.location.replace(process.env.VUE_APP_LOGIN_REDIRECT_URL);
        // }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default class RequestHandler {
    constructor() {
        this.api = api;
        this.fileName = "ApiService";
    }

    get(endpoint, params, uri=null) {
        return new Promise((resolve, reject) => {
            let baseUrl = uri ? `${endpoint}/${uri}` : endpoint
            api.get(baseUrl, {
                params: {
                    ...params,
                },
            })
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    find(endpoint, param) {
        return new Promise((resolve, reject) => {
            api.get(`${endpoint}/${param}`)
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    store(endpoint, body, uri='') {
        return new Promise((resolve, reject) => {
            this.api
                .post(uri ? `${endpoint}/${uri}` : endpoint, {
                    ...body,
                })
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    saveCustomHeader(endpoint, body) {
        return new Promise((resolve, reject) => {
            this.api
                .post(`${endpoint}`, {
                    ...body,
                },
                {
                    headers: {
                        'Authorization': localStorage.token_finance
                    }
                })
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    update(endpoint, id, body) {
        return new Promise((resolve, reject) => {
            this.api
                .put(`${endpoint}/${id}`, {
                    ...body,
                })
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    delete(endpoint, id) {
        return new Promise((resolve, reject) => {
            this.api
                .delete(`${endpoint}/${id}`)
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    bulkDelete(endpoint, params) {
        return new Promise((resolve, reject) => {
            this.api
                .delete(`${endpoint}/bulk-delete`, {
                    data: {
                        ...params,
                    },
                })
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    downloadExcel(endpoint, params, uri='excel/download', fileName='file-download') {
        return new Promise((resolve, reject) => {
            this.api
                .get(`${endpoint}/${uri}`, {
                    method: 'GET',
                    responseType: 'blob',
                    params: {
                        ...params,
                    },
                })
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/octet-stream' }));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', `${fileName}.xlsx`);
                        document.body.appendChild(link);
                        link.click();
                        resolve(response.data);
                    } else reject(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    downloadPDF(endpoint, params, uri='', filename = 'print') {
        return new Promise((resolve, reject) => {
            this.api
                .get(`${endpoint}/${uri}`, {
                    method: 'GET',
                    responseType: 'blob',
                    params: {
                        ...params,
                    },
                })
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', `${filename}.pdf`);
                        document.body.appendChild(link);
                        link.click();
                        resolve(response.data);
                    } else reject(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    postWithUpload(endpoint, body, uri='save') {
        return new Promise((resolve, reject) => {
            let formData = new FormData();

            this.form = body;
            for (var index in this.form) {
                if (this.form[index] instanceof Array) {
                    formData.append(index, JSON.stringify(this.form[index]));
                } else {
                    formData.append(index, this.form[index]);
                }
            }

            this.api.post(`${endpoint}/${uri}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    syncLms(endpoint) {
        return new Promise((resolve, reject) => {
            this.api
                .post(`${endpoint}/sync-lms`)
                .then((response) => {
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data)
                    } else {
                        reject(response)
                    }
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}
