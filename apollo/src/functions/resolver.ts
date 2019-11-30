import { getAllUsers } from './queries'

const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
]

const resolvers = {
    Query: {
        books: () => books,
        book: () => books[0],
        users: () => getAllUsers(),
    },
}

export default resolvers
