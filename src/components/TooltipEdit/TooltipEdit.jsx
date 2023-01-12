import { useState } from 'react'

import './TooltipEdit.scss'

import EditIcon from '@/assets/edit.svg?component'

const TooltipEdit = ( { changeBg, changeText } ) => {
  const [ openEdit, setOpenEdit ] = useState( false )

  return (
    <div className='tooltip-edit'>
      <EditIcon onClick={ () => setOpenEdit( ( old ) => !old ) } />

      {openEdit && (
        <div className='popup'>
          <form>
            <div className='row'>
              <p>Bg Color:</p>
              <input
                type='radio'
                name='bgColor'
                id='primary'
                value='#4CAF50'
                onChange={ ( { target } ) => changeBg( target.value ) }
              />
              <label htmlFor='primary'>Primary: Green</label>

              <input
                type='radio'
                name='bgColor'
                id='secondary'
                value='coral'
                onChange={ ( { target } ) => changeBg( target.value ) }
              />
              <label htmlFor='secondary'>secondary: Coral</label>
            </div>

            <div className='row'>
              <p>Text Color:</p>
              <input
                type='radio'
                name='textColor'
                id='white'
                value='white'
                onChange={ ( { target } ) => changeText( target.value ) }
              />
              <label htmlFor='white'>white</label>

              <input
                onChange={ ( { target } ) => changeText( target.value ) }
                type='radio'
                name='textColor'
                id='black'
                value='black'
              />
              <label htmlFor='black'>black</label>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default TooltipEdit