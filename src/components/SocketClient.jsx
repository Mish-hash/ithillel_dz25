import ClientHeader from './ClientHeader/ClientHeader';
import InputForm from './InputForm/InputForm';
import styles from './SocketClient.module.scss';

function SocketClient() {
    return (
        <div className={styles.container}>
            <ClientHeader/>
            <InputForm/>
            <div className={styles.header}>
                <h4>Socket responce</h4>
            </div>
        </div>
    )
}

export default SocketClient;