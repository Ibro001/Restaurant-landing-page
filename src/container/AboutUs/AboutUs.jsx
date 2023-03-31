import React from 'react'
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="G_img" />
      </div>
      
      <div className='app__aboutus-contents flex__center'>
        
        <div className='app__aboutus-contents_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quis pharetra adipiscing ultrices vulputate posuere tristique. 
            In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-contents_knife flex__center'>
          <img src={images.knife} alt="knife_img" />
        </div>

        <div className='app__aboutus-contents_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quis pharetra adipiscing ultrices vulputate posuere tristique. 
            In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default AboutUs