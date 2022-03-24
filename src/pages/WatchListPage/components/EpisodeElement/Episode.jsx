import React from 'react';
import Trash from '../../../../assets/images/trash.png';
import Check from '../../../../assets/images/check.png';
import styles from './Episode.module.scss';

const Episode = ({ episode, completeEpisode, removeEpisode }) => {
    return (
        <div key={episode.id} className={styles.episode}>
            <div className={episode.complete ? styles.episode__strike : styles.episode__normal}>
                {episode.episode}
            </div>
            <button onClick={() => removeEpisode(episode.id)} className={styles.episode__delete}>
                <img src={Trash} alt='trash'/>
            </button>
            <button onClick={() => completeEpisode(episode.id)} className={styles.episode__check}>
                <img src={Check} alt='check'/>
            </button>
        </div>
    );
}

export default Episode;