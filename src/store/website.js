/* eslint-disable sort-keys */
import httpClient from '@/hooks/useApi/httpClient'
import { create } from 'zustand'

const useWebsiteStore = create( ( set ) => ( {
  button1: {
    bgColor: '',
    textColor: '',
  },
  button2: {
    bgColor: '',
    textColor: '',
  },
  description: '',
  headline: '',

  init: ( data ) => set( () => data ),

  changeWebsiteData: async ( payloadData ) => {
    try {
      await httpClient( {
        url: 'http://localhost:9000/candidate',
        method: 'patch',
        data: payloadData,
      } )

      return set( () => ( payloadData ) )
    } catch ( error ) {
      console.log( error )
    }
  },
} ) )

export default useWebsiteStore
