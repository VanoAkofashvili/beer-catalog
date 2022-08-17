import styles from './Loading.module.scss';

interface LoadingProps {
  status: boolean;
}

const Loading: React.FC<LoadingProps> = ({ status }) => {
  return status ? (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
};

export default Loading;
