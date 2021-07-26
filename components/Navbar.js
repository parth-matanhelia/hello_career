import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <div className={styles.group}>
                <div className={styles.logoSide}>
                    <Link href="/">
                        <a className={styles.logo}>
                            Hello<span className={styles.logoP}>Career</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.links}>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About Us</a></Link>
                    <Link href="/contact"><a>Contact Us</a></Link>
                    <Link href="/dashboard"><a>Dashboard</a></Link>
                    <Link href="/login"><a>Login | SignUp</a></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
