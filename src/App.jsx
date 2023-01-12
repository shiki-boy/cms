import './App.css'

import Navbar from '@/components/Navbar'
import Headline from '@/components/Headline'
import Button from './components/Button'

// const data = { headline: 'Headline' }

function App() {
  return (
    <div>
      <Navbar />

      <Headline />

      <Headline />

      <Button
        value={ {
          bgColor: '#4CAF50',
          textColor: 'black',
        } }
      />

      <Button
        value={ {
          bgColor: 'coral',
          textColor: 'white',
        } }
        isEditable
      />
    </div>
  )
}

export default App
