import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ServerResponse } from '../../models/address'

const token = "ac739e6a2678bdf495752ef8dbabd726dc11c8e3"

export const dadataApi = createApi({
  reducerPath: 'dadata/api',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/"
  }),
  endpoints: build => ({
    searchAddress: build.query<ServerResponse, string>({
      query: (search: string) => ({
        url: 'address',
        headers: {Authorization: "Token " + token},
        params: {
          query: search,
          count: 20
        }
      })
    })
   
  })
})

export const {useLazySearchAddressQuery} = dadataApi

