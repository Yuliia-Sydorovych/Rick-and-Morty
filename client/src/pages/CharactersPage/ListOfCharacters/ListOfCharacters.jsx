import React, { useState, useEffect } from 'react';
import styles from './ListOfCharacters.module.scss';
import axios from '../../../hooks/useAxios';
import route from '../../../configs/routes';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const ListOfCharacters = () => {
    const BASE_URL = 'https://rickandmortyapi.com/api/character';

  const [chars, setState] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
      axios
      .get(`${BASE_URL}`)
      .then(response => {
          console.log(response.data.results)
          setState(response.data.results)
          setCount(response.data.info.pages)
      })
      .catch(err => {
          console.log(err);
      })
    }, []);
    return (
        <div className={styles.list}>
            <div className={styles.list__logo}>
                <img src={Logo} alt='logo'/>
                <select>
                    <option>Species</option>
                    <option>Human</option>
                    <option>Alien </option>
                </select>
                <select>
                    <option>Status</option>
                    <option>Alive</option>
                    <option>Dead </option>
                    <option>Unknown</option>
                </select>
                <select>
                    <option>Gender</option>
                    <option>Female</option>
                    <option>Male </option>
                    <option>Genderless</option>
                    <option>Unknown</option>
                </select>
            </div>
            <div className={styles.list__characters}>
            {
            chars.map(c => 
              <Link 
                key={c.id}
                style={{ textDecoration: 'none' }}
                to={{ 
                    pathname: `${route.pathToCharacterPage}`,
                    propsSearch: c 
                }}>
                
            <div key={c.id} className={styles.list__card}>
                <div>
                  <img src={c.image} alt='avatar'/>
                </div>
                <div>{c.name}</div>
            </div>
            </Link>
            )
          }
            </div>
            
        </div>
    );
}

export default ListOfCharacters;