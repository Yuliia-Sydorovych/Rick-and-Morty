import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Episode from './components/EpisodeElement/Episode';
import Form from './components/FormEpisodes/Form';
import routes from '../../configs/routes';
import styles from './WatchList.module.scss';

const getLocalEpisodes = () => {
    
    let list = localStorage.getItem('list');

    if (list) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return [];
    }
};

const WatchList = () => {
    
    const [episodes, setEpisodes] = useState(getLocalEpisodes());

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(episodes))
    }, [episodes]);

    const addEpisode = (input) => {
        if(input && episodes.length<6) {
            const newEpisode = {
                id: Math.random().toString(20).substring(1,10),
                episode: input,
                complete: false
            }
           setEpisodes([...episodes, newEpisode]); 
        }
    }
    const removeEpisode = (id) => {
        setEpisodes([...episodes.filter((episode) => episode.id !== id)])
    }
    const completeEpisode = (id) => {
        setEpisodes([...episodes.map(episode => 
            episode.id === id ? { ...episode, complete : !episode.complete } : { ...episode })])
    }
    return (
        <div className={styles.watchList}>
            <button className={styles.watchList__todo}>
                <Link 
                    to={routes.pathToCharactersPage} 
                    style={{ textDecoration: 'none', fontWeight: 'bold', color: 'rgb(20, 9, 87)' }}
                >
                    Characters
                </Link>
            </button>
            <div className={styles.watchList__component}>
                <div className={styles.watchList__title}>Watch List</div>
                <Form addEpisode={addEpisode}/>
                {episodes.map((episode) => {
                    return (
                        <Episode
                            episode={episode}
                            key={episode.id}
                            completeEpisode={completeEpisode}
                            removeEpisode={removeEpisode}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default WatchList;