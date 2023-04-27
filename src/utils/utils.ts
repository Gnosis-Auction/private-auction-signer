import { Chain } from "wagmi";

export const LOG = console;

export const elipsify = (address: string) => {
    if (address != null) {
        return `${address.slice(0, 6)}...${address.slice(
            address.length - 6,
            address.length
        )}`;
    }
};

export const prependZeros = (str: string, length: number) => {
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
};

export const GnosisChain: Chain = {
    /** ID in number form */
    id: 100,
    /** Human-readable name */
    name: "Gnosis",
    /** Internal network name */
    network: "Gnosis",
    /** Currency used by chain */
    nativeCurrency: { name: "Gnosis", symbol: "xDAI", decimals: 18 },
    /** Collection of RPC endpoints */
    rpcUrls: {
        default: "https://rpc.gnosischain.com",
    },
    /** Collection of block explorers */
    blockExplorers: {
        default: {
            name: "Gnosis",
            url: "https://gnosisscan.io",
        },
    },
};

export const CHAIN = GnosisChain;
