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

  changeHeadline: async ( payloadData ) => {
    try {
      await httpClient( {
        url: 'http://localhost:9000/candidate',
        method: 'patch',
        data: { headline: payloadData },
      } )

      return set( () => ( { headline: payloadData } ) )
    } catch ( error ) {
      console.log( error )
    }
  },

  changeDescription: async ( payloadData ) => {
    try {
      await httpClient( {
        url: 'http://localhost:9000/candidate',
        method: 'patch',
        data: { description: payloadData },
      } )

      return set( () => ( { description: payloadData } ) )
    } catch ( error ) {
      console.log( error )
    }
  },

  changeButton: async ( payloadData ) => {
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
