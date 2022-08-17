import React, { FC, useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import { AiOutlineSearch } from "react-icons/ai";
import { IMovie } from '../../types';
import requests from '../../utils/requests';
import SidebarItem from './SidebarItem';

const SideBar:FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    const getPopularMovies = async() => {
      const popularMovies = await Promise.all([
        fetch(requests.fetchPopularMovies)
        .then((res) => res.json())
        .then((res) => res.results.slice(0, 3))
      ])
      setMovies(...popularMovies)
    } 

    getPopularMovies()
  }, [])

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