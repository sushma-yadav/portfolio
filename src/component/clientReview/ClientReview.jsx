import React from 'react'
import './ClientReview.css'
import Reviews from './Reviews'

export default function ClientReview() {
    return (
        <div className='clientReview'>
            <h1 className='Heading'>Some Client Reviews.</h1>
            <div className='client_review_grid'>
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
            </div>
        </div>
    )
}
