import { useState } from 'react'

import './Description.scss'

import RichTextEditor from '../RichTextEditor'
import useWebsiteStore from '@/store/website'

const Description = () => {
  const description = useWebsiteStore( ( state ) => state.description )
  const changeDescription = useWebsiteStore( ( state ) => state.changeDescription )

  const [ isEditing, setIsEditing ] = useState( false )

  // const [ value, setValue ] = useState( headline )
  return (
    <>
      {!isEditing && (
        <div
          className='text ck-content'
          onClick={ () => setIsEditing( true ) }
          dangerouslySetInnerHTML={ { __html: description } }
        ></div>
      )}

      {isEditing && (
        <RichTextEditor
          value={ description }
          save={ changeDescription }
          onBlur={ () => setIsEditing( false ) }
        />
      )}
    </>
  )
}

export default Description
