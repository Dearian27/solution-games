'use client'
import FlappyBG from '@/assets/flappy-bob.png';
import Image from 'next/image';
import styles from './styles.module.scss';
import GameCard from '../GameCard';


export default function GamesContainer() {
 
  return (
    // <div className={styles.wrapper}>
    <section className={styles.container}>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </section>
    // </div>
  )
}