import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      {/* The navbar */}
      <Navbar />

      <div className={styles.sampleText}>
        <h1 className={styles.sampleText}>This is the homepage</h1>
        <p>Things working are: </p>
        <ul>
          <li>Navbar</li>
          <li>About page</li>
          <li>Login Page</li>
        </ul>
      </div>
    </>
  )
}
