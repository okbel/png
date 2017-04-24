const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { readFileSync } = require("fs");
const path = require("path");
const cors = require("cors");

const typeDefs = readFileSync(
    path.join(__dirname, "graph/typeDefs.graphql"),
    "utf8"
);

const resolvers = require("./graph/resolvers");
const loaders = require("./graph/loaders");

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use(
    "/graph",
    bodyParser.json(),
    graphqlExpress(res => {
        return {
            context: { loaders },
            schema
        };
    })
);

app.use("/", cors(), graphiqlExpress({ endpointURL: '/graph' }));

app.listen(3000, () => console.log("png running"));