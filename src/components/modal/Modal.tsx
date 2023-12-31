import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";

interface Props {
  title: string;
  content: any;
}

const Modal = ({ title, content }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>{title}</h1>
        <button onClick={() => dispatch(modalFunc())}>X</button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
