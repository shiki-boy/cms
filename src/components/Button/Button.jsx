import classNames from 'classnames'

import './Button.scss'

import TooltipEdit from '../TooltipEdit'
import useWebsiteStore from '@/store/website'

const Button = ( { isEditable = false, btnType } ) => {
  const button = useWebsiteStore( ( state ) => state[btnType] )

  const changeWebsiteData = useWebsiteStore( ( state ) => state.changeWebsiteData )

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
              changeWebsiteData( {
                [btnType]: {
                  ...button,
                  bgColor,
                },
              } )
            }
            changeText={ ( textColor ) => {
              changeWebsiteData( {
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
