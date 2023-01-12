import { useState } from 'react'

import './Headline.scss'

import RichTextEditor from '../RichTextEditor'

const Headline = () => {
  const [ isEditing, setIsEditing ] = useState( false )

  const [ value, setValue ] = useState( '<p>Hello from CKEditor 5!</p>' )

  return (
    <>
      {!isEditing && (
        <div
          className='text ck-content'
          onClick={ () => setIsEditing( true ) }
          dangerouslySetInnerHTML={ { __html: value } }
        ></div>
      )}

      {isEditing && (
        <RichTextEditor
          value={ value }
          save={ setValue }
          onBlur={ () => setIsEditing( false ) }
        />
      )}
    </>
  )
}

export default Headline
