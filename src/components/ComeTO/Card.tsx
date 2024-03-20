import React from 'react'

const Card = ({ card, index }: any) => {
    return (
        <div key={index} className='w-[340px] gray_background rounded-lg flex flex-col gap-4'>
            <div className="p-8">
                <h3 className='text-xl font-semibold'>{card.Title}</h3>
                <p className="secondary-text">
                    {card.description}
                </p>
            </div>
            <img src={card.image} alt="CardImage" />
        </div>
    )
}

export default Card
