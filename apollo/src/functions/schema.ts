import { gql } from 'apollo-server'

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type User {
        user_id: Int
        email: String
        username: String
    }

    type Query {
        books: [Book]
        book: Book
        users: [User]
    }
`

export default typeDefs
