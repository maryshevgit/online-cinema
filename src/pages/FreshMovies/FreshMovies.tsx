import React, { useEffect, useState } from 'react'
import MoviesItems from '../../components/MoviesItems/MoviesItem'
import { IMovie } from '../../types'
import requests from '../../utils/requests'
import styles from './FreshMovies.module.scss'

const FreshMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    const getFreshMovies = async() => {
      const popularMovies = await Promise.all([
        fetch(requests.fetchFreshMovies)
        .then((res) => res.json())
        .then((res) => res.results)
      ])
      setMovies(...popularMovies)
    } 

    getFreshMovies()
  }, [])

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