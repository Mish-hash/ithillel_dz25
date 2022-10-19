import styles from './Messages.module.scss';
import { useSelector } from 'react-redux';

function Messages() {

    const messages = useSelector(state => state.messages);

    return(
        <div className={styles.container}>
            {messages && messages.map((el)=><p key={`message_${el.id}`}>{el.text}</p>)}
        </div>
    );
}

export default Messages;
