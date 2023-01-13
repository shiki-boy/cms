import classNames from 'classnames'

import './Button.scss'

import TooltipEdit from '../TooltipEdit'
import useWebsiteStore from '@/store/website'

const Button = ( { isEditable = false, btnType } ) => {
  const button = useWebsiteStore( ( state ) => state[btnType] )

  const changeButton = useWebsiteStore( ( state ) => state.changeButton )

  return (
    <>
      <button
        className={ classNames( 'button', { editable: isEditable } ) }
        style={ {
          ['--bg-color']: button.bgColor,
          ['--btn-color']: button.textColor,
        } }
      >
        Green
        {isEditable && (
          <TooltipEdit
            changeBg={ ( bgColor ) =>
              changeButton( {
                [btnType]: {
                  ...button,
                  bgColor,
                },
              } )
            }
            changeText={ ( textColor ) => {
              changeButton( {
                [btnType]: {
                  ...button,
                  textColor,
                },
              } )
            } }
          />
        )}
      </button>
    </>
  )
}

export default Button
