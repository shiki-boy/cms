import { useState } from 'react'

import './Headline.scss'

import RichTextEditor from '../RichTextEditor'
import useWebsiteStore from '@/store/website'

const Headline = () => {
  const headline = useWebsiteStore( ( state ) => state.headline )

  const changeWebsiteData = useWebsiteStore( ( state ) => state.changeWebsiteData )

  const [ isEditing, setIsEditing ] = useState( false )

  return (
    <>
      {!isEditing && (
        <div
          className='text ck-content'
          onClick={ () => setIsEditing( true ) }
          dangerouslySetInnerHTML={ { __html: headline } }
        ></div>
      )}

      {isEditing && (
        <RichTextEditor
          value={ headline }
          save={ ( data ) => changeWebsiteData( { headline: data } ) }
          onBlur={ () => setIsEditing( false ) }
        />
      )}
    </>
  )
}

export default Headline
