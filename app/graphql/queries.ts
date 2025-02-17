import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1) {
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
    }
  }
`; 