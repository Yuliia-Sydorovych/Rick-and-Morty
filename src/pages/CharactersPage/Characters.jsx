import React, { useEffect, useState } from 'react';
import axios from '../../hooks/useAxios';
import routes from '../../configs/routes';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { species, statuses, genders } from '../../consts/buttons';
import Logo from '../../assets/images/logo.png';
import Pagination from './Pagination/Pagination';
import styles from './Characters.module.scss';

const Characters = () => {

    const [filtred, setFiltred] = useState([]);
    const [choose, setChoose] = useState();
    const [parameter, setParameter] = useState();
    const [page, setPage] = useState();
    const [totalPage, setTotalPage] = useState(0);
    
    const handleClick = num => {
        setPage(num);  
    }

    useEffect(() => {
        axios
            .get(`?page=${page}&${parameter}=${choose}`)
            .then(response => {
                setFiltred(response.data.results)
                setTotalPage(response.data.info.pages)
                localStorage.setItem('currentPage', JSON.stringify(page))
            })
            .catch(err => {
                console.log(err);
            });
    }, [parameter, choose, page]);


    const filterElements = (el, name) => {
        setChoose(el);
        name==='status'?setParameter('status')
            :name==='species'?setParameter('species')
                :setParameter('gender');
    }

    const filterHandle = (e) => {
        let value = e.target.value;
        setPage(1);
        setFiltred(filterElements(value, e.target.name));
    }

    const resetFilters = () => {
        if( parameter || page !== 1) {
            setParameter('');
            setFiltred([]);
            setPage(1);
        }
    }

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
            <div className={styles.characters__logo}>
                <img src={Logo} alt='logo'/>
            </div>
            <div className={styles.characters__list}>
                <div className={styles.characters__content}>
                    
                    <div className={styles.characters__nameFilter}>
                        Status
                    </div>
                    {statuses &&
                        statuses.map(s => (
                            <button key={s.id} name='status' value={s.value} onClick={filterHandle}>
                                {s.name}
                            </button>
                        ))
                    }
                    <div className={styles.characters__nameFilter}>
                        Species
                    </div>
                    {species &&
                        species.map(sp => (
                            <button key={sp.id} name='species' value={sp.value} onClick={filterHandle}>
                                {sp.name}
                            </button>
                        ))
                    }
                    <div className={styles.characters__nameFilter}>
                        Gender
                    </div>
                    {genders &&
                        genders.map(g => (
                            <button key={g.id} name='gender' value={g.value} onClick={filterHandle}>
                                {g.name}
                            </button>
                        ))
                    }
                    <div className={styles.characters__nameFilter}>
                        Reset
                    </div>
                    <button onClick={resetFilters} value=''>x</button>
                </div>
                <div className={styles.characters__character}>
                    {filtred &&
                        filtred.map(c => 
                            <Link 
                                key={c.id}
                                style={{ textDecoration: 'none' }}
                                to={{ 
                                    pathname: `${routes.pathToCharacterPage}`,
                                    propsSearch: c 
                                }}
                            >
                                <div className={styles.characters__card}>
                                    <div className={styles.characters__img}>
                                        <img src={c.image} alt='avatar' />
                                    </div>
                                    <div className={styles.characters__nameCharacter}>
                                        {c.name}
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
                <Pagination totalPage={totalPage} handleClick={handleClick}/>
            </div>
        </div>
    ); 
}

export default Characters;