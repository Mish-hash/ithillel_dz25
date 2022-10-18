import styles from './InputForm.module.scss';

function InputForm() {
    return(
        <div className={styles.container}>
            <input type='text'></input>
            <button>Send</button>
        </div>
    );
}

export default InputForm;
