import React, { useCallback, useEffect, useState } from "react";
import styles from './SearchResults.module.css';

const SearchResults = ({searchTerm, onClickClose=null}) => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        if (searchTerm) {
            setTerm(searchTerm);
        }
    }, [searchTerm]);

    const handleClick = useCallback(() => {
        if (onClickClose) {
            onClickClose();
        }
    });

    return(
        <div className={styles.SearchResults}>
            <div className="terms">
                Search results for {term}...
            </div>
            <div className="btnHolder">
                <button className="btn btn-primary" onClick={handleClick}>Go Back</button>
            </div>

        </div>
    );
}

export default SearchResults;