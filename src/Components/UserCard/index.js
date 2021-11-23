import React from "react";
import styles from "./UserCard.module.css";
import Img from "../../assets/images/anon.png";
const UserCard = ({ login, avatar, getRepos }) => {
  return (
    <div className={styles.UserCard}>
      <img src={avatar} alt="Profile Picture" />
      <button
        onClick={() => {
          getRepos(login);
        }}
      >
        <h5>{login}</h5>
      </button>
    </div>
  );
};

export default UserCard;
