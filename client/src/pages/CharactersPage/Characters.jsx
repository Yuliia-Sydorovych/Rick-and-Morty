import React from 'react';
import ListOfCharacters from './ListOfCharacters/ListOfCharacters';
import routes from '../../configs/routes';
import { Link } from 'react-router-dom';
import styles from '../../consts/styles/Characters.module.scss';

const Characters = () => {
    return (
        <div className={styles.characters}>
            <button className={styles.characters__todo}>
                <Link 
                    to={routes.pathToWatchListPage} 
                    style={{ textDecoration: 'none', fontWeight: 'bold', color: 'rgb(20, 9, 87)' }}
                >
                    Watch List
                </Link>
            </button>
            <ListOfCharacters />
        </div>
    );
}

export default Characters;