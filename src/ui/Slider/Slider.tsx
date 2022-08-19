import React, { useEffect } from 'react'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss'
import 'swiper/scss';
import SliderItem from './SliderItem';
import 'swiper/css/autoplay'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { fetchTrendingMovies } from '../../redux/slices/movieSlice';

const Slider = () => {
    const dispatch = useAppDispatch()
    const movies = useAppSelector(state => state.movies.trendingMovies)

    useEffect(() => {
        dispatch(fetchTrendingMovies(4))
    }, [dispatch])

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
            {movies &&
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



    