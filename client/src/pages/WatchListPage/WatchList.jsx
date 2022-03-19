import React, { useState, useEffect }from 'react';
import Episode from './components/EpisodeElement/Episode';
import Form from './components/FormEpisodes/Form';
import styles from '../../consts/styles/WatchList.module.scss';

const getLocalEpisodes = () => {
    let list = localStorage.getItem('list');
    console.log(list);
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
        if(input) {
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
            <div className={styles.watchList__component}>
                <div className={styles.watchList__title}>Watch List</div>
            <Form addEpisode={addEpisode}/>

            {episodes.map((episode) => {
                return (
                    <Episode
                        episode={episode}
                        key={episodes.id}
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