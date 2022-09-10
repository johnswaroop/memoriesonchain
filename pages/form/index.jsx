import React from 'react'
import styles from './style.module.scss'
function index() {
    return (
        <section className={styles.formPage}>
            <nav className={styles.nav}>
                <h1>Memories on Chain</h1>
                <button className={styles.walletConnect}> <img src="/metamask.svg" alt="" /> 0xd8...46de</button>
            </nav>

            <form className={styles.formCon} action="">
                <span className={styles.titleBar}>
                    <p>let’s mint some beatiful memories on chain</p>
                    <img src="/closebtn.svg" alt="" />
                </span>
                <div className={styles.mainCon}>

                    <div className={styles.filesDrop}>

                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="">
                            <p>Title</p>
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <p>Description</p>
                            <textarea type="text" rows={5} />
                        </label>
                        <label htmlFor="">
                            <p>Wallet Address(es)</p>
                            <div className={styles.walletCon}>
                                <div className={styles.title}>
                                    <p>Owner</p>
                                </div>
                                <div className={styles.address}>
                                    <p>8eUwwhynpeJFFSpcbi7TCNUM4hyrEptZANLRHZba33Ln</p>
                                    <img src="/closebtn.svg" alt="" />
                                </div>
                            </div>
                            <div className={styles.addMoreOwner}>
                                <img src="/plusSquare.svg" alt="" />
                                <p>add more owners</p>
                            </div>
                            <div className={styles.uploadCsv}>
                                <p>or</p>
                                <h3>Upload CSV files</h3>
                                <span></span>
                            </div>
                        </label>
                        <button className={styles.primaryBtn}>mint your memory</button>
                    </div>
                </div>
            </form>

        </section>
    )
}

export default index