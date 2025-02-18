import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        name
        id
        location {
          id
          name
        }
        origin {
          id
          name
        }
        episode {
          id
          episode
          air_date
        }
        image
      }
      info {
        next
        pages
      }
    }
  }
`; 