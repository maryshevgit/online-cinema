import React, { useEffect, useState } from 'react'
import { IMovie } from '../../types'
import requests from '../../utils/requests'
import styles from './Trends.module.scss'
import MoviesItems from '../../components/MoviesItems/MoviesItem'

const Trends = () => {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    const getTrendsMovies = async() => {
      const popularMovies = await Promise.all([
        fetch(requests.fetchTrending)
        .then((res) => res.json())
        .then((res) => res.results)
      ])
      setMovies(...popularMovies)
    } 

    getTrendsMovies()
  }, [])

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