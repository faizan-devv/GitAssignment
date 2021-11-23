import React from "react";
import styles from "./Repositories.module.css";

const Repositores = ({ name, stars, watchers }) => {
  return (
    <div className={styles.RepoWrap}>
      <div>
        <h5>{name}</h5>
      </div>
      <div>
        <h6>
          {stars} Stars / {watchers} Watching
        </h6>
      </div>
    </div>
  );
};

export default Repositores;
