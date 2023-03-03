/* eslint-disable no-unused-vars */
import { useCallback } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import DecoupledDocumentEditor from 'ckeditor5-custom-build'

import './RichTextEditor.scss'

import useOnClickOutside from '@/hooks/useOnClickOutside'
import useDebounce from '@/hooks/useDebounce'
import editorConfig from './editorConfig'

// const editorConfiguration = { toolbar: [ 'bold', 'italic' ] }

const RichTextEditor = ( { value, save, onBlur } ) => {
  const handleBlur = useCallback( () => {
    document.getElementById( 'toolbar' ).innerHTML = ''
    onBlur()
  }, [] )

  const ref = useOnClickOutside( handleBlur, { forRichText: true } )

  const x = useCallback(
    ( data ) => save( data ),
    [],
  )

  const debouncedSave = useDebounce( x )

  return (
    <div className='rich-text-edtior' ref={ ref }>
      <CKEditor
        editor={ DecoupledDocumentEditor }
        config={ editorConfig }
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

          debouncedSave( data )
        } }
      />
    </div>
  )
}

export default RichTextEditor
