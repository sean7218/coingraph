import { ApolloServer, gql } from 'apollo-server';

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
      title: 'Jurassic Park_',
      author: 'Michael Crichton',
    },
];


const resolvers = {
    Query: {
      books: () => books,
      book: () => books[1]
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

console.log("hi")
// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
  }