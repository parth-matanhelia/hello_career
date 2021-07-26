import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import styles from '../styles/About.module.css'
// import teamPhoto from 
// import studentsPhoto from 
// import productivityPhoto from 

const About = () => {
    return (
        <div>
            <section>
                <div className={styles.abus}>
                    <h1>About Us</h1>
                </div>

                <div className={styles.whoarewe}>
                    <h2>Who are we?</h2>
                    <div className={styles.whoarewetext}>
                        <p> Hello! We are a bunch of 16-year-olds who felt the need to create a platform where you can find your
                            passion. As a teenager or even a kid you’re always asked about what you want to become when you grow
                            up. Most of us are exposed to very few career choices and so we don’t really choose an appropriate
                            career that we are passionate about. It is completely okay to not know what you want to do or be
                            confused. We have over 300 job profiles listed out for you to make the right choice for yourself.
                            All of these career options have gone through thorough research and by the end of this journey you
                            will learn about the top universities that offer these courses in India and abroad, the maximum and
                            minimum income and mainly-<br/>your passion!</p>
                    </div>

                </div>

                <div className={styles.whoareweimg}>
                    <Image src="/images/template.jpeg" alt="group photo of our team" width={800} height={500}/>
                </div>
            </section>

            <section>

                <div className={styles.howhelp}>
                    <h2>How do we help students?</h2>
                    <div className={styles.howhelptext}>
                        <p> If you are confused or don’t really know what you’re passionate about then you’ve come to the right
                            place! We have fun ways to help you find your dream job and choose a career that you will not regret
                            and will also help you to proceed in achieving your dream!
                        </p>
                    </div>
                </div>
                <div className={styles.studentsimg}>
                    <Image src="/images/students.png" alt="students" width={1000} height={500}/>
                </div>


            </section>

            <section>
                <div className={styles.better}>
                    <h2>
                        What makes helloCareer better than other career counsellors?
                    </h2>
                    <div className={styles.bettertext}>
                        <p>@HelloCareer we help individuals to find a profession that suits their passion . We let students go
                            through more than 300 job profiles and shortlist the career options which they are interested in .
                            After which we provide them with detailed insight into those career options so that they know what
                            to expect from the profession and become more confident about their choices. Where as, other career
                            counsellors tell individuals to pursue professions which they think are best for students. They
                            guide individuals based on what they think is good for them without knowing as to what the
                            individual is interested in or what they are passionate about . @HelloCareer it is all about your
                            interests and your passion . Here, you get to make decisions based on what you like and what you
                            don’t . We’ve got your back no matter which profession you choose, we will help you come up with a
                            career path that is perfect for you.
                        </p>
                    </div>
                </div>
                <div className={styles.productivity}>
                    <Image src="/images/productivity.png" alt="idk" width={800} height={500}/>
                </div>

            </section>

        </div>
    )
}

export default About
