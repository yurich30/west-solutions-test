import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticle } from '../../types/IArticle';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2',
  }),
  endpoints: builder => ({
    getHeadlinesByCountry: builder.query<IArticle[], string>({
      query: country =>
        `/top-headlines?country=${country}&apiKey=add666dd928a4a11aa9c81c1718d7688`,
      transformResponse: (response: { articles: IArticle[] }) =>
        response.articles,
    }),
  }),
});

export const { useGetHeadlinesByCountryQuery } = newsApi;
