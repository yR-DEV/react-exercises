import React from 'react';
import axios from 'axios';

const useGetApi = () => {
    const getApi = (resource, id) => {
        return axios.get(`https://jsonplaceholder.typicode.com/${resource}${(id) ? `/${id}` : ''}`)
    }
    return getApi;
}

export default useGetApi;