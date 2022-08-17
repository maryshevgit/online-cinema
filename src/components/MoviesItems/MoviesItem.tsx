import React, { createRef, useRef, useState } from 'react'
import styles from './MoviesItem.module.scss'
import { IMovie } from '../../types'
import { baseUrl } from '../../utils/requests'
import { useAppDispatch } from '../../hooks/reduxHook'
import { getId } from '../../redux/slices/movieIdSlice'
import { useNavigate } from 'react-router-dom'

interface Props {
    movie: IMovie
}

const MoviesItem = ({movie}: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getOneMovie = async(id:number) => {
    dispatch(getId(id))
    navigate(`${id}`)
  }

  return (
    <div key={movie.id} className={styles.movies__item} onClick={() => getOneMovie(movie.id)}>
        <img src={baseUrl+movie.poster_path || baseUrl+movie.backdrop_path} alt={movie.title || movie.name} />
        <div className={styles.movies__item_title}>
            {movie.title || movie.name}
        </div>
    </div>
  )
}

export default MoviesItem
