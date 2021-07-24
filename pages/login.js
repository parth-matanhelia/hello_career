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
                    <div className="leftSide">
                        <Image src="/images/login2.jpg" width={500} height={500} />
                    </div>
                    <div className={styles.rightSide}>
                        <form action="">
                            <input className={styles.field} type="email" name="email" id="email" placeholder="Email ID" />
                            <br />
                            <input className={styles.field} type="password" name="pass" id="pass" placeholder="Password" />
                            <br />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
