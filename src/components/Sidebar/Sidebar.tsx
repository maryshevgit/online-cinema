import React, { FC, useEffect } from 'react'
import styles from './Sidebar.module.scss'
import { AiOutlineSearch } from "react-icons/ai";
import SidebarItem from './SidebarItem';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { fetchPopularMovies } from '../../redux/slices/movieSlice';

const SideBar:FC = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(state => state.movies.popularMovies)

  useEffect(() => {
    dispatch(fetchPopularMovies())
  }, [dispatch])
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__input}>
        <input placeholder='Search...' />
        <AiOutlineSearch />
      </div>
      <div className={styles.sidebar__items}>
        <div className={styles.sidebar__items_title}>
          Popular Movies
        </div>
        {movies.map(movie =>
          <div key={movie.id} >
            <SidebarItem movie={movie} />
          </div>
        )}
      </div>
      <button className={styles.sidebar__button}>
          See more
        </button>
    </div>
  )
}

export default SideBar