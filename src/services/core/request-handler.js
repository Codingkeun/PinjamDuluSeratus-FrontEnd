/* eslint-disable consistent-return */
import axios from 'axios';
import {useLoading} from 'vue-loading-overlay';

const $loading = useLoading({
    color: '#fff',
    zIndex: 99999999,
    backgroundColor: '#000',
});

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
        this.loader = null
    }

    get(endpoint, params, withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
            api.get(endpoint, {
                params: {
                    ...params,
                },
            })
                .then((response) => {
                    if (withLoader)
                        this.loader.hide();
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (withLoader)
                        this.loader.hide();
                    reject(error);
                });
        });
    }

    find(endpoint, param, withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
            api.get(`${endpoint}/${param}`)
                .then((response) => {
                    if (withLoader)
                        this.loader.hide();
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (withLoader)
                        this.loader.hide();
                    reject(error);
                });
        });
    }

    store(endpoint, body, withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
            this.api
                .post(endpoint, {
                    ...body,
                })
                .then((response) => {
                    if (withLoader)
                        this.loader.hide()
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (withLoader)
                        this.loader.hide()
                    reject(error);
                });
        });
    }

    saveCustomHeader(endpoint, body, withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
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
                    if (withLoader)
                        this.loader.hide();
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (withLoader)
                        this.loader.hide();
                    reject(error);
                });
        });
    }

    update(endpoint, id, body, withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
            this.api
                .put(`${endpoint}/${id}`, {
                    ...body,
                })
                .then((response) => {
                    if (withLoader)
                        this.loader.hide();
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (withLoader)
                        this.loader.hide();
                    reject(error);
                });
        });
    }

    delete(endpoint, id, withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
            this.api
                .delete(`${endpoint}/${id}`)
                .then((response) => {
                    if (withLoader)
                        this.loader.hide();
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (withLoader)
                        this.loader.hide();
                    reject(error);
                });
        });
    }

    bulkDelete(endpoint, params, withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
            this.api
                .delete(`${endpoint}/bulk-delete`, {
                    data: {
                        ...params,
                    },
                })
                .then((response) => {
                    if (withLoader)
                        this.loader.hide();
                    if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (withLoader)
                        this.loader.hide();
                    reject(error);
                });
        });
    }

    downloadExcel(endpoint, params, uri='excel/download', fileName='file-download', withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
            this.api
                .get(`${endpoint}/${uri}`, {
                    method: 'GET',
                    responseType: 'blob',
                    params: {
                        ...params,
                    },
                })
                .then((response) => {
                    if (withLoader)
                        this.loader.hide();
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
                    if (withLoader)
                        this.loader.hide();
                    reject(error);
                });
        });
    }

    downloadPDF(endpoint, params, uri='', filename = 'print', withLoader=true) {
        return new Promise((resolve, reject) => {
            if (withLoader)
                this.loader = $loading.show();
            this.api
                .get(`${endpoint}/${uri}`, {
                    method: 'GET',
                    responseType: 'blob',
                    params: {
                        ...params,
                    },
                })
                .then((response) => {
                    if (withLoader)
                        this.loader.hide();
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
                    if (withLoader)
                        this.loader.hide();
                    reject(error);
                });
        });
    }

    postWithUpload(endpoint, body, withLoader=true) {
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

            if (withLoader)
                this.loader = $loading.show();
            this.api.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                if (withLoader)
                    this.loader.hide();
                if (response.statusText.toLowerCase() === 'ok' || response.status === 200) {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            })
            .catch((error) => {
                if (withLoader)
                    this.loader.hide();
                reject(error);
            });
        });
    }
}
