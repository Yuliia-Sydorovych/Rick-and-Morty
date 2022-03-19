import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import routes from '../../../../../configs/routes';
import styles from '../../../../../consts/styles/MapCharacters.module.scss';

const CharactersAll = ({chars, page}) => {
    return (
        <div className={styles.mapCharacter}>
            {chars.map(c => 
            <Link 
                key={c.id}
                style={{ textDecoration: 'none' }}
                to={{ 
                    pathname: `${routes.pathToCharacterPage}`,
                    propsSearch: c 
                }}
            >
                <div key={c.id} className={styles.mapCharacter__card}>
                    <div className={styles.mapCharacter__img}>
                        <img src={c.image} alt='avatar' />
                    </div>
                    <div className={styles.mapCharacter__name}>
                        {c.name}
                    </div>
                </div>
            </Link>
            )}
        </div>
    ); 
}

export default CharactersAll;