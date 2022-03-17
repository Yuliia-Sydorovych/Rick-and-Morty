import React from "react";
import styles from './Episode.module.scss';

const Episode = ({ episode, completeEpisode, removeEpisode }) => {
    return (
        <div key={episode.id} className={styles.episode}>
            <div className={episode.complete ? styles.episode__strike : styles.episode__normal}>
                {episode.episode}
            </div>
            <button onClick={() => removeEpisode(episode.id)} className={styles.episode__delete}>
                Delete
            </button>
            <input type='checkbox' onClick={() => completeEpisode(episode.id)} className={styles.episode__choose}/>
        </div>
    );
}

export default Episode;