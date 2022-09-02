import styles from './Layout.module.css';

function Fallback() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default Fallback;
