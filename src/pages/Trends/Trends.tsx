import React, { useEffect } from 'react'
import styles from './Trends.module.scss'
import MoviesItems from '../../components/MoviesItems/MoviesItem'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { fetchTrendingMovies } from '../../redux/slices/movieSlice'

const Trends = () => {
  const dispatch = useAppDispatch()
    const movies = useAppSelector(state => state.movies.trendingMovies)

    useEffect(() => {
        dispatch(fetchTrendingMovies())
    }, [dispatch])

  return (
    <div>
      <div className={styles.trends__title}>
        Trending now
      </div>
      <div className={styles.trendsMovies}>
        {movies.map(movie => 
          <MoviesItems key={movie.id} movie={movie} />
        )}
      </div>
    </div>
  )
}

export default Trends