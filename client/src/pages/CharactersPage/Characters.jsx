import React, { useState, useEffect } from 'react';
import routes from '../../configs/routes';
import { Link } from 'react-router-dom';
import styles from './Characters.module.scss';
import axios from '../../hooks/useAxios';

const Characters = () => {
    const BASE_URL = 'https://rickandmortyapi.com/api/character';

    const [chars, setState] = useState([]);

    useEffect(() => {
        axios
        .get(`${BASE_URL}`)
        .then(response => {
            console.log(response.data.results)
            setState(response.data.results)
        })
        .catch(err => {
            console.log(err);
        })
      }, []);

    return (
        <div className={styles.table__title}>
            Characters
            <button>
                <Link to={routes.pathToWatchListPage}>Watch List</Link>
            </button>
            <div>
                <ul>
                    {
                        chars.map(c => <li key={c.id}>{c.name}{c.name}{c.name}{c.name}{c.name}{c.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Characters;