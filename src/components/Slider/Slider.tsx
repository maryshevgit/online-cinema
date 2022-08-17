import React from 'react'
import { IMovie } from '../../types'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss'
import 'swiper/scss';
import SliderItem from './SliderItem';
import 'swiper/css/autoplay'

interface Props {
    movies: IMovie[]
}

const Slider = ({movies}: Props) => {
    SwiperCore.use([Autoplay]);

  return (
    <div className={styles.slider}>
        <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1.5}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
            {
                movies.map((movie, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <div >
                                <SliderItem movie={movie} />
                            </div>
                        )}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default Slider



    