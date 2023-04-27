import { mainnet, polygon, polygonMumbai } from "wagmi/chains";

export const PINATA_JWT = process.env.REACT_APP_PINATA_JWT;
export const PINATA_BASE_URL = "https://api.pinata.cloud/";
export const GRAPH_API_URL_MAINNET = process.env.REACT_APP_GRAPH_API_URL_MAINNET;
export const GRAPH_API_URL_POLYGON = process.env.REACT_APP_GRAPH_API_URL_POLYGON;
export const GRAPH_API_URL_MUMBAI = process.env.REACT_APP_GRAPH_API_URL_MUMBAI;
export const GRAPH_API_URL_GOERLI = process.env.REACT_APP_GRAPH_API_URL_GOERLI;
export const GRAPH_API_URL_XDAI = process.env.REACT_APP_GRAPH_API_URL_XDAI;
export const ALLOW_LIST_VERIFIER_CONTRACTS = {
    [mainnet.id]: "0x0F4648d997e486cE06577d6Ee2FecBcA84b834F4",
    [polygonMumbai.id]: "0xE0AD16EB7Ea467C694E6cFdd5E7D61FE850e8B53",
    [polygon.id]: "0x0480A370279B2e70378188E1bd4f1cD7D76D8aD2",
};