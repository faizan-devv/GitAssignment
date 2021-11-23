import React from "react";
import { useState, useEffect } from "react";
import Repositores from "../Repositories";
import Users from "../Users";
import styles from "./Home.module.css";
import SEARCH_USERS_QUERY from "../../AppoloClient/Queries/SearchUsers";
import { useLazyQuery, useQuery } from "@apollo/client";

const Home = () => {
  const [Search, setSearch] = useState("");
  const [fetched, setFetched] = useState(null);
  const [makeSearchQuery, { loading, error, data }] =
    useLazyQuery(SEARCH_USERS_QUERY);

  useEffect(() => {
    if (data) setFetched(data);
    console.log(data);
  }, [data]);

  const HandleSearch = (e) => {
    e.preventDefault();
    console.log("made query with ", Search);
    makeSearchQuery({ variables: { query: Search, last: 50 } });
    console.log("made query with ", data);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search Here"
          name="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={(e) => HandleSearch(e)}>Search</button>
      </div>
      <div>
        <Users data={fetched?.search?.nodes}></Users>
      </div>
    </div>
  );
};

export default Home;
