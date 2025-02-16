import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => {
    async ({ url, method, data, params, headers }) => {
        try {
            const result = await axios({
                url: baseUrl + url,
                method,
                data,
                params,
                headers,
            });

            return { data: result.data };
        } catch(axiosError) {
            const err = axiosError;
            
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    }
}

export const repoApi = createApi({
    reducerPath: 'repoApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://api.github.com/' }),
    endpoints: (builder) => ({
        getRepos: builder.query({
            query: (searchQuery) => `search/repositories?q=${searchQuery}&sort=stars`,
        }),
    }),
});

export const { useGetReposQuery } = repoApi;