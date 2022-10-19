import ClientHeader from './ClientHeader/ClientHeader';
import InputForm from './InputForm/InputForm';
import Messages from './Messages/Messages';
import styles from './SocketClient.module.scss';
import { useDispatch } from 'react-redux';
import { addMessage } from '../storage/messageSlice';

function SocketClient() {

    const dispatch = useDispatch();

    let socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello');

    socket.onmessage = (event) => {
        dispatch(addMessage({message: event.data}))
    };

    const onSendMessage = (text) => {
        socket.send(text);
        dispatch(addMessage({message:`Send to server ${text}`}));
    }

    return (
        <div className={styles.container}>
            <ClientHeader/>
            <InputForm onSend={onSendMessage}/>
            <Messages/>
        </div>
    )
}

export default SocketClient;