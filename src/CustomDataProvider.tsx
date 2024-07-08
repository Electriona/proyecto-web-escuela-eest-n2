import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import axios from 'axios';

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: async (resource:string, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const response = await axios.get(url);
        const data = await response.data;
        return {
            data: data,
            total: 10,
        };
    },

    getOne: async (resource:string, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`
        const response = await axios.get(url);
        return { data: response.data};
    },

    getMany: async (resource:string, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const response = await axios.get(url);
        return { data: response.data};
    },

    getManyReference: async (resource:string, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const response = await axios.get(url);
        return {
            data: response.data,
            total: 10,
        };
    },

    create: async (resource:string, params) => {
        const response = await axios.post(`${apiUrl}/${resource}`, JSON.stringify(params.data));
        return { data: response.data };
    },

    update: async (resource:string, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const response = await axios.put(url, JSON.stringify(params.data));
        return { data: response.data};
    },

    updateMany: async (resource:string, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const response = await axios.put(url, JSON.stringify(params.data));
        return { data: response.data};
    },

    delete: async (resource:string, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const response = await axios.delete(url);
        return { data: response.data};
    },

    deleteMany: async (resource:string, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const response = await axios.delete(url);
        return { data: response.data};
    },
};