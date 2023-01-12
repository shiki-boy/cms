import classNames from 'classnames'
import { useState } from 'react'
import TooltipEdit from '../TooltipEdit'

import './Button.scss'

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
            changeBg={ ( color ) =>
              setData( ( old ) => ( {
                ...old,
                bgColor: color,
              } ) )
            }
            changeText={ ( color ) =>
              setData( ( old ) => ( {
                ...old,
                textColor: color,
              } ) )
            }
          />
        )}
      </button>
    </>
  )
}

export default Button
