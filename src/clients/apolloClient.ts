import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { mainnet, polygon, polygonMumbai } from "wagmi/chains";

import {
    GRAPH_API_URL_GOERLI,
    GRAPH_API_URL_MAINNET,
    GRAPH_API_URL_MUMBAI,
    GRAPH_API_URL_POLYGON,
    GRAPH_API_URL_XDAI,
} from "../constants";

const goerliClient = new ApolloClient({
    uri: GRAPH_API_URL_GOERLI,
    cache: new InMemoryCache(),
});

const mainnetClient = new ApolloClient({
    uri: GRAPH_API_URL_MAINNET,
    cache: new InMemoryCache(),
});

const mumbaiClient = new ApolloClient({
    uri: GRAPH_API_URL_MUMBAI,
    cache: new InMemoryCache(),
});

const polygonClient = new ApolloClient({
    uri: GRAPH_API_URL_POLYGON,
    cache: new InMemoryCache(),
});

const xdaiClient = new ApolloClient({
    uri: GRAPH_API_URL_XDAI,
    cache: new InMemoryCache(),
});

export { goerliClient, mainnetClient, mumbaiClient, polygonClient, xdaiClient };

const client = {
    [mainnet.id]: mainnetClient,
    [polygon.id]: polygonClient,
    [polygonMumbai.id]: mumbaiClient,
};

export default client;
