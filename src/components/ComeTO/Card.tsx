import React from 'react'

const Card = ({ card, index }: any) => {
    return (
        <div key={index} className='w-[340px] gray_background p-8 rounded-lg'>
            <h3 className='text-xl font-semibold'>{card.Title}</h3>
            <div className="secondary-text">
                {card.description}
            </div>
        </div>
    )
}

export default Card
