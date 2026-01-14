import { cacheExchange, createClient, fetchExchange } from "urql";
{
  /*
  Connects to GraphQL endpoint,
  executes queries or mutations, 
  caches responses automatically, 
  handles loading/error states,
  re-fetches when variables change
  */
}
export const urqlClient = createClient({
  url: "https://dev.marketplace.api.blockwaresolutions.com/api/opengraphql",
  exchanges: [cacheExchange, fetchExchange],
});
