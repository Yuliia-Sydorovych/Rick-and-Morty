import React, { useState }from 'react';

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
        <form onSubmit={submitChandges}>
            <input
                value={input}
                type='text'
                onChange={changeValue}
                placeholder='Enter episode'
            />
            <button>save</button>
        </form>
    );
}

export default Form;