import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { baseUrl } from '../../utils/requests'
import styles from './Slider.module.scss'
import 'swiper/scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { useNavigate } from 'react-router-dom'
import { getId } from '../../redux/slices/movieIdSlice'
import { fetchRatedMovies } from '../../redux/slices/movieSlice'

const SlideRated = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const movies = useAppSelector(state => state.movies.ratedMovies)

    useEffect(() => {
        dispatch(fetchRatedMovies())
    }, [dispatch])


    const getOneMovie = async(id:number) => {
        dispatch(getId(id))
        navigate(`movie/${id}`)
    }

  return (
    <div className={styles.slider}>
        <Swiper
                grabCursor={false}
                spaceBetween={60}
                slidesPerView={5}
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
                            <div className={styles.slider_rated_item} onClick={() => getOneMovie(movie.id)}>
                                <img src={baseUrl+movie.poster_path} alt={movie.title} />
                            </div>
                        )}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default SlideRated