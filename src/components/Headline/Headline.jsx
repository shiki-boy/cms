import { useState } from 'react'

import './Headline.scss'

import RichTextEditor from '../RichTextEditor'
import useWebsiteStore from '@/store/website'

const Headline = () => {
  const headline = useWebsiteStore( ( state ) => state.headline )

  const changeHeadline = useWebsiteStore( ( state ) => state.changeHeadline )

  const [ isEditing, setIsEditing ] = useState( false )

  // const [ value, setValue ] = useState( headline )

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
          save={ changeHeadline }
          onBlur={ () => setIsEditing( false ) }
        />
      )}
    </>
  )
}

export default Headline
