import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { getGenre } from '../../redux/slices/movieIdSlice'
import { fetchGenres } from '../../redux/slices/movieSlice'
import { baseUrl } from '../../utils/requests'
import styles from './Discovery.module.scss'

const Discovery = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const genres = useAppSelector(state => state.movies.genres)

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  const getMovies = (id:number) => {
    navigate('movies')
    dispatch(getGenre(id))
  }

  return (
    <div>
      <div className={styles.discovery}>
        <div className={styles.discovery__title}>
          Discovery
        </div>
        <div className={styles.discovery__text}>
          In this section you will find all genres on our site
        </div>
      </div>
      <div className={styles.genres} >
        {genres.map(genre =>
          <div key={genre.id} className={styles.genre} onClick={() => getMovies(genre.id)} >
            <div className={styles.genre__img}>
              <img src={baseUrl+genre.image} alt={genre.name} />
            </div>
            <div className={styles.genre__name}>
              {genre.name}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Discovery