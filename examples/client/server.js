const {graphql, buildSchema} = require('graphql');
const express = require('express');

const app = express();

//allows parsing the URL-encoded data
app.use(express.urlencoded({extended: true}));

// Building the schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Resolvers
const root = {
  hello: () => 'world!',
};

// POST endpoint
app.post('/graph', async ({body: {query}}, res) =>
  res.json(await graphql(schema, query, root))
);

app.listen(3001);
