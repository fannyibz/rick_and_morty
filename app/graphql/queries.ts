import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int!
    $name: String
    $status: String
    $species: String
    $type: String
    $gender: String
  ) {
    characters(
      page: $page
      filter: { 
        name: $name
        status: $status
        species: $species
        type: $type
        gender: $gender
      }
    ) {
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