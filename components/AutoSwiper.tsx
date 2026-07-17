import { Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

export interface AutoSwiperProps {
  children: React.ReactNode
}

const AutoSwiper = ({ children }: AutoSwiperProps) => {
  return (
    <div className='flex w-full '>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        centeredSlidesBounds={true}
        slidesPerView={'auto'}
        spaceBetween={15}
        modules={[Pagination]}
        style={{ padding: '20px 0 40px 0' }}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default AutoSwiper
