import { Outlet } from 'react-router-dom'
import styles from './index.module.css'

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Design System Example</h1>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>Design System Example &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
