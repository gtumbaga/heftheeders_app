import Header from "./header"
import Footer from "./footer";
import styles from './theme.module.css';

export default function Theme({ children }) {
    return (
        <>
            <Header />
            <main className={styles.Theme}>
                <div className="dailyStreak">
                    streak goes here...
                </div>
                <div className="gCard">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}