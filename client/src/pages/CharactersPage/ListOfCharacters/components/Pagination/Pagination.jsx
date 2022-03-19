import React from 'react';
import styles from '../../../../../consts/styles/Pagination.module.scss';

const Pagination = ({totalPage, handleClick}) => {
    const pages = [...Array(totalPage).keys()].map(num => num+1);
    
    return (
        <div className={styles.pagination}>
            {pages.map(num => (
                <button 
                key={num}
                onClick={() => handleClick(num)}
                className={styles.pagination__button}>
                    {num}
                </button>
            ))}
        </div>
    );
}

export default Pagination;