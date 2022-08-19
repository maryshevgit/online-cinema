import React, { useEffect } from 'react'
import MoviesItems from '../../components/MoviesItems/MoviesItem'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { fetchFreshMovies } from '../../redux/slices/movieSlice'
import styles from './FreshMovies.module.scss'

const FreshMovies = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(state => state.movies.movies)

  useEffect(() => {
    dispatch(fetchFreshMovies())
  }, [dispatch])

  return (
    <div >
      <div className={styles.fresh__title}>
        FreshMovies
      </div>
      <div className={styles.freshMovies}>
        {movies.map(movie => 
          <MoviesItems key={movie.id} movie={movie} />
        )}
      </div>
    </div>
  )
}

export default FreshMovies