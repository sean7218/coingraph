require('dotenv').config();
import { ApolloServer, gql } from 'apollo-server';
import { createPool } from './functions/postgres';

const pool = createPool();

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book: Book
  }
`;

const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
];


const resolvers = {
    Query: {
      books: () => books,
      book: () => books[0]
    },
};

const server = new ApolloServer({ 
    resolvers, 
    typeDefs,
    introspection: true,
    playground: true
 });

server.listen()
  .then(({ url }) => console.log(`Server ready at ${url}. `));

console.log("hi sean")
// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
  }