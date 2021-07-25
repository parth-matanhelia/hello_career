import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

const Login = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className={styles.loginPart}>
                <div className={styles.group}>
                    <div className={styles.leftSide}>
                        <Image src="/images/login2.jpg" width={500} height={500} alt="LoginImage" />
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.container}>
                            <h1 className={styles.logTitle}>Welcome Back Achiever</h1>
                            <form className={styles.form} action="">
                                <input className={styles.field} type="email" name="email" id="email" placeholder="Email ID" />
                                <br />
                                <input className={styles.field} type="password" name="pass" id="pass" placeholder="Password" />
                                <br />
                                <button className={styles.btnLogin} type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
