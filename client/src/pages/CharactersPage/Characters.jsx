import React from 'react';
import ListOfCharacters from './ListOfCharacters/ListOfCharacters';
import routes from '../../configs/routes';
import { Link } from 'react-router-dom';
import styles from './Characters.module.scss';

const Characters = () => {
    return (
        <div className={styles.table}>
            <button className={styles.table__todo}>
                <Link 
                    to={routes.pathToWatchListPage} 
                    style={{ textDecoration: 'none', color: '#d2da4b' }}>
                    Watch List
                </Link>
            </button>
            <ListOfCharacters />
        </div>
    );
}

export default Characters;