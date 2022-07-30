import { gql } from '@apollo/client';

// 
export const GET_ME = gql`
query Query {
  me {
    _id
    username
    email
    password
    bookCount
    savedBooks {
      _id
      authors
      description
      title
      bookId
      image
      link
    }
  }
}

`