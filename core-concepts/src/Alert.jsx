// import "./Alert.css";
import styles from "./Alert.module.css";

export const Alert = ({children , type ="sucess" }) => {
    return <div className ={`${styles.alert} ${styles[type]}`}>{children} </div>;    
}



