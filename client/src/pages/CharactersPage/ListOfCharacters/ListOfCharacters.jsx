import React, { useState, useEffect } from 'react';
import axios from '../../../hooks/useAxios';
import Logo from '../../../assets/images/logo.png';
import FilteredCharacters from './components/FilteredCharacters/FilteredCharacters';
import Pagination from './components/Pagination/Pagination';
import styles from '../../../consts/styles/ListOfCharacters.module.scss';

const getPage = () => {

    const currentPage = localStorage.getItem('currentPage');

    if (currentPage) {
        return JSON.parse(localStorage.getItem('currentPage'));
    } else {
        return [];
    }
};

const ListOfCharacters = () => {

    const BASE_URL = 'https://rickandmortyapi.com/api/character/';

    const [chars, setChars] = useState([]);
    const [page, setPage] = useState(getPage());
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
      axios
        .get(`${BASE_URL}?page=${page}`)
        .then(response => {
            setChars(response.data.results)
            setTotalPage(response.data.info.pages)
            localStorage.setItem('currentPage', JSON.stringify(page))
        })
        .catch(err => {
            console.log(err);
        })
    }, [page]);

    const handleClick = num => {
        setPage(num);  
    }

    return (
        <div className={styles.list}>
            <div className={styles.list__logo}>
                <img src={Logo} alt='logo'/>
            </div>
            <FilteredCharacters chars={chars}/>
            <Pagination totalPage={totalPage} handleClick={handleClick}/>
        </div>
    );
}

export default ListOfCharacters;