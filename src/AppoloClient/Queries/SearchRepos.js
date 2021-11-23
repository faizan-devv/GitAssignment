import { gql } from "@apollo/client";

const SEARCH_REPOS_QUERY = gql`
  query search($query: String!, $last: Int!) {
    user(login: $query) {
      repositories(last: $last) {
        totalCount
        nodes {
          ... on Repository {
            id
            hasIssuesEnabled
            name
            description
            createdAt
            stargazerCount
            watchers {
              totalCount
            }
            issues(last: 100) {
              totalCount
              nodes {
                ... on Issue {
                  title
                  body
                  createdAt
                  viewerCanUpdate
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default SEARCH_REPOS_QUERY;
