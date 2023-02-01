import styles from "./styles.module.css";

const Maping = ({ names }) => {
  return (
    <div className={styles.main}>
      {names.map((n) => {
        return (
          <div className={styles.box}>
            <li>{`vakaip galima užrašyt ${n.id} ${n.name}`}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Maping;
