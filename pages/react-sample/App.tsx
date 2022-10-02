import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import styles from '../../styles/App.module.css'

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <Image src={logo} className={styles.App_logo} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={styles.App_link} href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
