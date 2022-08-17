import React, { useEffect, useState } from 'react'
import Slider from '../../components/Slider/Slider'
import styles from './Home.module.scss'
import { ImFire } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import requests from '../../utils/requests';
import { IMovie } from '../../types';
import SlideRated from '../../components/Slider/SlideRated';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([])
  const [ratedMovies, setRatedMovies] = useState<IMovie[]>([])

  useEffect(() => {
    const getTrendingMovies = async () => {
      try{
        const trendingMovies = await Promise.all([
          fetch(requests.fetchTrending).then((res) => res.json()).then((res) => res.results.slice(0,4))
        ])
        setTrendingMovies(...trendingMovies)
      }catch (error) {
        console.log(`Ошибка при получении Trending Movies: ${error}`)
      }
    }

    const getRatedMovies = async () => {
      try{
        const topMovies = await Promise.all([
          fetch(requests.fetchTopRated).then((res) => res.json()).then((res) => res.results)
        ])
        setRatedMovies(...topMovies)
      }catch (error) {
        console.log(`Ошибка при получении Top Rated Movies: ${error}`)
      }
    }

    getTrendingMovies()
    getRatedMovies()
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.home__title}>
        Trending Movie
        <div className={styles.home__icon}>
          <ImFire />
        </div>
      </div>
      <Slider movies={trendingMovies} />
      <div className={styles.home__title}>
        Top Rated
        <div className={`${styles.home__icon} ${styles.star}`}>
          <AiFillStar />
        </div>
      </div>
      <SlideRated movies={ratedMovies} />
    </div>
  )
}

export default Home

