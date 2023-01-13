import classNames from 'classnames'
import { useState } from 'react'

import './Button.scss'

import TooltipEdit from '../TooltipEdit'

const Button = ( { value, isEditable = false } ) => {
  const [ data, setData ] = useState( value )

  return (
    <>
      <button
        className={ classNames( 'button', { editable: isEditable } ) }
        style={ {
          ['--bg-color']: data.bgColor,
          ['--btn-color']: data.textColor,
        } }
      >
        Green
        {isEditable && (
          <TooltipEdit
            changeBg={ ( bgColor ) =>
              setData( ( old ) => ( {
                ...old,
                bgColor,
              } ) )
            }
            changeText={ ( textColor ) =>
              setData( ( old ) => ( {
                ...old,
                textColor,
              } ) )
            }
          />
        )}
      </button>
    </>
  )
}

export default Button
