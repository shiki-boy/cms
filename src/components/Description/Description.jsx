import { useState } from 'react'

import './Description.scss'

import RichTextEditor from '../RichTextEditor'
import useWebsiteStore from '@/store/website'

const Description = () => {
  const description = useWebsiteStore( ( state ) => state.description )
  const changeWebsiteData = useWebsiteStore( ( state ) => state.changeWebsiteData )

  const [ isEditing, setIsEditing ] = useState( false )

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
          save={ ( data ) => changeWebsiteData( { description: data } ) }
          onBlur={ () => setIsEditing( false ) }
        />
      )}
    </>
  )
}

export default Description
