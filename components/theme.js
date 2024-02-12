import Header from "./header"
import styles from './theme.module.css';

export default function Theme({ children }) {
    return (
        <>
            <Header />
            <main className={styles.Theme}>{children}</main>
            <div>footer goes here</div>
            {/* <Footer /> */}
        </>
    )
}