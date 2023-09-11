import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const StarRating = () => {

    const [ratingValue, setRatingValue] = useState(1)
  
  const handleRating = (rate) => {
    setRatingValue(rate)

  return (
    <Rating fillIcon={<MdFavorite size={50} />} />
   
  )
}
}
export default StarRating;