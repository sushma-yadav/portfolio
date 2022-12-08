import React from 'react'
import Icons from '../Icons'
import './ContactMe.css'

export default function ContactMe() {
    return (
        <div className='contactMe'>
            <h1 className='Heading'>Contact Me.</h1>
            <div className='contact_info_section'>
                <div class="form">
                    <form action="">
                        <div class="input_field">
                            <p>Name</p><input type="text" />
                        </div>
                        <div class="input_field">
                            <p>Email</p>
                            <input type="email" /></div>
                        <div class="input_field">
                            <p>Message</p>
                            <textarea class="message"></textarea>
                        </div>
                        <div class="form-btn">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='contact_info'>
                    <div className='contact_detail'>
                        <div className='icon'>
                            <i class="bi bi-telephone-fill"></i>
                            <p>91 8384095798</p>
                        </div>
                        <div className='icon'>
                            <i class="bi bi-envelope"></i>
                            <p>sushmay097@gmail.com</p>
                        </div>
                    </div>

                    <Icons />
                </div>
            </div>
        </div>
    )
}
