import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTSANTS = {
    description: 'Full Stack Developer description ...',
    heighlights: {
      bullets: [
        'Full Stack Development',
        'React and React Native',
        '...'
      ],
      heading: 'Few heighlights:'
    }
  }
  return (
    <div className='about-me-container screen-container' id={props.id || ''}>
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me'} />
      </div>
    </div>
  )
}
