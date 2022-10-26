import React from 'react'
import Prices from '../containers/PricingCard/price'
import './price.css'

const Price = () => {
    return (
        <div id = 'pricings'>
            <h1 className='gradient__text section__padding '>
                Pricings
            </h1>
            <div className="flex">
                <div className='flex__A'>
                    <Prices href = "#"
                    photo_icon = 'https://i.pinimg.com/564x/5a/c6/e4/5ac6e45ceb2dacb144f7e1f058dd4e7c.jpg'/>
                </div>
                <div className='flex__B'>
                    <Prices href = "#"
                    photo_icon = 'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg'/>
                </div>
                <div className='flex__C'>
                    <Prices href = "#"
                    photo_icon = 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Price