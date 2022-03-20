import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import routes from '../../../../../configs/routes';
import styles from '../../../../../consts/styles/FilteredCharacters.module.scss';
import { species, statuses, genders } from '../../../../../consts/buttons';

const FilteredCharacters = ({chars}) => {

    const [filtred, setFiltred] = useState();

    useEffect(() => {
        setFiltred(chars);
    }, [chars]);

    const filterStatus = (status) => {
        let filtredCharacter = chars.filter(char => char.status === status);
        return filtredCharacter;
    }
    
    const filterSpecies = (species) => {
        let filtredCharacter = chars.filter(char => char.species === species);
        return filtredCharacter;
    }

    const filterGender = (gender) => {
        let filtredCharacter = chars.filter(char => char.gender === gender);
        return filtredCharacter;
    }

    function statusHandle(e) {
        let statusCharacter = e.target.value;
        statusCharacter !== 'All'
            ?setFiltred(filterStatus(statusCharacter))
            :setFiltred(chars)
    }

    function speciesHandle(e) {
        let speciesCharacter = e.target.value;
        speciesCharacter !== 'All'
            ?setFiltred(filterSpecies(speciesCharacter))
            :setFiltred(chars)
    }

    function genderHandle(e) {
        let genderCharacter = e.target.value;
        genderCharacter !== 'All'
            ?setFiltred(filterGender(genderCharacter))
            :setFiltred(chars)
    }

    return (
        
        <div className={styles.filterCharacter}>
            <div className={styles.filterCharacter__content}>
                <div className={styles.filterCharacter__nameFilter}>
                    Status
                </div>
                {statuses &&
                    statuses.map((status, id) => (
                    <>
                        <button key={id} value={status.value} onClick={statusHandle}>
                            {status.name}
                        </button>
                    </>
                    ))
                }
                <div className={styles.filterCharacter__nameFilter}>
                    Species
                </div>
                {species &&
                    species.map((species, id) => (
                    <>
                        <button key={id} value={species.value} onClick={speciesHandle}>
                            {species.name}
                        </button>
                    </>
                    ))
                }
                <div className={styles.filterCharacter__nameFilter}>
                    Gender
                </div>
                {genders &&
                    genders.map((gender, id) => (
                    <>
                        <button key={id} value={gender.value} onClick={genderHandle}>
                            {gender.name}
                        </button>
                    </>
                    ))
                }
            </div>
            <div className={styles.filterCharacter__character}>
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
                            <div key={c.id} className={styles.filterCharacter__card}>
                                <div key={c} className={styles.filterCharacter__img}>
                                    <img key={c.image} src={c.image} alt='avatar' />
                                </div>
                                <div key={c.name} className={styles.filterCharacter__nameCharacter}>
                                    {c.name}
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    ); 
}

export default FilteredCharacters;