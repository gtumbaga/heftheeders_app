import styles from './theme.module.css';

export default function Theme({ children }) {
    return (
        <>
            <main className={styles.Theme}>
                <div className="gCard">
                    {children}
                </div>
            </main>
        </>
    )
}