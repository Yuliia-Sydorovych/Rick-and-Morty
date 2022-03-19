import React, { useState }from 'react';
import styles from '../../../../consts/styles/Form.module.scss';

const Form = ({ addEpisode }) => {
    
    const [input, setInput] = useState('');

    const submitChandges = (e) => {
        e.preventDefault();
        addEpisode(input);
        setInput('');
    }

    const changeValue = (e) => {
        setInput(e.currentTarget.value)
    }

    return (
        <form onSubmit={submitChandges} className={styles.form}>
            <div className={styles.form__input}>
                <input
                    value={input}
                    type='text'
                    onChange={changeValue}
                    placeholder='Enter episode'
                />
                <button className={styles.form__save}>SAVE</button>
            </div>
        </form>
    );
}

export default Form;