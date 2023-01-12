/* eslint-disable no-unused-vars */
import { useCallback } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'

import './RichTextEditor.scss'

import useOnClickOutside from '@/hooks/useOnClickOutside'

// const editorConfiguration = { toolbar: [ 'bold', 'italic' ] }

const RichTextEditor = ( { value, save, onBlur } ) => {
  const handleBlur = useCallback( () => {
    document.getElementById( 'toolbar' ).innerHTML = ''
    onBlur()
  }, [] )

  const ref = useOnClickOutside( handleBlur, { forRichText: true } )

  return (
    <div className='rich-text-edtior' ref={ ref }>
      <CKEditor
        editor={ DecoupledEditor }
        // config={ editorConfiguration }
        data={ value }
        onReady={ ( editor ) => {
          // Insert the toolbar before the editable area.
          document.getElementById( 'toolbar' ).innerHTML = ''

          document
            .getElementById( 'toolbar' )
            .appendChild( editor.ui.view.toolbar.element )

          setTimeout( () => {
            editor.focus()
          }, 50 )
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData()

          save( data )
        } }
      />
    </div>
  )
}

export default RichTextEditor
