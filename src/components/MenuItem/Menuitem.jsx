import React from 'react'
import './Menuitem.css';

const Menuitem = ({ title, price, tags }) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-head'>
        <div className='app__menuitem-name'>
          <div className='p__cormorant' style={{color: '#DCCA87'}}>
            {title}
          </div>
        </div>

        <div className='app__menuitem-dash' />

        <div className='app__menuitem-price'>
          <div className='p__cormorant'>
            {price}
          </div>
        </div>
      </div>
      <div className='app__menuitem-sub'>
        <p className='p__opensans' style={{color: '#AAA'}}>{tags}</p>
      </div>
    </div>
  )
}

export default Menuitem