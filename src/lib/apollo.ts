import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4rkhiwt17p701z15sk877xv/master",
  cache: new InMemoryCache()
});
