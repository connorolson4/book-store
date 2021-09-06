import {gql} from "@apollo/client"

export const USER = gql`
query {
    me{
      email
      savedBooks{
        title
         description
        authors
        image
        link
        _id
      }
    }
  }
`