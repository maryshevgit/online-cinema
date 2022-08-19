import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { baseUrl } from '../../utils/requests'
import styles from './MoviePage.module.scss'
import {ReactComponent as Circle} from '../../assets/circle.svg'
import { BsListUl } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { runtimeOfMovie } from '../../utils/runtimeOfMovie'
import { fetchMoviePage } from '../../redux/slices/movieSlice'

const MoviePage = () => {
    const dispatch = useAppDispatch()

    const movie_id = useAppSelector(state => state.movie.id)
    const movie = useAppSelector(state => state.movies.movie)

    useEffect(() => {
        dispatch(fetchMoviePage(movie_id))
    }, [dispatch, movie_id])
    

    const background = baseUrl+((movie?.backdrop_path ? movie?.backdrop_path : movie?.poster_path))
    const vote = movie && Math.floor(movie?.vote_average * 10)

  return (
    <div className={styles.movie}>
        <div className={styles.movie__back} style={{backgroundImage: `url(${background})`}}></div>
        <div className={styles.movie__body}>
            <div className={styles.movie__img}>
                <img src={baseUrl+movie?.poster_path} alt="" />
            </div>
            <div className={styles.movie__info}>
                <div className={styles.movie__info_title}>
                    {movie?.title}
                </div>
                <div className={styles.movie__info_desc}>
                    {movie?.adult ? 
                        <div className={styles.info__desc_adult}>
                            PG-13
                        </div>
                        :
                        <div className={styles.info__desc_adult}>
                            NC-17
                        </div>
                    }
                    <div className={styles.info__desc_date}>
                        {movie?.release_date} ({movie?.original_language?.toUpperCase()})
                    </div>
                    <div className={styles.dot}></div>
                    <div className={styles.movie__info_trailer}>
                        <FaPlayCircle />
                        Play Trailer
                    </div>
                    <div className={styles.info__desc_genres}>
                        {movie?.genres?.map((genre, idx) =>
                            <div key={genre.id}>
                                {idx > 0 && ", "}{genre.name.toLowerCase()} 
                            </div>
                        )}
                    </div>
                    {movie?.genres?.length !== 1 && <div className={styles.dot}></div>}
                    <div className={styles.movie__info_runtime}>
                        {movie && runtimeOfMovie(movie)}
                    </div>
                </div>
                <div className={styles.movie__info_navigation}>
                    <div className={styles.movie__info_vote}>
                        <div className={styles.outer}>
                            <div className={styles.inner}>
                                <div id={styles.number}>
                                    {vote}%
                                </div>
                            </div>
                        </div>
                        {vote && 
                            <Circle className={styles.circle} style={{strokeDasharray:  216 - (216- (216 * (vote / 100)))}} />
                        }
                    </div>
                    <div className={styles.movie__info_vote_users}>
                        user score
                    </div>
                    <div className={`${styles.movie__info_func} ${styles.list}`}>
                        <BsListUl />
                    </div>
                    <div className={`${styles.movie__info_func} ${styles.heart}`}>
                        <AiFillHeart />
                    </div>
                    <div className={`${styles.movie__info_func} ${styles.bookmark}`}>
                        <BsFillBookmarkFill />
                    </div>
                    <div className={`${styles.movie__info_func} ${styles.star}`}>
                        <MdStarRate />
                    </div>
                </div>
                
                <div className={styles.movie__info_tagline}>
                    {movie?.tagline}
                </div>
                <div className={styles.movie__info_overview}>
                    <div className={styles.movie__info_overview_title}>
                        Overview
                    </div>
                    {movie?.overview}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MoviePage