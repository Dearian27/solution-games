import Image from 'next/image';
import styles from './styles.module.scss';

export default function Header() {
  
  return (
    <header className={styles.header}>
      <h1>Solution games</h1>
      <div>
        Денис
        <div className='icon'>ДФ</div>
      </div>
    </header>
  )
}