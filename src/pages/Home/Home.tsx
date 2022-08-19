import React from 'react'
import Slider from '../../ui/Slider/Slider'
import styles from './Home.module.scss'
import { ImFire } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import SlideRated from '../../ui/Slider/SlideRated';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__title}>
        Trending Movie
        <div className={styles.home__icon}>
          <ImFire />
        </div>
      </div>
      <Slider />
      <div className={styles.home__title}>
        Top Rated
        <div className={`${styles.home__icon} ${styles.star}`}>
          <AiFillStar />
        </div>
      </div>
      <SlideRated />
    </div>
  )
}

export default Home

