import React from 'react'
import styles from '../styles/Register.module.css'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Register = () => {
    return (
        <>
                        <Navbar />

<div className={styles.reg}>
<h1>Register</h1>
</div>

<div className={styles.illu}>
    
<Image src="/images/illu.png" alt="illustration" />
</div>



<div className={stlyes.box}>
    
</div>

<div className={styles.username}>
    <input type="text" className={styles.inp} placeholder="Username">
</div>



<div className={styles.phno}>
    <input type="number" placeholder="Phone Number" className={styles.inp}>
</div>

<div className={styles.email}>
    <input type="email" placeholder="email" className={styles.inp}  >
</div>

<div className={syles.password}>
    <input type="password"  className={styles.inp} placeholder="Password">
</div>

<div className={styles.confirm}>
    <input type="password" className={styles.inp} placeholder="Confirm Password">
</div>
    

<button className={styles.signupbutton}>
<a href="hellocareer.co.in/joined" >
    <p>Join Us</p>
</a>
</button>

</>
    )
}

export default Register
