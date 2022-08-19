import React from 'react'
import { IMovie } from '../../types'
import { baseUrl } from '../../utils/requests'
import styles from './Sidebar.module.scss'
import { AiFillStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { getId } from '../../redux/slices/movieIdSlice';
import { useNavigate } from 'react-router-dom';


interface Props {
    movie: IMovie
}

const SidebarItem = ({movie}: Props) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const movie_id = useAppSelector(state => state.movie.id)
    

    const getOneMovie = async(id:number) => {
        dispatch(getId(id))
        navigate(`movie/${movie_id}`)
    }


  return (
    <div className={styles.sidebar__item} onClick={() => getOneMovie(movie.id)}>
        <img src={baseUrl+movie.poster_path} alt={movie.title} />
        <div className={styles.sidebar__item__body}>
            <div className={styles.sidebar__item__title}>
                {movie.title}
                <div className={styles.sidebar__item__date}>
                    {movie.release_date}
                </div>
            </div>
            <div className={styles.sidebar__item__rating}>
                {movie.vote_average}
                <AiFillStar />
            </div>
        </div>
    </div>
  )
}

export default SidebarItem