import { useState } from 'react';
import ClientHeader from './ClientHeader/ClientHeader';
import InputForm from './InputForm/InputForm';
import Messages from './Messages/Messages';
import styles from './SocketClient.module.scss';

function SocketClient() {

    const [ messages, setMessages ] = useState([]);

    let socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello');

    socket.onmessage = (event) => {
        //setMessages(messages.push(event.data));
        setMessages([...messages, event.data]);
    };

    const onSendMessage = (text) => {
        socket.send(text);
        //setMessages([...messages, `Send to server ${text}`]);
        setMessages([...messages, `Send to server ${text}`]);
    }

    return (
        <div className={styles.container}>
            <ClientHeader/>
            <InputForm onSend={onSendMessage}/>
            <Messages data={messages}/>
        </div>
    )
}

export default SocketClient;