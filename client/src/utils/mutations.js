import {gql} from "@apollo/client"

export const ADD_USER = gql`
mutation addUser($username:String!,$email:String!,$password:String!){
    addUser(username:$username,email:$email,password:$password) {
      token
      user{
        username
        email
        _id
      }
    }
  }
`

export const LOGIN = gql`
mutation loginUser ($email:String!,$password:String!) {
    loginUser (email:$email,password:$password) {
      token
      user {
        email
        username
      }
    }
  }
`
export const SAVE_BOOK = gql`
mutation saveBook ($input:saveBookContent!) {
    saveBook (input:$input) {
        email
        username
    }
  }
`

export const REMOVE_BOOK = gql`
mutation removeBook ($bookId:String!) {
    removeBook(bookId:$bookId) {
      email
    }
  }
`