import React from 'react'
import Icons from '../common/Icons'
import './ContactMe.css'

export default function ContactMe() {
    return (
        <>
            <div className='contact_section'>
                <div className='contact_section_heading'>
                    <h1>Contact Me.</h1>
                </div>
                <div className='contact'>
                    <div className='contact_form'>
                        <form action="">
                            <div className='input_field'>
                                <p>Name</p>
                                <input type="text" />
                            </div>
                            <div className='input_field'>
                                <p>Email</p>
                                <input type="email" />
                            </div>
                            <div className='input_field'>
                                <p>Message</p>
                                <textarea type="text" />
                            </div>
                            <div className='form_btn'>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='contact_info'>
                        <div className='contact_info_wrapper'>
                            <div className='contact_icon'>
                                <i class="bi bi-telephone-fill"></i><span>+91-8384095798</span>
                            </div>
                            <div className='contact_icon'>
                                <i class="bi bi-envelope"></i><span>sushmay097@gmail.com</span>
                            </div>
                            <div className='contact_info_icon'>
                                <Icons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
