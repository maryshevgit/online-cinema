import React, { useEffect } from 'react'
import MoviesItems from '../../components/MoviesItems/MoviesItem'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { fetchMoviesByGenre } from '../../redux/slices/movieSlice'
import styles from './Movies.module.scss'

const Movies = () => {
    const dispatch = useAppDispatch()
    const genre_id = useAppSelector(state => state.movie.genre)
    const movies = useAppSelector(state => state.movies.movies)

  useEffect(() => {
    dispatch(fetchMoviesByGenre(genre_id))
  }, [genre_id, dispatch])

  return (
    <div className={styles.movies}>
      {movies.map(movie => 
        <MoviesItems key={movie.id} movie={movie} />
      )}
    </div>
  )
}

export default Movies
