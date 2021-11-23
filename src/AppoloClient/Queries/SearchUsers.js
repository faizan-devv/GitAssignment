import { gql } from "@apollo/client";

const SEARCH_USERS_QUERY = gql`
  query search($query: String!, $last: Int!) {
    search(query: $query, type: USER, last: $last) {
      nodes {
        ... on User {
          login
          avatarUrl(size: 100)
        }
      }
    }
  }
`;

export default SEARCH_USERS_QUERY;
