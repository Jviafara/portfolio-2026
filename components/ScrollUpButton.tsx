'use client'

import { CiSquareChevUp } from 'react-icons/ci'

const ScrollUpButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0, // Distance from the top of the page in pixels
      left: 0, // Distance from the left of the page in pixels
      behavior: 'smooth', // Triggers the animated scrolling effect
    })
  }
  return (
    <button
      className='sticky bottom-[5%] left-full mr-4 lg:mr-0 lg:left-[95%] w-fit'
      onClick={handleClick}
    >
      <CiSquareChevUp
        size={48}
        className='text-primary cursor-pointer hover:text-primary-hover hover:scale-110 hover:-translate-y-2'
      />
    </button>
  )
}

export default ScrollUpButton
