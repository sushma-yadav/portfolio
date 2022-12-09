import React from 'react'
import Icons from '../common/Icons'
import './HeroBanner.css'
import heroImage from '../../assests/image/hero-image.png'

export default function HeroBanner() {
    return (
        <div className='hero'>
            <div className='hero_section'>
                <div className='content'>
                    <div className='content_left'>
                        <div className='social_icon'>
                            <Icons />
                        </div>
                    </div>
                    <div className='content_right'>
                    </div>
                </div>
            </div>
        </div>

    )
}
