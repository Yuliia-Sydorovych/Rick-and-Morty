import React from 'react';
import styles from '../../../../../consts/styles/Character.module.scss';

const Character = (props) => {
    const person = props.location.propsSearch;
    
    return (
        <div className={styles.profile}>
            <div className={styles.profile__title}>
                {person.name}
            </div>
            <div className={styles.profile__content}>
                <div className={styles.profile__img}>
                    <img src={person.image} alt='character' />
                </div>
                <div className={styles.profile__info}>
                    <div>
                        Status: {person.status}
                    </div>
                    <div>
                        Species: {person.species}
                    </div>
                    <div>
                        Gender: {person.gender}
                    </div>
                    <div>
                        Origin: {person.origin.name}
                    </div>
                    <div>
                        Location: {person.location.name}
                    </div>
                </div>  
            </div>  
        </div>
    );
}

export default Character;