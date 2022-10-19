import { useState } from 'react';
import styles from './InputForm.module.scss';

function InputForm({ onSend }) {

    const [text, setText] = useState('');

    const handlerInput = (event) => {
        setText(event.target.value);
    };

    const handlerSend = () => {
        onSend(text);
        setText('');
    };

    return(
        <div className={styles.container}>
            <input type='text' onChange={handlerInput} value={text}></input>
            <button onClick={handlerSend}>Send</button>
        </div>
    );
}

export default InputForm;
