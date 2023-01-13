import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react'

import './App.css'

import Navbar from '@/components/Navbar'
import Headline from '@/components/Headline'
import Button from './components/Button'
import Description from '@/components/Description'
import useApi from '@/hooks/useApi'
import useWebsiteStore from '@/store/website'

// const data = { headline: 'Headline' }

function App() {
  const queryClient = new QueryClient( { defaultOptions: { queries: { refetchOnWindowFocus: false } } } )

  return (
    <QueryClientProvider client={ queryClient }>
      <Page />
    </QueryClientProvider>
  )
}

export default App

const Page = () => {
  const initStore = useWebsiteStore( ( state ) => state.init )

  const { data, isLoading } = useApi( 'get', 'http://localhost:9000/candidate' )

  useEffect( () => {
    if ( data ) {
      initStore( data )
    }
  }, [ data ] )

  if ( isLoading ) {
    return 'Loading...'
  }

  return(
    <>
      <Navbar />

      <Headline />

      <Description />

      <Button
        value={ {
          bgColor: '#4CAF50',
          textColor: 'black',
        } }
        btnType='button1'
        isEditable
      />

      <Button
        value={ {
          bgColor: 'coral',
          textColor: 'white',
        } }
        btnType='button2'
        isEditable
      />
    </>
  )
}
