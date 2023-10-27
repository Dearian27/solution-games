import styles from './styles.module.scss';

export default function Game() {
  return (
    <main className={styles.container}>
      <iframe className={styles.container} src="http://localhost:6680/public/mario/index.html" frameBorder="0"></iframe>
    </main>
  )
}