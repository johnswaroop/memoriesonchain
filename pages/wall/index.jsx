import React from 'react'
import styles from './style.module.scss'

const MemoryComp = ({ time, title, desc, img }) => {
    return (
        <div className={styles.memoryComp}>
            <span className={styles.time}>
                <img src="/clock.png" alt="" className={styles.clock} />
                <p>{time}</p>
            </span>
            <div className={styles.desc}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <img className={styles.photo} src={img} alt="" />
            </div>
        </div>
    )
}

function index() {
    return (
        <section className={styles.wallPage}>
            <nav className={styles.nav}>
                <h1>Memories on Chain</h1>
                <button className={styles.walletConnect}> <img src="/metamask.svg" alt="" /> 0xd8...46de</button>
            </nav>
            <div className={styles.memoryWall}>
                <div className={styles.headder}>
                    <p>2022</p>
                    <span className={styles.dropDown}>All Highlights <img src="/downarrow.svg" alt="" /> </span>
                </div>
                <div className={styles.memoryCompRow}>
                    <MemoryComp
                        time={'Feb 09, 2022'}
                        title={'Solana Hacker House, Delhi'}
                        desc={`When believers of Web3 came together, you can’t BUIDL excitement,
                        cosparivaar
                        and fans with the one and only Tamar
                        😂`}
                        img={'/photo1.png'}
                    />
                    <MemoryComp
                        time={'May 21, 2022'}
                        title={'Solana Hacker House, Bengaluru'}
                        desc={`our team made the most out of the bangalore solana house. we met new people, networked with them and made sure we learned as much as we could in those four days`}
                        img={'/photo2.png'}
                    />
                    <MemoryComp
                        time={'Sep 09, 2022'}
                        title={'Anushka’s Birthday'}
                        desc={`Happy 18th birthday anushka, have the best time adulting :) `}
                        img={'/photo3.png'}
                    />
                </div>
            </div>
        </section>
    )
}

export default index