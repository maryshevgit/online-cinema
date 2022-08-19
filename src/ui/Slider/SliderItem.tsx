import React from 'react'
import { IMovie } from '../../types'
import { baseUrl } from '../../utils/requests'
import styles from './Slider.module.scss'
import { AiOutlineStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { getId } from '../../redux/slices/movieIdSlice';
import { useNavigate } from 'react-router-dom';


interface Props {
    movie: IMovie
}

const SliderItem = ({movie}: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const movie_id = useAppSelector(state => state.movie.id)

    const background = baseUrl+((movie.backdrop_path ? movie.backdrop_path : movie.poster_path))

    const getOneMovie = async(id:number) => {
        dispatch(getId(id))
        navigate(`movie/${movie_id}`)
    }

    return (
        <div className={styles.slider__item}>
            <div className={styles.slider__item_background} style={{backgroundImage: `url(${background})`}}></div>
            <div className={styles.slider__item_body}>
                <div className={styles.slider__item_img}>
                    <img src={baseUrl+movie.poster_path || baseUrl+movie.backdrop_path} alt={movie.title} />
                </div>
                <div className={styles.slider__item_info}> 
                    <div className={styles.slider__item_info_rating}>
                        <AiOutlineStar />
                        {(movie.vote_average).toFixed(1)}
                    </div>
                    <div className={styles.slider__item_info_title}>
                        {movie.title || movie.name}
                        <button className={styles.button} onClick={() => getOneMovie(movie.id)}>
                            Watch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem