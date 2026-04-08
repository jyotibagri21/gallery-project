import React from 'react'

const Card = ({el}) => {
  return (
     
      <a href={el.url} target='_blank'>
        <div className='h-50 w-50 bg-amber-50 cursor-pointer hover:scale-105 rounded-2xl overflow-hidden'>
          <img src={el.download_url} alt="image not found" className='object-cover h-full w-full' />
        </div>
        <div>
          <h2 className='font-serif font-semibold h-7 overflow-hidden'>{el.author}</h2>
        </div>
      </a>
   
  )
}

export default Card