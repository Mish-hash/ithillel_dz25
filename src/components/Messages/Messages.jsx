import styles from './Messages.module.scss';

function Messages({ data }) {
    return(
        <div className={styles.container}>
            {data && data.map((el, index)=><p key={`message_${index}`}>{el}</p>)}
        </div>
    );
}

export default Messages;
