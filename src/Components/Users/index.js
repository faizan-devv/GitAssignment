import React from "react";
import styles from "./users.module.css";
import UserCard from "../UserCard";
import { useState, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import SEARCH_REPOS_QUERY from "../../AppoloClient/Queries/SearchRepos";
import Repositores from "../Repositories";
const Users = (props) => {
  const [makeSearchQuery, { loading, error, data }] =
    useLazyQuery(SEARCH_REPOS_QUERY);
  const [fetched, setFetched] = useState(null);

  useEffect(() => {
    if (data) setFetched(data);
    console.log(data);
  }, [data]);

  const HandleSearchRepos = (login) => {
    console.log("In Search Repos", login);

    makeSearchQuery({ variables: { query: login, last: 100 } });
    console.log("made repo query with ", data);
  };
  return (
    <div>
      <div className={styles.Users}>
        <h1>Users</h1>
        <div className={styles.UsersRow}>
          {props.data?.map((user, index) => {
            return (
              <UserCard
                key={user.login}
                login={user.login}
                avatar={user.avatarUrl}
                getRepos={HandleSearchRepos}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.Repos}>
        <h2>Repositores</h2>
        {fetched?.user?.repositories.nodes.map((repo) => {
          return (
            <Repositores
              key={repo.id}
              name={repo.name}
              stars={repo.stargazerCount}
              watchers={repo.watchers.totalCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
