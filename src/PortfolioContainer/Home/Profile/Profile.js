import React from 'react';
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='profile-picture'>
            <div className='profile-picture-background'>
            </div>
          </div>
          <div className='collections'>
            <div className='collection-icon'>
              <a href='https://www.linkedin.com/in/nickbalan/'>
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a href='https://github.com/nickbalan/'>
                <i className='fa fa-github-square'></i>
              </a>
            </div>
            <div className='profile-details-name'>
              <span className='primary-text'>
                {' '}
                Hello, I'm <span className='highlight-text'>Nick Balan</span>
              </span>
            </div>
            <div className='profile-details-role'>
              <span className='primary-text'>
                {' '}
                <h1>
                  {' '}
                  <Typical
                    loop={Infinity}
                    steps={[
                      'Full Stack Developer',
                      1000,
                      'Full Stack Developer',
                      1000,
                      'MERN Stack Developer',
                      1000,
                      'React/React Native Developer',
                      1000,
                    ]}
                  />
                </h1>
                <span className='profile-role-tagline'>
                  Building applications, API with Front and Back End operation.
                </span>
              </span>
            </div>
            <div className='profile-options'>
              <button className='btn primary-btn'>
                {' '}
                Hire Me{' '}
              </button>
              <a href='cv/Nick_Balan_EN--Resume.pdf' download={'Resume_Nick_Balan_EN.pdf'}>
                <button className='btn highlighted-btn'>Get Resume EN</button>
              </a>
              <a href='cv/Nick_Balan_DE--Lebenslauf.pdf' download={'Lebenslauf_Nick_Balan_DE.pdf'}>
                <button className='btn highlighted-btn'>Get Resume DE</button>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
