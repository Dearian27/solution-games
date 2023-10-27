import React, { MouseEvent, useState } from 'react';
import styles from './styles.module.scss';
import FlappyBG from '@/assets/flappy-bob.png';
import Image from 'next/image';


const GameCard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2) * 1.5;
    const y = (clientY - top - height / 2) / (height / 2) * 1.5;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotation.y * 10}deg) rotateY(${-rotation.x * 10}deg)`,
      }}
    >
    <Image src={FlappyBG} fill alt="solution school games flappy bob" className={styles.image} />
    </div>
  );
};

export default GameCard;