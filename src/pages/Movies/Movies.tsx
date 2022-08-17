import React, { useEffect, useState } from 'react'
import MoviesItems from '../../components/MoviesItems/MoviesItem'
import { useAppSelector } from '../../hooks/reduxHook'
import { IMovie } from '../../types'
import styles from './Movies.module.scss'
const API_KEY = process.env.REACT_APP_API_KEY

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const genre_id = useAppSelector(state => state.movie.genre)

  useEffect(() => {
    const getMovies = async() => {
      const popularMovies = await Promise.all([
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id}`)
        .then((res) => res.json())
        .then((res) => res.results)
      ])
      setMovies(...popularMovies)
    } 

    getMovies()
  }, [genre_id])

  return (
    <div className={styles.movies}>
      {movies.map(movie => 
        <MoviesItems key={movie.id} movie={movie} />
      )}
    </div>
  )
}

export default Movies
